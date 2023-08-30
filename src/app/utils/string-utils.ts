import { template, templateSettings } from 'lodash-es'

export const isStringAnInteger = (str: string): boolean => {
  return /^\d+$/.test(str)
}

export const fixUnits = (str: string): string => {
  str = str.trim()
  return (isStringAnInteger(str)) ? `${str}px` : str
}

export const adjustSizeForMin = (size: string, min: number): string => {
  size = size.trim()
  size = size.replace(/px$/, '')
  if (isStringAnInteger(size)) {
    if (+size < min) {
      console.warn(`size ${size}px is less than the minimum value of ${min}px \u2013 adjusting size to the minimum`)
      size = min.toString()
    }
    return `${size}px`
  }
  return size
}

export const formatMe = (str: string, obj: any): string => {
  templateSettings.interpolate = /{{([\s\S]+?)}}/g
  const compiled = template(str)
  return compiled(obj)
}
