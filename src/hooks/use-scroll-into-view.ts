export const scrollTo = (
  selector: string | HTMLElement,
  options: {
    scrollIntoViewOptions?: ScrollIntoViewOptions
  } = {},
): void => {
  const {
    scrollIntoViewOptions = {
      behavior: 'smooth',
    },
  } = options

  const el =
    typeof selector === 'string' ? document.querySelector(selector) : selector

  if (el) {
    el.scrollIntoView(scrollIntoViewOptions)
  }
}
