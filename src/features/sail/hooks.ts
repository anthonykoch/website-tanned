import { useRouter } from '@tanstack/react-router'
import { useEffect } from 'react'
import { useRouterComposer } from '../router/context/RouterComposerContext'

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
  const router = useRouter()
  const composer = useRouterComposer()

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

        router.navigate({
          to: target.pathname,
        })
      }
    }

    window.addEventListener('click', handleClick, { capture: true })

    return () => {
      window.removeEventListener('click', handleClick, { capture: true })
    }
  }, [])
}
