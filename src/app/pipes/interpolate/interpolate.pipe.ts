import { Pipe, PipeTransform } from '@angular/core'
import { get } from 'lodash-es'

// https://stackoverflow.com/a/58643995/1205871

// noinspection RegExpDuplicateCharacterInClass
const regex: RegExp = /{{([^}}]+)?}}/g

@Pipe({ name: 'interpolate', pure: false })
export class InterpolatePipe implements PipeTransform {
  transform(value: string, obj: any): string {
    const replacer = (_match: string, prop: string): string => {
      prop = prop.trim()
      const val: any = get(obj, prop)
      return val != null ? val.toString().trim() : ''
    }
    return value.replace(regex, replacer)
  }
}
