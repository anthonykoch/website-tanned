import React from 'react'
import cx from 'classnames'
import { TabbedImageCompare } from './shared/TabbedImageCompare'

const Anchor: React.FC<any> = (props) => {
  let p: Record<string, any> = {} as any

  if (props.href) {
    try {
      const url = new URL(props.href)
      const HOSTNAME = 'anthonykoch.com'

      if (!url.hostname.endsWith(HOSTNAME)) {
        p = { ...p, target: '_blank', rel: 'noreferrer noopener ' }
      }
    } catch (err) {
      // that's right, I'm breaking the rules. SWALLOW IT UP
    }
  }

  return <a className="text-link hover:text-link-hover" {...props} {...p} />
}

const UnorderedList: React.FC<{ className?: string }> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ul {...props} className={cx('list-bullet', className)}>
      {children}
    </ul>
  )
}

const OrderedList: React.FC<{ className?: string }> = ({
  children,
  className,
  ...props
}) => {
  return (
    <ol {...props} className={cx('list-number', className)}>
      {children}
    </ol>
  )
}

export const markdownComponents = {
  a: Anchor,
  ul: UnorderedList,
  ol: OrderedList,
  TabbedImageCompare,
}
