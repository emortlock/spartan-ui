import { useEffect, RefObject } from 'react'

export default (
  ref: RefObject<HTMLElement | null>,
  handler: (e: MouseEvent) => void,
  disabled: boolean = true,
) => {
  useEffect(() => {
    if (disabled) {
      return
    }

    const listener = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as Element)) {
        return
      }

      handler(e)
    }

    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler, disabled])
}
