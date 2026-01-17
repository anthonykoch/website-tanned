import { useEffect, useRef } from 'react'
import { useRouterComposer } from '../router/context/RouterComposerContext'
// import { EventEmitter } from 'eventemitter3'

const isInternalLink = (href: string) => {
  try {
    const url = new URL(href)
    return url.hostname === window.location.hostname
  } catch (err) {
    return false
  }
}

const isCurrentLink = (href: string) => {
  try {
    const url = new URL(href)
    return url.pathname === window.location.pathname
  } catch (err) {
    return false
  }
}

export const useHandleLinkClicks = () => {
  return 
  const router = useRouter()
  const composer = useRouterComposer()
  const pathname = usePathname()
  const previousPathname = useRef(pathname)
  const timeout = useRef<any>(null)

  useEffect(() => {
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname
      timeout.current = setTimeout(() => {
        composer.notify('done')
      }, 150)
    }
    return () => {
      clearTimeout(timeout.current)
    }
  }, [pathname])

  useEffect(() => {
    const handleClick = async (e: MouseEvent) => {
      if (e.button !== 0) {
        return
      }

      const target = (e.target as HTMLElement).closest('a')

      if (target == null) return

      if (isInternalLink(target.href) && !isCurrentLink(target.href)) {
        e.preventDefault()

        await composer.notify('before')
        router.push(target.href)
      }
    }

    window.addEventListener('click', handleClick, { capture: true })

    return () => {
      window.removeEventListener('click', handleClick, { capture: true })
    }
  }, [])
}
