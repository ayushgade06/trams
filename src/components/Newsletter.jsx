import polygon3 from '../../trams/Ellipse 736.png'
import vector2518 from '../../trams/Vector 2518.png'

const styles = `
  /* ── TABLET: 768px – 1279px ── */
  @media (min-width: 768px) and (max-width: 1279px) {
    .nl-section {
      padding-top: 80px !important;
      padding-bottom: 60px !important;
    }
    .nl-inner {
      padding-left: 48px !important;
      padding-right: 48px !important;
    }
    .nl-heading {
      font-size: 72px !important;
      line-height: 82px !important;
    }
    .nl-sub {
      font-size: 20px !important;
      line-height: 28px !important;
      margin-bottom: 36px !important;
    }
    .nl-purple {
      width: 100px !important;
      right: 48px !important;
      top: 80px !important;
    }
  }

  /* ── MOBILE: < 768px ── */
  @media (max-width: 767px) {
    .nl-section {
      padding-top: 56px !important;
      padding-bottom: 48px !important;
    }
    .nl-inner {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    .nl-heading {
      font-size: clamp(36px, 10vw, 60px) !important;
      line-height: 1.15 !important;
      margin-bottom: 16px !important;
    }
    .nl-sub {
      font-size: 16px !important;
      line-height: 26px !important;
      margin-bottom: 28px !important;
    }
    .nl-purple {
      width: 70px !important;
      right: 16px !important;
      top: 20px !important;
    }
    .nl-arrow {
      display: none !important;
    }
  }
`

export default function Newsletter() {
  return (
    <>
      <style>{styles}</style>
      <section className="nl-section relative w-full overflow-hidden bg-[#DDE8D9] pt-[100px] pb-[80px]">
        <div className="nl-inner relative mx-auto max-w-[1920px] px-[80px]">

          {/* Arrow 1 */}
          <img
            src={vector2518}
            alt=""
            className="nl-arrow decorative absolute hidden md:block"
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
            className="nl-arrow decorative absolute hidden md:block"
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
            className="nl-purple decorative absolute hidden md:block"
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
              className="nl-heading font-gerbil font-[400] text-black mb-[24px]"
              style={{ fontSize: '100px', lineHeight: '108px' }}
            >
              Subscribe to
              <br />
              our newsletter
            </h2>

            <p
              className="nl-sub font-satoshi text-[#000] mb-[44px]"
              style={{ fontSize: '24px', lineHeight: '32px' }}
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
    </>
  )
}