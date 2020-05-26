import ICharMeta, { metaDataType } from "../ICharMeta";
import { metadataCreator, archetypes } from "../";
import Character from "../../Character";


const Fighter: ICharMeta = {
  dataType: metaDataType.Archetype,
  dataName: archetypes.Fighter,
  hasMagic: false,
  modifiers: {
    
  },
  abilities: [

  ]
}

const createFighter: (_this: Character) => Character = metadataCreator(Fighter)

export default createFighter