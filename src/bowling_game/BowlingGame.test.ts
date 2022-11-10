import { Game } from "./BowlingGame";

describe("Bowling game test", () => {
  let g: Game;

  beforeEach(() => {
    g = new Game();
  });

  test("Test gutter game", () => {
    rollMany(20, 0);
    expect(g.score()).toBe(0);
  });

  test("Test all ones", () => {
    rollMany(20, 1);
    expect(g.score()).toBe(20);
  });

  test("Test one spare", () => {
    rollSpare();
    g.roll(3);
    rollMany(17, 0);
    expect(g.score()).toBe(16);
  });

  test("Test one strike", () => {
    rollStrike();
    g.roll(3);
    g.roll(4);
    rollMany(16, 0);
    expect(g.score()).toBe(24);
  });

  test("Test perfect game", () => {
    rollMany(12, 10);
    expect(g.score()).toBe(300);
  });

  const rollMany = (n: number, pins: number) => {
    for (let i = 0; i < n; i++) {
      g.roll(pins);
    }
  };

  const rollSpare = () => {
    g.roll(5);
    g.roll(5);
  };

  const rollStrike = () => {
    g.roll(10);
  };
});
