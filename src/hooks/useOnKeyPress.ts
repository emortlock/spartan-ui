import { useEffect } from 'react'
import { Key } from '../types'

import detectKeyPress from '../utils/detectKeyPress'

export default (key: Key, handler: (e: KeyboardEvent) => void) => {
  const handleKeyPress = detectKeyPress([key], handler)

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  })
}
