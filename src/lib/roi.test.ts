import { describe, expect, test } from "bun:test";
import {
  applyField,
  calcRoi,
  clampField,
  defaultInputs,
  formatFteLabel,
  formatHours,
  formatMoney,
  formatPayback,
  formatRoi,
  fromSearchParams,
  isOutOfRange,
  limits,
  taskIds,
  taskPresets,
  toSearchParams,
  withPreset,
  type NumericField,
  type RoiInputs,
} from "./roi";

const withInputs = (overrides: Partial<RoiInputs>): RoiInputs => ({ ...defaultInputs, ...overrides });

describe("calcRoi with the default inputs", () => {
  const result = calcRoi(defaultInputs);

  test("works out the manual hours per month", () => {
    expect(result.manualHoursMonth).toBeCloseTo(33.3333, 3);
  });

  test("works out hours and money saved", () => {
    expect(result.hoursSavedMonth).toBeCloseTo(26.6667, 3);
    expect(result.valueMonth).toBeCloseTo(1253.3333, 3);
    expect(result.netMonth).toBeCloseTo(1203.3333, 3);
  });

  test("works out the yearly figures", () => {
    expect(result.hoursSavedYear).toBeCloseTo(320, 5);
    expect(result.valueYear).toBeCloseTo(15040, 5);
    expect(result.netYear).toBeCloseTo(14440, 5);
    expect(result.fte).toBeCloseTo(0.17778, 4);
  });

  test("has no payback or ROI without a build cost", () => {
    expect(result.buildCost).toBeNull();
    expect(result.paybackMonths).toBeNull();
    expect(result.roiYear1).toBeNull();
    expect(result.net3yr).toBeNull();
  });

  test("has something to save", () => {
    expect(result.hasNothingToSave).toBe(false);
  });
});

describe("calcRoi with a build cost", () => {
  const result = calcRoi(withInputs({ buildCost: 6000 }));

  test("works out the payback period", () => {
    expect(result.paybackMonths).toBeCloseTo(4.986, 2);
  });

  test("works out the first year ROI", () => {
    expect(result.roiYear1).toBeCloseTo(140.667, 2);
  });

  test("works out the three year net", () => {
    expect(result.net3yr).toBeCloseTo(37320, 3);
  });

  test("ignores a zero build cost", () => {
    const zero = calcRoi(withInputs({ buildCost: 0 }));
    expect(zero.buildCost).toBeNull();
    expect(zero.paybackMonths).toBeNull();
  });

  test("ignores an empty build cost", () => {
    expect(calcRoi(withInputs({ buildCost: Number.NaN })).buildCost).toBeNull();
  });

  test("caps the build cost at the limit", () => {
    expect(calcRoi(withInputs({ buildCost: 9_999_999 })).buildCost).toBe(limits.buildCost.max);
  });

  test("has no payback when the automation costs more than it saves", () => {
    const losing = calcRoi(withInputs({ buildCost: 6000, runningCost: 5000, volume: 1, minutes: 1 }));
    expect(losing.paybackMonths).toBeNull();
  });
});

describe("calcRoi with growth", () => {
  const result = calcRoi(withInputs({ growth: 20 }));

  test("scales the yearly savings by half the growth", () => {
    expect(result.hoursSavedYear).toBeCloseTo(352, 5);
  });

  test("grows the end of year workload by the full amount", () => {
    expect(result.endOfYearHoursMonth).toBeCloseTo(40, 5);
  });
});

describe("calcRoi with empty or out of range fields", () => {
  test("treats an emptied field as zero without producing NaN", () => {
    const result = calcRoi(withInputs({ volume: Number.NaN }));
    expect(result.volume).toBe(0);
    expect(result.hasNothingToSave).toBe(true);
    for (const value of [result.hoursSavedMonth, result.valueMonth, result.netMonth, result.netYear, result.fte]) {
      expect(Number.isFinite(value)).toBe(true);
    }
  });

  test("every field emptied at once stays finite", () => {
    const result = calcRoi({ ...defaultInputs, volume: NaN, minutes: NaN, hourlyCost: NaN, automationShare: NaN, runningCost: NaN, growth: NaN, buildCost: NaN });
    for (const value of [result.manualHoursMonth, result.hoursSavedMonth, result.valueMonth, result.netMonth, result.valueYear, result.netYear, result.fte]) {
      expect(Number.isFinite(value)).toBe(true);
    }
    expect(result.hasNothingToSave).toBe(true);
  });

  test("raises a too small value to the minimum", () => {
    expect(calcRoi(withInputs({ volume: 0 })).volume).toBe(limits.volume.min);
  });

  test("lowers a too large value to the maximum", () => {
    expect(calcRoi(withInputs({ volume: 999_999 })).volume).toBe(limits.volume.max);
  });

  test("reports nothing to save at zero automation share", () => {
    expect(calcRoi(withInputs({ automationShare: 0 })).hasNothingToSave).toBe(true);
  });
});

describe("every task preset", () => {
  test.each([...taskIds])("%s gives a clean result", (task) => {
    const preset = taskPresets[task];
    const result = calcRoi(withInputs({ task, volume: preset.volume, minutes: preset.minutes, automationShare: preset.automationShare }));
    for (const value of Object.values(result)) {
      if (typeof value === "number") expect(Number.isFinite(value)).toBe(true);
    }
    expect(result.hasNothingToSave).toBe(false);
  });

  test("presets sit inside the allowed limits", () => {
    for (const task of taskIds) {
      const preset = taskPresets[task];
      expect(isOutOfRange("volume", preset.volume)).toBe(false);
      expect(isOutOfRange("minutes", preset.minutes)).toBe(false);
      expect(isOutOfRange("automationShare", preset.automationShare)).toBe(false);
    }
  });
});

