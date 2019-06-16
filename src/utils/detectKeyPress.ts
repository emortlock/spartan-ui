import { Key } from '../types'

export default (match: Array<Key>, callback: (e: KeyboardEvent) => void) => (
  e: KeyboardEvent,
) => {
  if (
    match.filter(
      (key: Key) =>
        (e.key && e.key === key.name) || (e.keyCode && e.keyCode === key.code),
    ).length > 0
  ) {
    callback(e)
  }
}
