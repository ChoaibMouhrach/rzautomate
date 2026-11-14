import { describe, expect, test } from "bun:test";
import { countValue, sanitizeCount } from "./number-input";
import { modelRates, models, requestCost } from "./models";

const type = (start: string, keys: string[], max?: number) => keys.reduce((current, key) => sanitizeCount(current + key, max), start);

describe("sanitizeCount", () => {
  test("lets the field be emptied", () => {
    expect(sanitizeCount("")).toBe("");
  });

  test("keeps plain digits", () => {
    expect(sanitizeCount("1300")).toBe("1300");
  });

  test("drops leading zeros", () => {
    expect(sanitizeCount("01300")).toBe("1300");
    expect(sanitizeCount("000")).toBe("0");
  });

  test("keeps a single zero", () => {
    expect(sanitizeCount("0")).toBe("0");
  });

  test("removes anything that is not a digit", () => {
    expect(sanitizeCount("1,3a0.5")).toBe("1305");
    expect(sanitizeCount("-5")).toBe("5");
    expect(sanitizeCount("abc")).toBe("");
  });

  test("caps the value at max", () => {
    expect(sanitizeCount("250", 100)).toBe("100");
    expect(sanitizeCount("99", 100)).toBe("99");
  });

  test("typing after a zero replaces it", () => {
    expect(type("0", ["1", "3", "0", "0"])).toBe("1300");
  });

  test("typing into an emptied field starts from scratch", () => {
    expect(type("", ["1", "3", "0", "0"])).toBe("1300");
  });
});

describe("countValue", () => {
  test("treats an empty field as zero", () => {
    expect(countValue("")).toBe(0);
  });

  test("parses digits", () => {
    expect(countValue("0")).toBe(0);
    expect(countValue("1300")).toBe(1300);
  });

  test("never returns NaN", () => {
    expect(countValue("abc")).toBe(0);
  });
});

describe("model calculator with cleared fields", () => {
  test.each(models.map((model) => model.slug))("%s gives a finite cost when every field is empty", (slug) => {
    const model = models.find((item) => item.slug === slug)!;
    const requests = countValue("");
    const input = countValue("");
    const output = countValue("");
    const cached = countValue("");
    const monthly = requestCost(modelRates(model, input), input, output, cached) * requests;
    expect(Number.isFinite(monthly)).toBe(true);
    expect(monthly).toBe(0);
  });

  test("a typed value gives the expected monthly cost", () => {
    const model = models.find((item) => item.slug === "claude-opus-5-5")!;
    const requests = countValue(type("", ["1", "0", "0", "0"]));
    const input = countValue(type("", ["2", "0", "0", "0"]));
    const output = countValue(type("", ["4", "0", "0"]));
    const monthly = requestCost(modelRates(model, input), input, output, 0) * requests;
    expect(monthly).toBeCloseTo(16, 5);
  });
});
