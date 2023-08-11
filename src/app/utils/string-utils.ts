export const isStringAnInteger = (str: string): boolean => {
  return /^\d+$/.test(str)
}

export const fixUnits = (str: string): string => {
  return (isStringAnInteger(str)) ? `${str}px` : str
}
