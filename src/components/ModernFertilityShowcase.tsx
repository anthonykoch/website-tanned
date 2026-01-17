import ImageIpadMfDashboardHome800w from '@/public/actual/ipad-mf-dashboard-home_800w.png'
import ImageIpadMfDashboardHome1600w from '@/public/actual/ipad-mf-dashboard-home_1600w.png'
import ImageIpadMfDashboardHome2400w from '@/public/actual/ipad-mf-dashboard-home_2400w.png'
import ImageIpadMfPrenatalsPdp800w from '@/public/actual/ipad-mf-prenatals-pdp_800w.png'
import ImageIpadMfPrenatalsPdp1600w from '@/public/actual/ipad-mf-prenatals-pdp_1600w.png'
import ImageIpadMfPrenatalsPdp2400w from '@/public/actual/ipad-mf-prenatals-pdp_2400w.png'
import ImagePhoneMfCheckout900w from '@/public/actual/phone-mf-checkout_900w.png'
import ImagePhoneMfCheckout1300w from '@/public/actual/phone-mf-checkout_1300w.png'
import ImagePhoneMfCheckout1700w from '@/public/actual/phone-mf-checkout_1700w.png'
import ImagePhoneMfDashboardPlan600w from '@/public/actual/phone-mf-dashboard-plan_600w.png'
import ImagePhoneMfDashboardPlan900w from '@/public/actual/phone-mf-dashboard-plan_900w.png'
import ImagePhoneMfDashboardPlan1300w from '@/public/actual/phone-mf-dashboard-plan_1300w.png'
import ImagePhoneMfDashboardPlan1700w from '@/public/actual/phone-mf-dashboard-plan_1700w.png'

export const ModernFertilityShowcase = () => {
  return (
    <div className="px-1">
      {/* <div className="lg:grid col-span-4 lg:grid-cols-12 gap-x-4 px-1"> */}
      {/* <div className="col-span-12 xl:col-span-10 md:col-start-1 2xl:col-start-2"> */}
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-wrap lg:flex-nowrap gap-1 w-full">
          <div className="bg-[#E7E7E7] py-18 lg:py-10 lg:px-4 flex items-center justify-center w-full lg:w-[65%]">
            <img
              src={ImageIpadMfPrenatalsPdp1600w.src}
              srcSet={`${ImageIpadMfPrenatalsPdp800w.src} 800w, ${ImageIpadMfPrenatalsPdp1600w.src} 1600w, ${ImageIpadMfPrenatalsPdp2400w.src} 2400w`}
              sizes="(max-width: 720px) 90vw, 45vw"
              className="max-w-[calc(100%-48px)] lg:max-w-[88%] lg:max-h-[90%] object-contain w-full h-auto drop-shadow-phone"
            />
          </div>
          <div className="bg-[#E7E7E7] py-18 lg:px-4 flex items-center justify-center w-full lg:w-[35%]">
            <img
              src={ImagePhoneMfCheckout1300w.src}
              srcSet={`${ImagePhoneMfCheckout900w.src} 900w, ${ImagePhoneMfCheckout1300w.src} 1300w, ${ImagePhoneMfCheckout1700w.src} 1700w`}
              sizes="400px"
              className="w-[80%] lg:w-[calc(100%-64px)] max-w-[360px] drop-shadow-phone"
            />
          </div>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-1 w-full">
          <div className="bg-[#E7E7E7] py-18 lg:px-4 flex items-center justify-center w-full lg:w-[35%]">
            <img
              src={ImagePhoneMfDashboardPlan1300w.src}
              srcSet={`${ImagePhoneMfDashboardPlan600w.src} 600w, ${ImagePhoneMfDashboardPlan900w.src} 900w, ${ImagePhoneMfDashboardPlan1300w.src} 1300w, ${ImagePhoneMfDashboardPlan1700w.src} 1700w`}
              sizes="400px"
              className="w-[80%] lg:w-[calc(100%-64px)] max-w-[360px] drop-shadow-phone"
            />
          </div>
          <div className="bg-[#E7E7E7] py-18 lg:py-10 lg:px-4 flex items-center justify-center w-full lg:w-[65%]">
            <img
              src={ImageIpadMfDashboardHome1600w.src}
              srcSet={`${ImageIpadMfDashboardHome800w.src} 800w, ${ImageIpadMfDashboardHome1600w.src} 1600w, ${ImageIpadMfDashboardHome2400w.src} 2400w`}
              sizes="(max-width: 720px) 90vw, 45vw"
              className="max-w-[calc(100%-48px)] lg:max-w-[88%] lg:max-h-[90%] object-contain w-full h-auto drop-shadow-phone"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
