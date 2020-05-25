import ICharacter from './ICharacter';
import StatBlock from '../StatBlock';
import Roll from '../Roll';
import ICharMeta, { metaDataType } from '../characterMetaData/ICharMeta';

export default class Character implements ICharacter {
  private _name: string;
  private _race: string | ICharMeta;
  private _archetype: string | ICharMeta;
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

  public attachMetaData(charMeta: ICharMeta): Character {
    this[charMeta.dataType] = charMeta;
    return this;
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