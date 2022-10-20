import { func } from "./a";

describe("f(k) = k * f(k - 1)", () => {
  test("f(0) = 1", () => {
    const result = func(0);
    expect(result).toBe(1);
  });

  test("f(2)", () => {
    const result = func(2);
    expect(result).toBe(2);
  });
  test("f(3)", () => {
    const result = func(3);
    expect(result).toBe(6);
  });
  test("f(10)", () => {
    const result = func(10);
    expect(result).toBe(3628800);
  });
});
