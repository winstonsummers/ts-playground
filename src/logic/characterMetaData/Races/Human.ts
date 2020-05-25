import ICharMeta, { metaDataType } from  '../ICharMeta';
import { races } from '../index'

export default class Human implements ICharMeta {
  dataType: metaDataType = metaDataType.Race;
  dataName: string = races.Human;
  hasMagic: boolean = false;
  modifiers: { [key: string]: number; } = {

  };
  abilities: any[] = [

  ];
}