import { describe, expect, test } from "bun:test";
import { getToolPage, toolPages } from "./index";

interface Overrides {
  runs?: number;
  steps?: number;
  yearly?: boolean;
  extra?: Record<string, number>;
}

const calc = (slug: string, overrides: Overrides = {}) => {
  const { calculator } = getToolPage(slug);
  const extra = {
    ...Object.fromEntries((calculator.extraInputs ?? []).map((input) => [input.id, input.default])),
    ...overrides.extra,
  };
  return calculator.calculate({
    runs: overrides.runs ?? calculator.defaults.runs,
    steps: overrides.steps ?? calculator.defaults.steps,
    yearly: overrides.yearly ?? calculator.defaults.yearly,
    extra,
  });
};

describe("every calculator", () => {
  test.each(toolPages.map((page) => page.slug))("%s renders clean default output", (slug) => {
    const result = calc(slug);
    for (const value of [result.units, result.plan, result.cost, result.costNote ?? ""]) {
      expect(value).not.toMatch(/NaN|undefined|Infinity|\/mo\/mo/);
    }
    expect(result.units.length).toBeGreaterThan(0);
    expect(result.plan.length).toBeGreaterThan(0);
    expect(result.cost.length).toBeGreaterThan(0);
  });

  test.each(toolPages.map((page) => page.slug))("%s survives zero runs", (slug) => {
    const result = calc(slug, { runs: 0 });
    expect(`${result.units} ${result.plan} ${result.cost}`).not.toMatch(/NaN|undefined|Infinity/);
  });

  test.each(toolPages.map((page) => page.slug))("%s survives huge volumes", (slug) => {
    const result = calc(slug, { runs: 1_000_000_000, steps: 50 });
    expect(`${result.units} ${result.plan} ${result.cost}`).not.toMatch(/NaN|undefined|Infinity/);
  });
});

describe("n8n", () => {
  test("default is 1,000 executions on Starter", () => {
    expect(calc("n8n")).toMatchObject({ units: "1,000", plan: "Starter", cost: "€20/mo" });
  });
  test("steps never change the execution count", () => {
    expect(calc("n8n", { steps: 50 }).units).toBe("1,000");
    expect(calc("n8n", { steps: 1 }).cost).toBe("€20/mo");
  });
  test("tier boundaries", () => {
    expect(calc("n8n", { runs: 2500 }).plan).toBe("Starter");
    expect(calc("n8n", { runs: 2501 })).toMatchObject({ plan: "Pro", cost: "€50/mo" });
    expect(calc("n8n", { runs: 10000 }).plan).toBe("Pro");
    expect(calc("n8n", { runs: 10001 })).toMatchObject({ plan: "Pro (50,000 tier)", cost: "€121/mo" });
    expect(calc("n8n", { runs: 50000 }).plan).toBe("Pro (50,000 tier)");
    expect(calc("n8n", { runs: 50001 })).toMatchObject({ plan: "Business or Enterprise", cost: "From €667/mo" });
  });
  test("monthly billing uses monthly prices", () => {
    expect(calc("n8n", { yearly: false }).cost).toBe("€24/mo");
    expect(calc("n8n", { runs: 5000, yearly: false }).cost).toBe("€60/mo");
    expect(calc("n8n", { runs: 20000, yearly: false }).cost).toBe("€145/mo");
  });
  test("always mentions the self-hosted option", () => {
    expect(calc("n8n").selfHostLine).toContain("Community Edition");
  });
});

describe("zapier", () => {
  test("default is 4,000 tasks on Professional at $133.50", () => {
    expect(calc("zapier")).toMatchObject({ units: "4,000", plan: "Professional, 5,000 tasks", cost: "$133.50/mo" });
  });
  test("yearly billing is cheaper", () => {
    expect(calc("zapier", { yearly: true }).cost).toBe("$89/mo");
  });
  test("the trigger is free, so one step costs nothing", () => {
    expect(calc("zapier", { steps: 1 }).units).toBe("0");
  });
  test("filter and formatter steps are free", () => {
    expect(calc("zapier", { extra: { freeSteps: 2 } }).units).toBe("2,000");
  });
  test("AI steps are charged at the tier rate", () => {
    expect(calc("zapier", { extra: { aiSteps: 1 } }).units).toBe("6,000");
    expect(calc("zapier", { extra: { aiSteps: 1, aiRate: 5 } }).units).toBe("8,000");
  });
  test("free plan needs few tasks, two steps, no AI and one user", () => {
    expect(calc("zapier", { runs: 100, steps: 2 })).toMatchObject({ plan: "Free", cost: "$0/mo" });
    expect(calc("zapier", { runs: 101, steps: 2 }).plan).not.toBe("Free");
    expect(calc("zapier", { runs: 100, steps: 3 }).plan).not.toBe("Free");
    expect(calc("zapier", { runs: 100, steps: 2, extra: { users: 2 } }).plan).not.toBe("Free");
  });
  test("more than one user moves to Team", () => {
    expect(calc("zapier", { extra: { users: 2 } })).toMatchObject({ plan: "Team, 5,000 tasks", cost: "$178.50/mo" });
  });
  test("above 2,000,000 tasks it asks you to contact sales", () => {
    expect(calc("zapier", { runs: 3_000_000 })).toMatchObject({ plan: "Enterprise", cost: "Contact Zapier sales" });
  });
});

