import { func } from "./b";

describe("fix", () => {
  test("2048 2", () => {
    const result = func(2048, 2);
    expect(result).toBe(2100);
  });
  test("1 15", () => {
    const result = func(1, 15);
    expect(result).toBe(0);
  });
  test("999 3", () => {
    const result = func(999, 3);
    expect(result).toBe(1000);
  });
  test("314159265358979 12", () => {
    const result = func(314159265358979, 12);
    expect(result).toBe(314000000000000);
  });
});
