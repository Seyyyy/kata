export const func = (x: number, k: number) => {
  for (let i = 0; i <= k - 1; i++) {
    x = round(x, i);
  }
  return x;
};

const round = (x: number, k: number) => {
  const target = Math.trunc(x / 10 ** (k + 1));
  const flag = Math.trunc(x / 10 ** k) % 10;
  if (flag < 5) {
    return target * 10 ** (k + 1);
  }
  return (target + 1) * 10 ** (k + 1);
};
