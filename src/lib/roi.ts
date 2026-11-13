export const taskIds = [
  "data_entry",
  "lead_follow_up",
  "support_replies",
  "reporting",
  "client_onboarding",
  "other",
] as const;

export type TaskId = (typeof taskIds)[number];

export const taskPresets: Record<
  TaskId,
  { label: string; volume: number; minutes: number; automationShare: number }
> = {
  data_entry: {
    label: "Data entry (invoices, forms, orders)",
    volume: 400,
    minutes: 5,
    automationShare: 80,
  },
  lead_follow_up: {
    label: "Lead follow-up and CRM updates",
    volume: 200,
    minutes: 10,
    automationShare: 70,
  },
  support_replies: {
    label: "Answering support questions",
    volume: 1000,
    minutes: 6,
    automationShare: 50,
  },
  reporting: {
    label: "Weekly reporting",
    volume: 4,
    minutes: 120,
    automationShare: 85,
  },
  client_onboarding: {
    label: "Client onboarding",
    volume: 20,
    minutes: 90,
    automationShare: 70,
  },
  other: {
    label: "Something else",
    volume: 100,
    minutes: 10,
    automationShare: 60,
  },
};

export const taskService: Record<TaskId, string> = {
  lead_follow_up: "lead-generation",
  data_entry: "document-processing",
  support_replies: "support-agents",
  reporting: "maintenance",
  client_onboarding: "maintenance",
  other: "agent-development",
};

export const limits = {
  volume: { min: 1, max: 100000, step: 1 },
  minutes: { min: 0.5, max: 480, step: 0.5 },
  hourlyCost: { min: 5, max: 500, step: 1 },
  automationShare: { min: 0, max: 100, step: 5 },
  runningCost: { min: 0, max: 10000, step: 5 },
  growth: { min: 0, max: 300, step: 10 },
  buildCost: { min: 0, max: 500000, step: 100 },
} as const;

export type LimitedField = keyof typeof limits;

export const productiveHoursPerYear = 1800;

export interface RoiInputs {
  task: TaskId;
  volume: number;
  minutes: number;
  hourlyCost: number;
  automationShare: number;
  runningCost: number;
  growth: number;
  buildCost: number | null;
}

export const defaultInputs: RoiInputs = {
  task: "data_entry",
  volume: taskPresets.data_entry.volume,
  minutes: taskPresets.data_entry.minutes,
  hourlyCost: 47,
  automationShare: taskPresets.data_entry.automationShare,
  runningCost: 50,
  growth: 0,
  buildCost: null,
};

export const clampField = (field: LimitedField, value: number) =>
  Math.min(Math.max(value, limits[field].min), limits[field].max);

export const isOutOfRange = (field: LimitedField, value: number) =>
  Number.isFinite(value) &&
  (value < limits[field].min || value > limits[field].max);

const safe = (field: LimitedField, value: number) =>
  Number.isFinite(value) ? clampField(field, value) : 0;

export const calcRoi = (inputs: RoiInputs) => {
  const volume = safe("volume", inputs.volume);
  const minutes = safe("minutes", inputs.minutes);
  const hourlyCost = safe("hourlyCost", inputs.hourlyCost);
  const share = safe("automationShare", inputs.automationShare);
  const runningCost = safe("runningCost", inputs.runningCost);
  const growth = safe("growth", inputs.growth) / 100;
  const buildCost =
    inputs.buildCost !== null && Number.isFinite(inputs.buildCost)
      ? clampField("buildCost", inputs.buildCost)
      : null;

  const growthFactor = 1 + growth / 2;
  const manualHoursMonth = (volume * minutes) / 60;
  const hoursSavedMonth = manualHoursMonth * (share / 100);
  const valueMonth = hoursSavedMonth * hourlyCost;
  const netMonth = valueMonth - runningCost;
  const hoursSavedYear = hoursSavedMonth * 12 * growthFactor;
  const valueYear = valueMonth * 12 * growthFactor;
  const netYear = valueYear - runningCost * 12;
  const fte = hoursSavedYear / productiveHoursPerYear;
  const endOfYearHoursMonth = manualHoursMonth * (1 + growth);
  const hasBuild = buildCost !== null && buildCost > 0;

  return {
    volume,
    share,
    growth: growth * 100,
    buildCost: hasBuild ? buildCost : null,
    manualHoursMonth,
    hoursSavedMonth,
    valueMonth,
    netMonth,
    hoursSavedYear,
    valueYear,
    netYear,
    fte,
    endOfYearHoursMonth,
    paybackMonths: hasBuild && netMonth > 0 ? buildCost / netMonth : null,
    roiYear1: hasBuild ? ((netYear - buildCost) / buildCost) * 100 : null,
    net3yr: hasBuild ? netMonth * 36 * growthFactor - buildCost : null,
    hasNothingToSave: volume === 0 || minutes === 0 || share === 0,
  };
};

export type RoiResult = ReturnType<typeof calcRoi>;

export const formatHours = (hours: number) => {
  const value = Math.max(hours, 0);
  if (value < 10) return (Math.floor(value * 10) / 10).toFixed(1);
  return Math.floor(value).toLocaleString("en-US");
};

export const formatMoney = (amount: number) => {
  const value = Math.floor(Math.max(amount, 0) / 10) * 10;
  return `$${value.toLocaleString("en-US")}`;
};

const floorFte = (fte: number) => Math.floor(Math.max(fte, 0) * 10) / 10;

export const formatFteLabel = (fte: number) => {
  const value = floorFte(fte);
  return value < 0.1
    ? "less than a tenth of a full-time role"
    : `${value.toFixed(1)} of a full-time role`;
};

export const formatPayback = (months: number) => {
  if (months < 1) return "under a month";
  const rounded = Math.ceil(months);
  return `${rounded} ${rounded === 1 ? "month" : "months"}`;
};

export const formatRoi = (percent: number) =>
  `${Math.floor(percent).toLocaleString("en-US")}%`;

const paramKeys = {
  task: "t",
  volume: "v",
  minutes: "m",
  hourlyCost: "h",
  automationShare: "s",
  runningCost: "r",
  growth: "g",
  buildCost: "b",
} as const;

const numericFields = [
  "volume",
  "minutes",
  "hourlyCost",
  "automationShare",
  "runningCost",
  "growth",
  "buildCost",
] as const;

export type NumericField = (typeof numericFields)[number];

export const toSearchParams = (inputs: RoiInputs) => {
  const params = new URLSearchParams();
  params.set(paramKeys.task, inputs.task);
  for (const field of numericFields) {
    const value = inputs[field];
    if (value !== null && Number.isFinite(value)) {
      params.set(paramKeys[field], String(value));
    }
  }
  return params;
};

export const fromSearchParams = (params: URLSearchParams) => {
  const task = params.get(paramKeys.task);
  const parsed: Partial<RoiInputs> = {};
  const provided = new Set<NumericField>();
  if (taskIds.includes(task as TaskId)) parsed.task = task as TaskId;
  for (const field of numericFields) {
    const raw = params.get(paramKeys[field]);
    const value = raw === null || raw === "" ? NaN : Number(raw);
    if (!Number.isFinite(value)) continue;
    parsed[field] = clampField(field, value);
    provided.add(field);
  }
  return { parsed, provided };
};
