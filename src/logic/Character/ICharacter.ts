import StatBlock from "../StatBlock";

export default interface ICharacter {
  name: string
  race: string
  archetype: string
  stats: StatBlock
  getIntroduction: () => string
}