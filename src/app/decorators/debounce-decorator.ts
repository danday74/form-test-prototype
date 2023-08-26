import { debounce, DebounceSettings } from 'lodash-es'

// https://engineering.datorama.com/be-aware-of-the-debounce-decorator-6fb24a6d8d5

// example: decorate method with ... @debounceDecorator(250, { leading: true, trailing: false })
// noinspection JSUnusedGlobalSymbols
export const debounceDecorator = (waitMs = 0, options: DebounceSettings = { leading: false, trailing: true }) => {
  return (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
    const map = new WeakMap()
    const originalMethod = descriptor.value
    descriptor.value = function (...args: any[]) {
      let debounced = map.get(this)
      if (!debounced) {
        debounced = debounce(originalMethod, waitMs, options).bind(this)
        map.set(this, debounced)
      }
      debounced(...args)
    }
    return descriptor
  }
}
