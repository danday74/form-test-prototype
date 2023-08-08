export const getNextItemInArray = <T>(arr: T[], item: T): T => {
  let idx: number = arr.findIndex((itm: T) => itm === item)
  if (idx === -1) return null
  idx++
  idx = idx >= arr.length ? 0 : idx
  return arr[idx]
}