describe("make", () => {
  test("default is 5,000 credits on Core at $9 yearly", () => {
    expect(calc("make")).toMatchObject({ units: "5,000", plan: "Core, 10,000 credits", cost: "$9/mo", costNote: "$10.59/mo if billed monthly" });
  });
  test("monthly billing flips the headline and the note", () => {
    expect(calc("make", { yearly: false })).toMatchObject({ cost: "$10.59/mo", costNote: "$9/mo if billed yearly" });
  });
  test("every module is a credit, the trigger included", () => {
    expect(calc("make", { runs: 1000, steps: 8 }).units).toBe("8,000");
  });
  test("1,000 credits or fewer is the free plan", () => {
    expect(calc("make", { runs: 200, steps: 5 })).toMatchObject({ plan: "Free (2 active scenarios)", cost: "$0/mo" });
    expect(calc("make", { runs: 201, steps: 5 }).plan).toContain("Core");
  });
  test("loops add runs × items × steps in the loop", () => {
    expect(calc("make", { runs: 1000, steps: 1, extra: { loopItems: 12, loopSteps: 200 } }).units).toBe("2,401,000");
  });
  test("moves from Core to Pro above 300,000 credits", () => {
    expect(calc("make", { runs: 30000, steps: 10 }).plan).toBe("Core, 300,000 credits");
    expect(calc("make", { runs: 30001, steps: 10 }).plan).toContain("Pro");
  });
  test("above 8,000,000 credits it is Enterprise", () => {
    expect(calc("make", { runs: 2_000_000, steps: 5 })).toMatchObject({ plan: "Enterprise", cost: "Custom" });
  });
  test("large prices use thousands separators", () => {
    expect(calc("make", { runs: 1000, steps: 1, extra: { loopItems: 12, loopSteps: 200 } }).cost).toBe("$4,811.40/mo");
  });
});

describe("pabbly-connect", () => {
  test("default is 4,000 tasks on Standard at $19", () => {
    expect(calc("pabbly-connect")).toMatchObject({ units: "4,000", plan: "Standard", cost: "$19/mo" });
  });
  test("Standard stacks in 10,000 task blocks", () => {
    expect(calc("pabbly-connect", { runs: 10000 })).toMatchObject({ units: "40,000", plan: "Standard", cost: "$76/mo" });
    expect(calc("pabbly-connect", { runs: 2500 }).cost).toBe("$19/mo");
    expect(calc("pabbly-connect", { runs: 2501 }).cost).toBe("$38/mo");
  });
  test("Unlimited wins once stacking costs more than $79", () => {
    expect(calc("pabbly-connect", { runs: 12500 })).toMatchObject({ plan: "Unlimited", cost: "$79/mo" });
  });
  test("yearly prices are lower", () => {
    expect(calc("pabbly-connect", { yearly: true }).cost).toBe("$16/mo");
    expect(calc("pabbly-connect", { runs: 12500, yearly: true })).toMatchObject({ plan: "Unlimited", cost: "$69/mo" });
  });
  test("free plan covers 100 tasks and two steps", () => {
    expect(calc("pabbly-connect", { runs: 100, steps: 2 }).plan).toBe("Free");
    expect(calc("pabbly-connect", { runs: 101, steps: 2 }).plan).not.toBe("Free");
  });
});

describe("pipedream", () => {
  test("default is 5,000 credits on Startup at $150 with a yearly note", () => {
    expect(calc("pipedream")).toMatchObject({ units: "5,000", plan: "Startup", cost: "$150/mo", costNote: "$99/mo if billed yearly" });
  });
  test("extra credits cost $0.012 each beyond 10,000", () => {
    expect(calc("pipedream", { runs: 10000 })).toMatchObject({ units: "50,000", cost: "$630/mo", costNote: "$579/mo if billed yearly" });
  });
  test("seconds and memory scale credits", () => {
    expect(calc("pipedream", { extra: { seconds: 31 } }).units).toBe("10,000");
    expect(calc("pipedream", { extra: { memory: 512 } }).units).toBe("10,000");
  });
  test("Workflows mode bills per run, not per step", () => {
    expect(calc("pipedream", { extra: { workflows: 1 } }).units).toBe("1,000");
  });
  test("over 1,000,000 credits points to Business pricing", () => {
    expect(calc("pipedream", { runs: 300000 }).plan).toContain("Business volume pricing");
  });
  test("large prices use thousands separators", () => {
    expect(calc("pipedream", { runs: 300000 }).cost).toBe("$18,030/mo");
  });
});

