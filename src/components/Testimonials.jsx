// Testimonials Section — "What our customer says About Us"

import e262 from '../../trams/Ellipse 262.png'
import e263 from '../../trams/Ellipse 263.png'
import e264 from '../../trams/Ellipse 264.png'
import e265 from '../../trams/Ellipse 265.png'
import e266 from '../../trams/Ellipse 266.png'
import e267 from '../../trams/Ellipse 267.png'
import e268 from '../../trams/Ellipse 268.png'
import e269 from '../../trams/Ellipse 269.png'
import e270 from '../../trams/Ellipse 270.png'
import vector5 from '../../trams/Vector 5.png'
import line65 from '../../trams/Line 65.png'

export default function Testimonials() {
  return (
    <section className="relative w-full py-[100px] overflow-visible">
      <div className="mx-auto max-w-[1844px] px-[80px] relative">
        <div className="text-center mb-[70px]">
          <h2 className="font-gerbil text-[56px] leading-[76px] font-[400] text-black max-w-[860px] mx-auto">
            <span className="text-highlight-green">What</span> our customer says <span className="underline-yellow">About Us</span>
          </h2>
        </div>

        <div className="relative mx-auto max-w-[980px]">
          <img
            src={vector5}
            alt=""
            className="decorative absolute left-[-60px] top-[20px] hidden xl:block"
            style={{ width: '160px', zIndex: 1 }}
          />
          <img
            src={line65}
            alt=""
            className="decorative absolute right-[-36px] top-[80px] hidden xl:block"
            style={{ width: '220px', zIndex: 1 }}
          />

          <div
            className="bg-[#EEF2EC] rounded-[32px] px-[52px] py-[64px] relative"
            style={{ zIndex: 2 }}
          >
            <div className="text-[72px] leading-[0.8] text-[#00000026] font-bold">“</div>
            <p className="font-satoshi text-[24px] leading-[36px] text-[#000] text-center mx-auto max-w-[740px] mt-[24px] mb-[24px]">
              Elementum delivered the site with inthe timeline as they requested.
              Inthe end, the client found a 50% increase in traffic with in days
              since its launch. They also had an impressive ability to use
              technologies that the company hasn't used, which have also proved
              to be easy to use and reliable
            </p>
            <div className="text-[72px] leading-[0.8] text-[#00000026] font-bold text-right">”</div>
          </div>

          <img
            src={e262}
            alt="Customer"
            className="avatar-circle absolute"
            style={{ width: '76px', height: '76px', left: '-90px', top: '18px', zIndex: 3 }}
          />
          <img
            src={e263}
            alt="Customer"
            className="avatar-circle absolute"
            style={{ width: '54px', height: '54px', left: '-48px', top: '210px', opacity: 0.8, zIndex: 3 }}
          />
          <img
            src={e264}
            alt="Customer"
            className="avatar-circle absolute"
            style={{ width: '64px', height: '64px', left: '-18px', top: '320px', zIndex: 2 }}
          />
          <img
            src={e265}
            alt="Customer"
            className="avatar-circle absolute"
            style={{ width: '62px', height: '62px', right: '-70px', top: '20px', opacity: 0.8, zIndex: 3 }}
          />
          <img
            src={e268}
            alt="Customer"
            className="avatar-circle absolute"
            style={{ width: '96px', height: '96px', right: '-42px', top: '160px', zIndex: 3 }}
          />
          <img
            src={e269}
            alt="Customer"
            className="avatar-circle absolute"
            style={{ width: '132px', height: '132px', right: '-4px', top: '280px', zIndex: 2 }}
          />
        </div>

        <div className="flex justify-center gap-[18px] mt-[52px] flex-wrap">
          <img src={e266} alt="Customer" className="avatar-circle" style={{ width: '56px', height: '56px' }} />
          <img src={e267} alt="Customer" className="avatar-circle" style={{ width: '56px', height: '56px' }} />
          <img src={e270} alt="Customer" className="avatar-circle" style={{ width: '56px', height: '56px' }} />
        </div>
      </div>
    </section>
  )
}
