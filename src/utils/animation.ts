export function easeOutExpo(x: number): number {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

export function easeInQuart(x: number): number {
  return x * x * x * x
}

export function easeInExpo(x: number): number {
  return x === 0 ? 0 : Math.pow(2, 10 * x - 10)
}

export const easeOutCubic = (m: number) => --m * m * m + 1

export const easeInOutCubic = (x: number): number =>
  x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2

export function staggeredEase(
  index: number,
  totalItems: number,
  staggerAmount: number,
  easing: (t: number) => number = (t) => t,
) {
  return (progress: number) => {
    // When this item starts and stops in the overall timeline
    const start = index * staggerAmount
    const end = 1 - (totalItems - 1 - index) * staggerAmount

    // Convert global progress to local progress for this item
    const local = (progress - start) / (end - start)

    // Clamp to 0-1 and apply easing
    const clamped = Math.max(0, Math.min(1, local))
    return easing(clamped)
  }
}

export const fixFontSpacing = (
  lines: HTMLElement[],
  size: number = 0.2,
  unit: string = 'em',
) => {
  lines.forEach((line, i) => {
    line.style.position = 'relative'
    line.style.top = `-${i * size}${unit}`
  })
}
