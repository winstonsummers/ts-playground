import StatBlock from "../StatBlock";
import ICharMeta from "../characterMetaData/ICharMeta";
import Character from "./index";

export default interface ICharacter {
  name: string
  race: string | ICharMeta
  archetype: string | ICharMeta
  getIntroduction: () => string
  attachMetaData: (charMeta: ICharMeta) => Character
  [key: string]: any
}