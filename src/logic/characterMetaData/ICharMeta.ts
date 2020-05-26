export enum metaDataType {
  Race = '_race',
  Archetype = '_archetype',
}

export default interface ICharMeta {
  dataType: metaDataType
  dataName: string
  hasMagic: boolean
  modifiers: {
    // path to value: plus/minus value
    [key: string]: (currValue?: any) => any
  }
  abilities: any[]
}