describe("clampField and isOutOfRange", () => {
  test("clamps both ends", () => {
    expect(clampField("hourlyCost", 1)).toBe(5);
    expect(clampField("hourlyCost", 9999)).toBe(500);
    expect(clampField("hourlyCost", 47)).toBe(47);
  });

  test("flags values outside the limits", () => {
    expect(isOutOfRange("volume", 0)).toBe(true);
    expect(isOutOfRange("volume", 100001)).toBe(true);
    expect(isOutOfRange("volume", 50)).toBe(false);
  });

  test("does not flag an empty field", () => {
    expect(isOutOfRange("volume", Number.NaN)).toBe(false);
  });
});

describe("applyField", () => {
  test("keeps an emptied field empty so it can be retyped", () => {
    const next = applyField(defaultInputs, "volume", Number.NaN);
    expect(Number.isNaN(next.volume)).toBe(true);
  });

  test("turns an emptied build cost into null", () => {
    expect(applyField(withInputs({ buildCost: 5000 }), "buildCost", Number.NaN).buildCost).toBeNull();
  });

  test("sets a typed value", () => {
    expect(applyField(defaultInputs, "minutes", 12).minutes).toBe(12);
  });

  test("does not change the other fields", () => {
    const next = applyField(defaultInputs, "volume", 10);
    expect({ ...next, volume: defaultInputs.volume }).toEqual(defaultInputs);
  });
});

describe("withPreset", () => {
  const touched = new Set<NumericField>();

  test("applies the task preset to volume, minutes and share", () => {
    const next = withPreset(defaultInputs, "reporting", touched);
    expect(next.task).toBe("reporting");
    expect(next.volume).toBe(taskPresets.reporting.volume);
    expect(next.minutes).toBe(taskPresets.reporting.minutes);
    expect(next.automationShare).toBe(taskPresets.reporting.automationShare);
  });

  test("keeps fields the user has already edited", () => {
    const edited = withInputs({ volume: 777 });
    const next = withPreset(edited, "reporting", new Set<NumericField>(["volume"]));
    expect(next.volume).toBe(777);
    expect(next.minutes).toBe(taskPresets.reporting.minutes);
  });

  test("leaves the cost fields alone", () => {
    const next = withPreset(withInputs({ hourlyCost: 80, runningCost: 120 }), "support_replies", touched);
    expect(next.hourlyCost).toBe(80);
    expect(next.runningCost).toBe(120);
  });
});

describe("formatters", () => {
  test("formatHours keeps one decimal under ten and rounds down above", () => {
    expect(formatHours(5.55)).toBe("5.5");
    expect(formatHours(26.67)).toBe("26");
    expect(formatHours(1234.5)).toBe("1,234");
  });

  test("formatHours never goes negative", () => {
    expect(formatHours(-3)).toBe("0.0");
  });

  test("formatMoney rounds down to the nearest ten", () => {
    expect(formatMoney(1253.33)).toBe("$1,250");
    expect(formatMoney(9)).toBe("$0");
    expect(formatMoney(-50)).toBe("$0");
  });

  test("formatFteLabel describes small and normal values", () => {
    expect(formatFteLabel(0.05)).toBe("less than a tenth of a full-time role");
    expect(formatFteLabel(0.177)).toBe("0.1 of a full-time role");
    expect(formatFteLabel(2.46)).toBe("2.4 of a full-time role");
  });

  test("formatPayback rounds up to whole months", () => {
    expect(formatPayback(0.5)).toBe("under a month");
    expect(formatPayback(1)).toBe("1 month");
    expect(formatPayback(1.2)).toBe("2 months");
    expect(formatPayback(4.986)).toBe("5 months");
  });

  test("formatRoi rounds down and adds thousands separators", () => {
    expect(formatRoi(140.667)).toBe("140%");
    expect(formatRoi(12345.9)).toBe("12,345%");
  });
});

describe("share links", () => {
  test("only writes fields that have a value", () => {
    const params = toSearchParams(defaultInputs);
    expect(params.get("t")).toBe("data_entry");
    expect(params.get("v")).toBe("400");
    expect(params.has("b")).toBe(false);
  });

  test("skips emptied fields", () => {
    expect(toSearchParams(withInputs({ volume: Number.NaN })).has("v")).toBe(false);
  });

  test("round trips every field", () => {
    const inputs = withInputs({ task: "reporting", volume: 12, minutes: 30, hourlyCost: 60, automationShare: 55, runningCost: 80, growth: 40, buildCost: 7500 });
    const { parsed, provided } = fromSearchParams(toSearchParams(inputs));
    expect(parsed).toEqual(inputs);
    expect(provided.size).toBe(7);
  });

  test("clamps values from the link", () => {
    const { parsed } = fromSearchParams(new URLSearchParams("v=999999&h=1"));
    expect(parsed.volume).toBe(limits.volume.max);
    expect(parsed.hourlyCost).toBe(limits.hourlyCost.min);
  });

  test("ignores empty and non numeric values", () => {
    const { parsed, provided } = fromSearchParams(new URLSearchParams("v=&m=abc&h=50"));
    expect(parsed.volume).toBeUndefined();
    expect(parsed.minutes).toBeUndefined();
    expect(parsed.hourlyCost).toBe(50);
    expect(provided.size).toBe(1);
  });

  test("ignores an unknown task", () => {
    expect(fromSearchParams(new URLSearchParams("t=nonsense")).parsed.task).toBeUndefined();
  });
});
