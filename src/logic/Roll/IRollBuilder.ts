import { die } from './IRoll'
import { Roll } from './index'

export default interface IRollBuilder {
  d: (sides: die) => Roll
  percentile: () => Roll
  stats: () => Roll  
}