export const toNumber = (v: unknown) => {
  const n = typeof v === 'number' ? v : Number(String(v).trim());
  if (Number.isNaN(n)) throw new Error(`Not a number: ${v}`);
  return n;
};
