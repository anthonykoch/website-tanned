import * as React from 'react'

export const ExternalLink: React.FC<
  { newTab?: boolean } & React.HTMLProps<HTMLAnchorElement>
> = ({ href, children, newTab = true, ...props }) => {
  return (
    <a
      href={href}
      {...props}
      target={newTab ? '_blank' : undefined}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}
