export interface IDeferred<T> {
  resolve: (value?: T | PromiseLike<T>) => void
  reject: (reason?: any) => void
  promise: Promise<T>
}
