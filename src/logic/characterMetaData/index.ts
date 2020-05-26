import ICharMeta from "./ICharMeta";
import Character from "./../Character";

export enum archetypes {
  Fighter = 'fighter',
}

export enum races {
  Human = 'human',
}

export const metadataCreator = (metadata: ICharMeta) => (_this: Character): Character => {
  _this.attachMetaData(metadata)
  return _this;
}