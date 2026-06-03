// Newsletter Section — "Subscribe to our newsletter"

import polygon3 from '../../trams/Polygon 3.png'
import vector2510 from '../../trams/Vector 2510.png'

export default function Newsletter() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ background: '#DDE8D9', padding: '100px 0 80px' }}
    >
      <div className="max-w-[1600px] mx-auto px-[60px] relative">

        {/* Squiggle top-left decoration */}
        <img
          src={vector2510}
          alt=""
          className="decorative absolute"
          style={{ width: '60px', left: '80px', top: '-20px', zIndex: 1 }}
        />

        {/* Purple polygon top-right */}
        <img
          src={polygon3}
          alt=""
          className="decorative absolute"
          style={{ width: '110px', right: '80px', top: '20px', zIndex: 1 }}
        />

        {/* Content centered */}
        <div className="text-center relative z-10">
          <h2
            className="font-satoshi text-black leading-[1.35] mb-[20px]"
            style={{ fontSize: '56px', fontWeight: 400 }}
          >
            Subscribe to
            <br />
            our newsletter
          </h2>

          <p
            className="font-satoshi text-[#555] mb-[44px]"
            style={{ fontSize: '24px', fontWeight: 400 }}
          >
            To make your stay special and even more memorable
          </p>

          <button
            id="subscribe-btn"
            className="subscribe-btn"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  )
}
