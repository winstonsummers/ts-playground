import ICharMeta, { metaDataType } from  '../ICharMeta';

export default class Human implements ICharMeta {
  dataType: metaDataType = metaDataType.Race;
  dataName: string = 'Human';
  hasMagic: boolean = false;
  modifiers: { [key: string]: number; } = {

  };
  abilities: any[] = [

  ];
  
}