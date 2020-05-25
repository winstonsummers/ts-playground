export type die = 0 | 4 | 6 | 8 | 10 | 12 | 20 

export default interface IRoll {
  asPool: number[]
  total: number
  sides: die
  quantity: number
}
