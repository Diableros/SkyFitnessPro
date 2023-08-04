export const calcProgress = (done: number, quantity: number): number => {
  return Math.ceil((done / quantity) * 100) <= 100
    ? Math.ceil((done / quantity) * 100)
    : 100
}
