import { template, templateSettings } from 'lodash-es'

export const isStringAnInteger = (str: string): boolean => {
  return /^\d+$/.test(str)
}

export const fixUnits = (str: string): string => {
  return (isStringAnInteger(str)) ? `${str}px` : str
}

export const formatMe = (str: string, obj: any): string => {
  templateSettings.interpolate = /{{([\s\S]+?)}}/g
  const compiled = template(str)
  return compiled(obj)
}
