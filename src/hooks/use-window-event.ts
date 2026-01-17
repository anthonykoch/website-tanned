import { useEffect } from 'react'

export const useWindowEvent = <
  K extends keyof WindowEventMap,
  T extends (this: Window, event: WindowEventMap[K]) => any,
>(
  event: K,
  callback: T,
) => {
  useEffect(() => {
    window.addEventListener(event, callback)

    return () => {
      window.removeEventListener(event, callback)
    }
  }, [callback, event])
}
