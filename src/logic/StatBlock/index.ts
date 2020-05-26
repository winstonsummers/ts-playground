import IStatBlock from './IStatBlock';
import Stat from './Stat';
import Roll from '../Roll';

const quickRollStats = () => new Roll().stats().asPool;

export default class StatBlock implements IStatBlock {
  private _stats!: {[key: string]: Stat}

  constructor(statArr: number[] = quickRollStats()) {
    this.statValues = statArr;
  }

  // TODO: come back and add logic to assign values to prime reqs if known
  private static statNames = ['_str', '_dex', '_con', '_int', '_wis', '_cha']
  private set statValues(statArr: number[]) {
    const { statNames } = StatBlock;
    for(let i = 0; i < statNames.length; i++) {
      const stat = statNames[i];
      this._stats[stat] = new Stat(statArr[i]);
    }
  }

  get strengeth(): Stat {
    return this._stats._str;
  }
  
  get dexarity(): Stat {
    return this._stats._dex;
  }
  
  get constitution(): Stat {
    return this._stats._con;
  }
  
  get intellegance(): Stat {
    return this._stats._int;
  }
  
  get wisdom(): Stat {
    return this._stats._wis;
  }
  
  get charisma(): Stat {
    return this._stats._cha;
  }
}