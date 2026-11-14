export const sanitizeCount = (raw: string, max?: number) => {
  const digits = raw.replace(/\D/g, "").replace(/^0+(?=\d)/, "");
  if (max === undefined || digits === "") return digits;
  return Number(digits) > max ? String(max) : digits;
};

export const countValue = (raw: string) => {
  const value = Number(raw);
  return Number.isFinite(value) ? value : 0;
};
