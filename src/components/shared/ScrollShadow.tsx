'use client'

import React, { useEffect, useRef } from 'react'
import cx from 'classnames'
import _ from 'lodash'

export const ScrollShadow: React.FC = ({ children }) => {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const onScroll = () => {
    setShadowShowing(isScrolledToEnd())
  }

  const onScrollThrottled = _.throttle(onScroll, 50, { trailing: true })

  const isScrolledToEnd = (): boolean => {
    if (scrollerRef.current == null) return false

    return (
      scrollerRef.current.scrollWidth - scrollerRef.current.offsetWidth ===
      scrollerRef.current.scrollLeft
    )
  }

  const [isScrollShadowShowing, setShadowShowing] = React.useState(false)

  useEffect(() => {
    setShadowShowing(isScrolledToEnd())
  }, [])

  return (
    <div className="ScrollShadow">
      <div
        className={cx('ScrollShadow-shadow', {
          'is-showing': !isScrollShadowShowing,
        })}
      />
      <div
        className="ScrollShadow-scroller"
        ref={scrollerRef}
        onScroll={onScrollThrottled}
      >
        <div className="ScrollShadow-container">{children}</div>
      </div>
    </div>
  )
}
