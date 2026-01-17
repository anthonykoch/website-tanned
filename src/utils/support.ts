export function supportsLvh() {
  return typeof window === 'undefined'
    ? false
    : CSS.supports('height', '100lvh')
}
