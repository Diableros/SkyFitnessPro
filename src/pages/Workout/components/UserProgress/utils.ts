export const calcProgress = (done: number, quantity: number): number => {
  return Math.ceil((done / quantity) * 100)
}
