export const calcProgress = (done: number, quantity: number): number => {
  return (done / quantity) * 100
}
