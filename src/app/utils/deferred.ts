import { IDeferred } from '../interfaces/i-deferred'

// http://bluebirdjs.com/docs/api/deferred-migration.html
// avoids need to wrap code in promise constructor

export const deferred = <T>(): IDeferred<T> => {
  let resolve: (value?: T | PromiseLike<T>) => void
  let reject: (reason?: any) => void
  const promise: Promise<T> = new Promise(function () {
    resolve = arguments[0]
    reject = arguments[1]
  })
  return { resolve, reject, promise }
}
