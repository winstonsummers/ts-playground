import ICharacter from './ICharacter';
import StatBlock from '../StatBlock';
import Roll from '../Roll';

export default class Character implements ICharacter {
  private _name: string;
  private _race: string;
  private _archetype: string;
  private _stats: StatBlock;

  constructor({name, race, archetype}: {name: string, race: string, archetype: string}) {
    this._name = name;
    this._race = race;
    this._archetype = archetype;

    const rollStats = new Roll().stats().asPool;
    this._stats = new StatBlock(rollStats)
  }

  public get name() {
    return this._name;
  }

  public getIntroduction() {
    const {
      name,
      race,
      archetype,
    } = this;

    return `Hello, I'm ${name} the ${race} ${archetype}!`
  }

  public get race() {
    return this._race;
  }

  public get archetype() {
    return this._archetype;
  }

  public get stats() {
    return this._stats;
  }
}