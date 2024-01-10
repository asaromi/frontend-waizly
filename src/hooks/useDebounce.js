import { useEffect } from 'react'

export const useDebounceSearch = ({ delay, value, fn }) => {
  useEffect(() => {
    const handler = setTimeout(() => {
      fn()
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value])
}
