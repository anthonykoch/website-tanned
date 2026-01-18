import {
  RouterComposerProvider
} from '@/features/router/context/RouterComposerContext'
import { Sail } from '@/features/sail/Sail'
import { Animations } from '@/features/site/Animations'
import { MobileNavigation } from '@/features/site/MobileNavigation/MobileNavigation'
import { MobileNavTrigger } from '@/features/site/MobileNavTrigger'
import { NavigationScrollReveal } from '@/features/site/Navigation/NavigationScrollReveal'
import { SiteNavigation } from '@/features/site/SiteNavigation'
import { TanStackDevtools } from '@tanstack/react-devtools'
import {
  HeadContent,
  Scripts,
  createRootRoute
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { Provider } from 'jotai'

import css from '../styles/main.css?url'

// import Header from '../components/Header'

// import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: '',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap',
      },
      {
        rel: 'stylesheet',
        href: css,
      },
    ],
  }),

  notFoundComponent: () => {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <p className="top-[-10vh] relative font-heading text-[32px] leading-none font-500">404 | Page not found</p>
      </div>
    )
  },

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <RouterComposerProvider>
          {/* <Analytics /> */}
          <Provider>
            <MobileNavigation />
            <MobileNavTrigger />
            <Sail />
            <Animations />
            <div className="mix-blend-difference fixed top-0 left-0 w-full z-1000">
              <NavigationScrollReveal>
                <div className="max-w-site mx-auto">
                  <SiteNavigation colorVariant="white" isBlendModeDifference />
                </div>
              </NavigationScrollReveal>
            </div>
            {children}
          </Provider>
        </RouterComposerProvider>

        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}
