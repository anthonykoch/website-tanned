export const theme = (name: string): string => {
  const rootElement = document.documentElement
  const computedStyles = window.getComputedStyle(rootElement)

  return computedStyles.getPropertyValue(name)
}

export const themeValue = (name: string): number => {
  return parseFloat(theme(name))
}
