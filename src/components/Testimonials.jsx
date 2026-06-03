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

export default function Testimonials() {
  return (
    <section className="relative w-full py-[80px] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-[60px]">

        {/* Heading */}
        <div className="text-center mb-[60px]">
          <h2
            className="font-satoshi font-bold text-black leading-[1.1]"
            style={{ fontSize: 'clamp(32px, 3.8vw, 60px)' }}
          >
            What our customer
            <br />
            says{' '}
            <span className="underline-red-bold italic">About Us</span>
          </h2>
        </div>

        {/* Testimonial layout */}
        <div className="relative flex items-center justify-center gap-[60px] flex-wrap lg:flex-nowrap">

          {/* Left floating avatars column */}
          <div className="relative flex flex-col gap-[20px] items-center" style={{ minWidth: '80px' }}>
            <img src={e262} alt="Customer" className="avatar-circle float-1" style={{ width: '72px', height: '72px' }} />
            <img src={e263} alt="Customer" className="avatar-circle float-3" style={{ width: '48px', height: '48px', opacity: 0.7 }} />
            <img src={e264} alt="Customer" className="avatar-circle float-2" style={{ width: '64px', height: '64px' }} />
          </div>

          {/* Center testimonial card */}
          <div
            className="relative flex-1 bg-white rounded-[24px] p-[48px] shadow-lg"
            style={{ maxWidth: '640px', minWidth: '280px' }}
          >
            {/* Open quote */}
            <div
              className="text-[#F97171] font-bold mb-[24px]"
              style={{ fontSize: '72px', lineHeight: 0.8, fontFamily: 'Georgia, serif' }}
            >
              "
            </div>

            <p
              className="text-[#333] leading-[1.9] text-center mb-[24px]"
              style={{ fontSize: 'clamp(13px, 1.1vw, 16px)' }}
            >
              Elementum delivered the site with inthe timeline
              as they promised. Inthe end, the client found a 50%
              increase in traffic with in days since its launch. They
              also had an impressive ability to use technologies that
              the company hasn't used, which have also proved to
              be easy to use and reliable
            </p>

            {/* Close quote */}
            <div
              className="text-[#F97171] font-bold text-right"
              style={{ fontSize: '72px', lineHeight: 0.8, fontFamily: 'Georgia, serif' }}
            >
              "
            </div>
          </div>

          {/* Right floating avatars column */}
          <div className="relative flex flex-col gap-[20px] items-center" style={{ minWidth: '80px' }}>
            <img src={e265} alt="Customer" className="avatar-circle float-2" style={{ width: '56px', height: '56px', opacity: 0.75 }} />
            <img src={e268} alt="Customer" className="avatar-circle float-1" style={{ width: '88px', height: '88px' }} />
            <img src={e269} alt="Customer" className="avatar-circle float-3" style={{ width: '120px', height: '120px' }} />
          </div>
        </div>

        {/* Additional bottom avatars – row */}
        <div className="flex justify-center gap-[16px] mt-[48px] flex-wrap">
          <img src={e266} alt="Customer" className="avatar-circle float-4" style={{ width: '52px', height: '52px' }} />
          <img src={e267} alt="Customer" className="avatar-circle float-5" style={{ width: '52px', height: '52px' }} />
          <img src={e270} alt="Customer" className="avatar-circle float-6" style={{ width: '52px', height: '52px' }} />
        </div>
      </div>
    </section>
  )
}
