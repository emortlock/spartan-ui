import { useEffect } from 'react'
import { Key } from '../types'

import detectKeyPress from '../utils/detectKeyPress'

export default (
  key: Key,
  handler: (e: KeyboardEvent) => void,
  disabled: boolean = false,
) => {
  useEffect(() => {
    if (disabled) {
      return
    }

    const handleKeyPress = detectKeyPress([key], handler)

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [key, handler, disabled])
}
