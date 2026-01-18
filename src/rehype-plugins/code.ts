import { visit } from 'unist-util-visit'

const abbreviations: Record<string, string> = {
  javascript: 'js',
}

function visitor(node: any, _: number, parent: any) {
  if (!parent || parent.tagName !== 'pre') {
    return
  }

  const className = ((node && node.properties?.className) || []).find(
    (name: string) => name.startsWith('language-'),
  )

  const lang = (className ?? '').replace(/^language-/, '')

  if (lang) {
    parent.properties ??= {}
    parent.properties['data-lang'] = abbreviations[lang] ?? lang
  }
}

export const RehypeCode = () => {
  return (tree: any) => {
    // eslint-disable-next-line
    ;(visit as any)(tree, 'element', visitor)
  }
}
