export interface IDeferred<T> {
  resolve: () => void
  reject: () => void
  promise: Promise<T>
}
