export const func = (k: number): number => {
  if (k == 0) {
    return 1;
  }
  return k * func(k - 1);
};
