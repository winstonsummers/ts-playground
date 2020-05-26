import ICharMeta, { metaDataType } from  '../ICharMeta';
import { races, metadataCreator } from '../index'
import Character from '../../Character';
import Stat from '../../StatBlock/Stat';

const Human: ICharMeta = {
  dataType: metaDataType.Race,
  dataName: races.Human,
  hasMagic: false,
  modifiers: {
    '_stats._con': (currentValue: Stat) => {
      const newValue = currentValue.score + 1;
      return new Stat(newValue);
    },
    '_stats._cha': (currentValue: Stat) => {
      const newValue = currentValue.score + 1;
      return new Stat(newValue);
    },
  },
  abilities: [

  ],
}

const createHuman: (_this: Character) => Character = metadataCreator(Human);

export default createHuman;