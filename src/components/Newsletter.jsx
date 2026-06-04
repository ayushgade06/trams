// Newsletter Section — "Subscribe to our newsletter"

import polygon3 from '../../trams/Ellipse 736.png'
import vector2518 from '../../trams/Vector 2518.png'

export default function Newsletter() {
  return (
    <section className="relative w-full overflow-hidden bg-[#DDE8D9] pt-[100px] pb-[80px]">
      <div className="relative mx-auto max-w-[1920px] px-[80px]">

        {/* Arrow 1 */}
        <img
          src={vector2518}
          alt=""
          className="decorative absolute hidden md:block"
          style={{
            width: '180px',
            left: '40%',
            top: '-120px',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }}
        />

        {/* Arrow 2 */}
        <img
          src={vector2518}
          alt=""
          className="decorative absolute hidden md:block"
          style={{
            width: '180px',
            left: '45%',
            top: '-120px',
            transform: 'translateX(-50%)',
            zIndex: 1,
          }}
        />

        {/* Purple Semi Circle */}
        <img
          src={polygon3}
          alt=""
          className="decorative absolute hidden md:block"
          style={{
            width: '140px',
            right: '80px',
            top: '120px',
            zIndex: 1,
            transform: 'rotate(180deg)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-[1100px] text-center">
          <h2
            className="font-gerbil font-[400] text-black mb-[24px]"
            style={{
              fontSize: '100px',
              lineHeight: '108px',
            }}
          >
            Subscribe to
            <br />
            our newsletter
          </h2>

          <p
            className="font-satoshi text-[#000] mb-[44px]"
            style={{
              fontSize: '24px',
              lineHeight: '32px',
            }}
          >
            To make your stay special and even more memorable
          </p>

          <button
            id="subscribe-btn"
            className="bg-black text-white rounded-full px-[32px] py-[14px] font-satoshi text-[16px] font-medium"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  )
}