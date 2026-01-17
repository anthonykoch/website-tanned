import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { Provider } from 'jotai'
import { RouterComposerProvider } from '@/features/router/context/RouterComposerContext'
import { Sail } from '@/features/sail/Sail'
import { Animations } from '@/features/site/Animations'
import { MobileNavigation } from '@/features/site/MobileNavigation/MobileNavigation'
import { MobileNavTrigger } from '@/features/site/MobileNavTrigger'
import { NavigationScrollReveal } from '@/features/site/Navigation/NavigationScrollReveal'
import { SiteNavigation } from '@/features/site/SiteNavigation'

import '../styles/main.css'

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
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

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
