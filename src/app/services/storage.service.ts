import { Injectable } from '@angular/core'
import { isValid } from 'date-fns'

@Injectable({ providedIn: 'root' })
export class StorageService {

  private readonly VALID_DATE_PREFIX = 'valid~date~'

  setItem(key: string, value: any) {
    if (value instanceof Date && isValid(value)) value = `${this.VALID_DATE_PREFIX}${value}`
    localStorage.setItem(key, JSON.stringify(value))
  }

  getItem(key: string, defaultValue: any = null): any {
    const raw: string = localStorage.getItem(key)
    if (raw != null) {
      let ret: any = JSON.parse(raw)
      if (typeof ret === 'string' && ret.startsWith(this.VALID_DATE_PREFIX)) ret = new Date(ret.replace(this.VALID_DATE_PREFIX, ''))
      return ret
    }
    return defaultValue
  }

  removeItem(key: string) {
    localStorage.removeItem(key)
  }
}
