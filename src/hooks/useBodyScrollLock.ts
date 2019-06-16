import { useEffect } from 'react'

export default (trigger: boolean) => {
  useEffect(() => {
    document.body.style.overflow = trigger ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [trigger])
}
