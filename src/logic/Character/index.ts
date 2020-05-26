import ICharacter from './ICharacter';
import StatBlock from '../StatBlock';
import ICharMeta from '../characterMetaData/ICharMeta';

export default class Character extends StatBlock implements ICharacter {
  private _name: string;

  constructor(name: string, rollStats?: number[]) {
    super(rollStats)

    this._name = name;
  }

  public get name() {
    return this._name;
  }

  private applyModifiers = ({modifiers}: ICharMeta) => {
    for(const path in modifiers) {
      const changeCB = modifiers[path];
      let thisDotPath = (this as ICharacter)[path]
      thisDotPath = changeCB(thisDotPath);
    }
  }

  private set _race(race: ICharMeta) {
    this.applyModifiers(race);
    this._race = race;
  }

  private set _archetype(archetype: ICharMeta) {
    this.applyModifiers(archetype);
    this._archetype = archetype;
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
}