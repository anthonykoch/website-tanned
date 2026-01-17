'use client'

import React, { useCallback } from 'react'
import cx from 'classnames'
import { ScrollShadow } from './ScrollShadow'

const TabsContext = React.createContext<{
  setSelected: (id: string) => void
  generateId: (id: string) => string
  activeId: string
}>({} as any)

export const TabItem: React.FC<{ id: string }> = ({ id, children }) => {
  const context = React.useContext(TabsContext)

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()

    if (e.button === 0) {
      notify()
    }
  }

  const notify = () => {
    context.setSelected(id)
  }

  const isActive = context.activeId === id

  return (
    <button
      className={cx('Tabs-item', { 'is-active': isActive })}
      aria-selected={isActive}
      id={context.generateId(id)}
      onClick={onClick}
      role="tab"
    >
      {children}
    </button>
  )
}

export const Tabs: React.FC<{
  onChange: (id: string) => void
  defaultId: string
  name: string
}> = ({ name, defaultId, onChange, children }) => {
  const [activeId, setActiveId] = React.useState(defaultId)

  const setSelected = useCallback(
    (id: string) => {
      setActiveId(id)
      onChange(id)
    },
    [setActiveId, onChange],
  )

  const generateId = useCallback(
    (id: string) => {
      return `${name}-${id}`
    },
    [name],
  )

  const value = React.useMemo(() => {
    return {
      activeId,
      setSelected,
      generateId,
    }
  }, [activeId, generateId, setSelected])

  return (
    <ScrollShadow>
      <div className="Tabs" data-id={activeId}>
        <div className="Tabs-container" role="tablist">
          <TabsContext.Provider value={value}>
            <div className="Tabs-container">{children}</div>
          </TabsContext.Provider>
        </div>
      </div>
    </ScrollShadow>
  )
}