describe("integrately", () => {
  test("default is 5,000 tasks on Professional", () => {
    expect(calc("integrately")).toMatchObject({ units: "5,000", plan: "Professional", cost: "$39/mo" });
  });
  test("monthly billing is dearer", () => {
    expect(calc("integrately", { yearly: false }).cost).toBe("$49/mo");
  });
  test("free needs one step and 100 tasks or fewer", () => {
    expect(calc("integrately", { runs: 100, steps: 1 })).toMatchObject({ plan: "Free", cost: "$0/mo" });
    expect(calc("integrately", { runs: 100, steps: 2 }).plan).not.toBe("Free");
  });
  test("above 150,000 tasks you contact Integrately", () => {
    expect(calc("integrately", { runs: 200000, steps: 1 })).toMatchObject({ plan: "Contact Integrately", cost: "Custom" });
  });
});

describe("ifttt", () => {
  test("default is 5,000 credits on Starter", () => {
    expect(calc("ifttt")).toMatchObject({ units: "5,000", plan: "Starter", cost: "$2.99/mo" });
  });
  test("yearly price is lower", () => {
    expect(calc("ifttt", { yearly: true }).cost).toBe("$2.09/mo");
  });
  test("faster applets force a higher plan", () => {
    expect(calc("ifttt", { runs: 200, extra: { speed: 0 } })).toMatchObject({ plan: "Free", cost: "$0/mo" });
    expect(calc("ifttt", { runs: 200, extra: { speed: 1 } }).plan).toBe("Starter");
    expect(calc("ifttt", { runs: 200, extra: { speed: 2 } }).plan).toBe("Pro");
  });
  test("two accounts on one service needs Pro+", () => {
    expect(calc("ifttt", { extra: { multiAccount: 1 } })).toMatchObject({ plan: "Pro+", cost: "$19.99/mo" });
  });
  test("plan allowances are inclusive", () => {
    expect(calc("ifttt", { runs: 200, steps: 5 }).plan).toBe("Free");
    expect(calc("ifttt", { runs: 201, steps: 5 }).plan).toBe("Starter");
    expect(calc("ifttt", { runs: 4000, steps: 5 }).plan).toBe("Pro");
    expect(calc("ifttt", { runs: 20000, steps: 5 }).plan).toBe("Pro+");
  });
  test("above 100,000 credits it is Business at a custom price", () => {
    expect(calc("ifttt", { runs: 100001, steps: 1 })).toMatchObject({ plan: "Business", cost: "Custom" });
  });
});

describe("gumloop", () => {
  test("default is 4,000 credits on Pro at $37", () => {
    expect(calc("gumloop")).toMatchObject({ units: "4,000", plan: "Pro", cost: "$37/mo" });
  });
  test("credits are runs × (1 + AI steps × credits per AI step)", () => {
    expect(calc("gumloop", { extra: { aiSteps: 2, creditsPerAiStep: 10 } }).units).toBe("21,000");
  });
  test("AI steps are capped at the number of steps", () => {
    expect(calc("gumloop", { steps: 2, extra: { aiSteps: 5 } }).units).toBe("7,000");
  });
  test("overage is $0.005 per credit above 20,000", () => {
    expect(calc("gumloop", { runs: 5000 })).toMatchObject({ units: "20,000", plan: "Pro", cost: "$37/mo" });
    expect(calc("gumloop", { runs: 10000 })).toMatchObject({ units: "40,000", plan: "Pro + pay-as-you-go", cost: "$137/mo" });
  });
  test("above 1,020,000 credits it is Enterprise", () => {
    expect(calc("gumloop", { runs: 1_000_000 })).toMatchObject({ plan: "Enterprise", cost: "Custom" });
  });
});

