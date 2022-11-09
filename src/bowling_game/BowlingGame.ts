export class Game {
  Frame: Frame = new Frame();

  constructor() {}

  public roll(pins: number) {}

  public score(): number {
    return 0;
  }
}

export class Frame {
  constructor() {}
}

export class Roll {
  pins: number;
  constructor(pins: number) {
    this.pins = pins;
  }
}
