'use client'

import React from 'react'
import { ImageCompare } from './ImageCompare'
import { TabItem, Tabs } from './Tabs'

interface Tab {
  id: string
  content: React.ReactNode
  left: string
  right: string
  height: number
  width: number
  isDefault?: boolean
}

interface Props {
  tabs: Tab[]
  name: string
}

export const TabbedImageCompare: React.FC<Props> = ({ tabs, name }) => {
  const defaultTab = tabs.find((tab) => tab.isDefault) ?? tabs[0]
  const [activeTab, setActiveTab] = React.useState<Tab>(defaultTab)

  if (activeTab == null) {
    return null
  }

  return (
    <div>
      <div></div>
      <Tabs
        name={name}
        defaultId={defaultTab?.id}
        onChange={(id) => setActiveTab(tabs.find((tab) => tab.id === id)!)}
      >
        {tabs.map((tab) => (
          <TabItem id={tab.id} key={tab.id}>
            {tab.content}
          </TabItem>
        ))}
      </Tabs>
      <ImageCompare
        left={activeTab.left}
        right={activeTab.right}
        height={activeTab.height}
        width={activeTab.width}
      />
    </div>
  )
}