describe("lindy", () => {
  test("default is 15,000 credits on a 15,000-credit Team seat", () => {
    expect(calc("lindy")).toMatchObject({ units: "15,000", plan: "Team, 15,000-credit seat", cost: "$99.99/mo" });
  });
  test("a large model uses the bigger seat on a tie", () => {
    expect(calc("lindy", { extra: { creditsPerStep: 10 } })).toMatchObject({
      units: "50,000",
      plan: "Team, 45,000-credit seat + 5 top-ups",
      cost: "$349.99/mo",
    });
  });
  test("phone minutes add 25 credits each", () => {
    expect(calc("lindy", { extra: { phoneMinutes: 40 } }).units).toBe("16,000");
  });
  test("every extra user pays for a seat", () => {
    const one = calc("lindy");
    const two = calc("lindy", { extra: { users: 2 } });
    expect(parseFloat(two.cost.replace(/[$,]/g, ""))).toBeGreaterThan(parseFloat(one.cost.replace(/[$,]/g, "")));
  });
});

describe("relay", () => {
  test("default has no published plan and no price", () => {
    expect(calc("relay")).toMatchObject({ units: "4,000", cost: "—" });
    expect(calc("relay").plan).toContain("None published");
  });
  test("the trigger is free", () => {
    expect(calc("relay", { runs: 100, steps: 1 }).units).toBe("0");
  });
  test("plan follows the step allowance", () => {
    expect(calc("relay", { runs: 50, steps: 5 }).plan).toContain("Free");
    expect(calc("relay", { runs: 150, steps: 5 }).plan).toContain("Professional");
    expect(calc("relay", { runs: 200, steps: 5 }).plan).toContain("Team");
    expect(calc("relay", { runs: 500, steps: 5 }).plan).toContain("None published");
  });
  test("always says the tool is closed", () => {
    expect(calc("relay", { runs: 50, steps: 5 }).plan).toContain("Relay.app is closed");
  });
});

describe("workato", () => {
  test("never calculates a price", () => {
    expect(calc("workato")).toMatchObject({ units: "4,000", plan: "Quote based", cost: "Not public" });
    expect(calc("workato", { runs: 5_000_000, steps: 20 }).cost).toBe("Not public");
  });
  test("a single-step workflow uses no tasks", () => {
    expect(calc("workato", { steps: 1 }).units).toBe("0");
  });
});

describe("tray", () => {
  test("default is 5,000 tasks on Pro with a custom quote", () => {
    expect(calc("tray")).toMatchObject({ units: "5,000", plan: "Pro", cost: "Custom quote" });
  });
  test("loops add items × steps inside the loop per run", () => {
    expect(calc("tray", { extra: { loop_items: 10, loop_steps: 2 } }).units).toBe("25,000");
  });
});

describe("power-automate", () => {
  test("default is one Premium licence at $15", () => {
    expect(calc("power-automate")).toMatchObject({ units: "1", plan: "Premium", cost: "$15/mo" });
  });
  test("Premium is priced per person", () => {
    expect(calc("power-automate", { extra: { owners: 3 } })).toMatchObject({ units: "3", cost: "$45/mo" });
  });
  test("without premium connectors a light workload is covered by Microsoft 365", () => {
    expect(calc("power-automate", { extra: { premium: 0 } })).toMatchObject({ plan: "Microsoft 365", cost: "$0/mo" });
  });
  test("unattended bots add a Process bot", () => {
    expect(calc("power-automate", { extra: { unattended: 1 } })).toMatchObject({ plan: "Premium + Process bot", cost: "$165/mo" });
  });
  test("a very heavy workload outgrows Premium and moves to Process", () => {
    expect(calc("power-automate", { runs: 1_000_000 })).toMatchObject({ plan: "Process", cost: "$150/mo" });
  });
});

describe("activepieces", () => {
  test("default is the free plan", () => {
    expect(calc("activepieces")).toMatchObject({ units: "1,000", plan: "Free", cost: "$0/mo" });
  });
  test("steps don't change credits", () => {
    expect(calc("activepieces", { steps: 40 }).units).toBe("1,000");
  });
  test("AI steps add credits at the model rate", () => {
    expect(calc("activepieces", { extra: { aiSteps: 1, aiCredit: 2 } }).units).toBe("3,000");
    expect(calc("activepieces", { extra: { aiSteps: 1, aiCredit: 10 } }).units).toBe("11,000");
  });
  test("an own API key rules out the free plan", () => {
    expect(calc("activepieces", { runs: 500, extra: { aiSteps: 1, aiCredit: 1 } }).plan).toBe("Plus");
  });
  test("Plus is $20 plus $0.007 per credit above 10,000", () => {
    expect(calc("activepieces", { runs: 20000 })).toMatchObject({ plan: "Plus", cost: "$90/mo" });
    expect(calc("activepieces", { runs: 20000, yearly: true }).cost).toBe("$86/mo");
  });
  test("Team takes over when it is cheaper", () => {
    expect(calc("activepieces", { runs: 60000 })).toMatchObject({ plan: "Team", cost: "$270/mo" });
  });
});
