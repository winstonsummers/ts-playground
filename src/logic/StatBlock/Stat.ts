interface IStat {
  score: number
  bonus: number
}

enum Bonuses {
  minusOne = -1,
  minusTwo = -2,
  minusThree = -3,
  flat = 0,
  plusOne = 1,
  plusTwo = 2,
  plusThree = 3,
}

const driviveBonusMap = (): {
  [key: number]: Bonuses
} =>{
  const {
    minusOne,
    minusTwo,
    minusThree,
    flat,
    plusOne,
    plusTwo,
    plusThree
  } = Bonuses

  return {
    '18' : plusThree,
    '17' : plusTwo,
    '16' : plusTwo,
    '15' : plusOne,
    '14' : plusOne,
    '13' : plusOne,
    '12' : flat,
    '11' : flat,
    '10' : flat,
    '9'  : flat,
    '8'  : minusOne,
    '7'  : minusOne,
    '6'  : minusOne,
    '5'  : minusTwo,
    '4'  : minusTwo,
    '3'  : minusThree,
  } 
}

export default class Stat implements IStat {
  private _score!: number;
  private _bonus!: number;
  private static driviveBonusMap = driviveBonusMap();

  constructor(value: number) {
    this.value = value
  }

  private static driviveBonus(value: number): number {
    return Stat.driviveBonusMap[value]
  }

  private set value(value: number) {
    this._score = value;
    this._bonus = Stat.driviveBonus(value)
  }

  public get score() {
    return this._score;
  }

  public get bonus() {
    return this._bonus;
  }
}