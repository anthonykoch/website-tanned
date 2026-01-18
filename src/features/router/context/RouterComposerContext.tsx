'use client'

import React, {
  FC,
  ReactNode,
  use,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

type Events = 'before' | 'change' | 'done'

interface RouterComposerContextValue {
  notify: (eventName: Events) => Promise<any[]>
  subscribe: (name: Events, fn: () => Promise<any>) => void
  unsubscribe: (name: Events, fn: () => Promise<any>) => void
}

export const RouterComposerContext =
  React.createContext<RouterComposerContextValue | null>(null)

export const useRouterComposer = () => {
  const context = use(RouterComposerContext)

  if (context == null) throw new Error('RouterSubscriptionContext is null')

  return context
}

export const useRouterListener = (name: Events, fn: () => Promise<any>) => {
  const subs = useRouterComposer()
  useCallback

  const ref = useRef<typeof fn>(fn)

  useEffect(() => {
    ref.current = fn
  }, [fn])

  const callback = useCallback(() => {
    return ref.current()
  }, [])

  useEffect(() => {
    subs.subscribe(name, callback)

    return () => {
      subs.unsubscribe(name, callback)
    }
  }, [subs, name, callback])
}

export const RouterComposerProvider: FC<{ children?: ReactNode }> = ({
  children,
}) => {
  const subscribers = useMemo<{
    [key in Events]?: Set<() => Promise<any>>
  }>(() => ({}), [])

  const unsubscribe = useCallback(
    (name: Events, subscriber: () => Promise<any>) => {
      subscribers[name] ??= new Set()
      subscribers[name].delete(subscriber)
    },
    [],
  )

  const subscribe = useCallback(
    (name: Events, subscriber: () => Promise<any>) => {
      subscribers[name] ??= new Set()
      subscribers[name].add(subscriber)
    },
    [],
  )

  const notify = (name: Events): Promise<void[]> => {
    return Promise.all(
      Array.from(subscribers[name] ?? [() => Promise.resolve()]).map((sub) =>
        sub(),
      ),
    )
  }

  const sub = useMemo(() => {
    return {
      subscribe,
      unsubscribe,
      notify,
    }
  }, [subscribe])

  return (
    <RouterComposerContext.Provider value={sub}>
      {children}
    </RouterComposerContext.Provider>
  )
}
