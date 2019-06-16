import { useEffect, RefObject } from 'react'

export default (ref: RefObject<HTMLElement>, trigger: boolean) => {
  let originalFocus: HTMLElement | null

  useEffect(() => {
    if (!ref.current) {
      return
    }

    if (document.activeElement !== ref.current) {
      originalFocus = document.activeElement as HTMLElement
    }

    if (trigger) {
      ref.current.focus()
    } else if (originalFocus) {
      originalFocus.focus()
    }

    return () => {
      if (document.activeElement === ref.current && originalFocus) {
        originalFocus.focus()
      }
    }
  }, [trigger])
}
