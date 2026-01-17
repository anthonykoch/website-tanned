import { AnimationPlaybackControls } from 'motion/react'
import { useRef } from 'react'

export const useAnimator = <Key extends string>() => {
  type RefValue = Record<Key, AnimationPlaybackControls[]>

  const ref = useRef({} as RefValue)

  return {
    // active(): AnimationPlaybackControls[] {
    //   return Object.values(ref.current).flat()
    // },

    async wait() {
      return (await Promise.all(
        Object.values(ref.current).flat(),
      )) as AnimationPlaybackControls[]
    },

    add(
      animations: Record<Key, AnimationPlaybackControls[] | undefined | null>,
    ) {
      Object.keys(animations).forEach((key) => {
        const k = key as Key
        ref.current[k] ??= []
        const arr = animations[k]

        if (arr) {
          ref.current[k].push(...arr)
        }
      })

      return this
    },
    overwrite(
      ...args: Array<
        Partial<Record<Key, AnimationPlaybackControls[] | undefined | null>>
      >
    ) {
      args.forEach((animations) => {
        Object.keys(animations).forEach((key) => {
          // const old = ref.current[key as Key]

          // if (old) old.forEach((a) => a.stop())

          const as = animations[key as Key]
          if (as) ref.current[key as Key] = as
        })
      })

      return this
    },

    stop(key: Key | Key[]) {
      let keys = typeof key === 'string' ? [key] : key

      keys.forEach((k) => {
        ;(ref.current[k] ?? []).forEach((a) => a.stop())
      })

      return this
    },
    stopAll() {
      Object.values<AnimationPlaybackControls[]>(ref.current)
        .flat()
        .forEach((a) => a.stop())

      return this
    },
  }
}
