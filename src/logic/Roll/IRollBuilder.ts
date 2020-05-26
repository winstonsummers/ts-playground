import { die } from './IRoll'
import Roll from './Roll'

export default interface IRollBuilder {
  d: (sides: die) => Roll
  percentile: () => Roll
  stats: () => Roll  
}