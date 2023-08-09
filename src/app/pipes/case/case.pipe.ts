import { Pipe, PipeTransform } from '@angular/core'
import { camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase } from 'lodash-es'

@Pipe({ name: 'case' })
export class CasePipe implements PipeTransform {
  transform(value: string, kase: 'camel' | 'kebab' | 'lower' | 'snake' | 'start' | 'upper'): string {
    switch (kase) {
      case 'camel':
        return camelCase(value)
      case 'kebab':
        return kebabCase(value)
      case 'lower':
        return lowerCase(value)
      case 'snake':
        return snakeCase(value)
      case 'start':
        return startCase(value)
      case 'upper':
        return upperCase(value)
    }
  }
}
