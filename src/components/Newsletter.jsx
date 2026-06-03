// Newsletter Section — "Subscribe to our newsletter"

import polygon3 from '../../trams/Polygon 3.png'
import vector2518 from '../../trams/Vector 2518.png'

export default function Newsletter() {
  return (
    <section className="relative w-full overflow-hidden bg-[#DDE8D9] pt-[100px] pb-[80px]">
      <div className="relative mx-auto max-w-[1920px] px-[80px]">
        <img
          src={vector2518}
          alt=""
          className="decorative absolute hidden md:block"
          style={{ width: '160px', left: '50%', top: '-18px', transform: 'translateX(-50%)', zIndex: 1 }}
        />

        <img
          src={polygon3}
          alt=""
          className="decorative absolute hidden md:block"
          style={{ width: '110px', right: '80px', top: '20px', zIndex: 1 }}
        />

        <div className="relative z-10 mx-auto max-w-[860px] text-center">
          <h2 className="font-gerbil text-[56px] leading-[76px] font-[400] text-black mb-[24px]">
            Subscribe to
            <br />
            our newsletter
          </h2>

          <p className="font-satoshi text-[18px] leading-[24px] text-[#000] mb-[44px]">
            To make your stay special and even more memorable
          </p>

          <button id="subscribe-btn" className="subscribe-btn">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  )
}
