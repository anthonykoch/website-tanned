import { animate } from 'motion/react'
import { easeInOutCubic } from './animation'

/**
 * Gets the absolute offset (top and left position) of an element relative to the document.
 *
 * @param element - The HTML element to get the offset for
 * @returns Object containing top and left offset values in pixels
 */
export function getOffset(element: HTMLElement): { top: number; left: number } {
  let top = 0
  let left = 0
  let currentElement: HTMLElement | null = element

  while (currentElement) {
    top += currentElement.offsetTop
    left += currentElement.offsetLeft
    currentElement = currentElement.offsetParent as HTMLElement | null
  }

  return { top, left }
}

export function getOffsetWithinContainer(
  element: HTMLElement,
  container: HTMLElement,
): { top: number; left: number } {
  const elementRect = element.getBoundingClientRect()
  const containerRect = container.getBoundingClientRect()

  return {
    left: elementRect.left - containerRect.left + container.scrollLeft,
    top: elementRect.top - containerRect.top + container.scrollTop,
  }
}

/**
 * Calculates scroll duration based on distance, making longer scrolls take proportionally longer.
 *
 * @param distance - The distance to scroll in pixels
 * @param options - Configuration options
 * @param options.minDuration - Minimum duration in seconds (default: 0.3)
 * @param options.maxDuration - Maximum duration in seconds (default: 2)
 * @param options.pixelsPerSecond - Speed in pixels per second (default: 1000)
 * @returns Duration in seconds
 */
export function getScrollDuration(
  distance: number,
  options?: {
    minDuration?: number
    maxDuration?: number
    pixelsPerSecond?: number
  },
): number {
  const {
    minDuration = 0.3,
    maxDuration = 4.5,
    pixelsPerSecond = 1500,
  } = options || {}

  const absoluteDistance = Math.abs(distance)
  const calculatedDuration = absoluteDistance / pixelsPerSecond

  return Math.max(minDuration, Math.min(maxDuration, calculatedDuration))
}

export const scrollTo = (selector: string | HTMLElement) => {
  const dom =
    typeof selector === 'string'
      ? (document.querySelector(selector)! as HTMLElement)
      : selector

  dom.scrollIntoView({ behavior: 'smooth' })
}
