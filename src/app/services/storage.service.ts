import { Injectable } from '@angular/core'

@Injectable({providedIn: 'root'})
export class StorageService {

  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  getItem(key: string, defaultValue: any = null): any {
    const raw: string = localStorage.getItem(key)
    if (raw != null) return JSON.parse(raw)
    return defaultValue
  }
}
