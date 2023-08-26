import { throttle, ThrottleSettings } from 'lodash-es'

// https://engineering.datorama.com/be-aware-of-the-debounce-decorator-6fb24a6d8d5

// example: decorate method with ... @throttleDecorator(50, { leading: true, trailing: true })
// noinspection JSUnusedGlobalSymbols
export const throttleDecorator = (waitMs = 0, options: ThrottleSettings = { leading: true, trailing: true }) => {
  return (_target: any, _propertyKey: string, descriptor: PropertyDescriptor) => {
    const map = new WeakMap()
    const originalMethod = descriptor.value
    descriptor.value = function (...args: any[]) {
      let throttled = map.get(this)
      if (!throttled) {
        throttled = throttle(originalMethod, waitMs, options).bind(this)
        map.set(this, throttled)
      }
      throttled(...args)
    }
    return descriptor
  }
}
