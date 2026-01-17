import { TripleChevron } from '@/features/embellishments/TripleChevron'
import { Billboard } from './Billboard'

export const ModernFertilityBrand = () => {
  return (
    <div className="bg-black text-white z-10 relative">
      <div className="max-w-site mx-auto">
        <Billboard>
          <p>
            <span className="block">Brand: Modern Fertility</span>
            <TripleChevron />
          </p>
        </Billboard>
      </div>
    </div>
  )
}
