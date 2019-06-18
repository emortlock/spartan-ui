import { useEffect, useRef, RefObject } from 'react'

export default (ref: RefObject<HTMLElement>, trigger: boolean) => {
  const originalFocusRef = useRef<HTMLElement>()

  useEffect(() => {
    const { current } = ref
    const { current: originalFocus } = originalFocusRef

    if (!current) {
      return
    }

    if (document.activeElement !== current) {
      originalFocusRef.current = document.activeElement as HTMLElement
    }

    if (trigger) {
      current.focus()
    } else if (originalFocus) {
      originalFocus.focus()
    }

    return () => {
      if (document.activeElement === current && originalFocus) {
        originalFocus.focus()
      }
    }
  }, [ref, trigger])
}
