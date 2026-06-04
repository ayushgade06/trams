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

const styles = `
  /* ── TABLET: 768px – 1279px ── */
  @media (min-width: 768px) and (max-width: 1279px) {
    .tst-section {
      padding-top: 72px !important;
      padding-bottom: 72px !important;
    }
    .tst-inner {
      padding-left: 48px !important;
      padding-right: 48px !important;
    }
    .tst-heading {
      font-size: 42px !important;
      line-height: 56px !important;
      margin-bottom: 48px !important;
    }
    .tst-card-wrap {
      max-width: 680px !important;
    }
    .tst-card {
      padding: 40px 36px !important;
    }
    .tst-quote-text {
      font-size: 18px !important;
      line-height: 30px !important;
    }
    /* Side avatars: scale inward */
    .tst-av-l1 { left: -260px !important; top: 220px !important; width: 70px !important; height: 70px !important; }
    .tst-av-l2 { left: -260px !important; top: 10px !important;  width: 56px !important; height: 56px !important; }
    .tst-av-l3 { left: -180px !important; top: 70px !important;  width: 130px !important; height: 130px !important; }
    .tst-av-l4 { left: -160px !important; top: -110px !important; width: 70px !important; height: 70px !important; }
    .tst-av-r1 { right: -100px !important; top: -60px !important;  width: 70px !important; height: 70px !important; }
    .tst-av-r2 { right: -150px !important; top: 60px !important;   width: 80px !important; height: 80px !important; }
    .tst-av-r3 { right: -220px !important; top: -150px !important; width: 90px !important; height: 90px !important; }
    .tst-av-r4 { right: -260px !important; top: 180px !important;  width: 180px !important; height: 180px !important; }
    .tst-underline { left: 260px !important; width: 240px !important; }
    .tst-line65 { right: -24px !important; }
  }

  /* ── MOBILE: < 768px ── */
  @media (max-width: 767px) {
    .tst-section {
      padding-top: 48px !important;
      padding-bottom: 48px !important;
    }
    .tst-inner {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    .tst-heading {
      font-size: clamp(26px, 7vw, 38px) !important;
      line-height: 1.3 !important;
      margin-bottom: 32px !important;
    }
    .tst-card-wrap {
      max-width: 100% !important;
    }
    .tst-card {
      padding: 28px 20px !important;
      border-radius: 20px !important;
    }
    .tst-quote-open {
      font-size: 48px !important;
    }
    .tst-quote-close {
      font-size: 48px !important;
    }
    .tst-quote-text {
      font-size: 15px !important;
      line-height: 26px !important;
      margin-top: 12px !important;
      margin-bottom: 12px !important;
    }
    /* All side avatars hidden on mobile — replaced by bottom row */
    .tst-av-l1, .tst-av-l2, .tst-av-l3, .tst-av-l4,
    .tst-av-r1, .tst-av-r2, .tst-av-r3, .tst-av-r4 {
      display: none !important;
    }
    .tst-underline { display: none !important; }
    .tst-line65    { display: none !important; }
    .tst-mobile-avatars { display: flex !important; }
  }

  .tst-mobile-avatars {
    display: none;
    justify-content: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 28px;
  }
  .tst-mobile-avatars img {
    border-radius: 50%;
    object-fit: cover;
    border: 3px solid #fff;
  }
`

export default function Testimonials() {
  return (
    <>
      <style>{styles}</style>
      <section className="tst-section relative w-full py-[100px] overflow-visible">
        <div className="tst-inner mx-auto max-w-[1844px] px-[80px] relative">

          {/* Heading */}
          <div className="text-center mb-[70px]">
            <h2 className="tst-heading font-gerbil text-[56px] leading-[76px] font-[400] text-black max-w-[860px] mx-auto">
              <span className="text-highlight-green">What</span> our customer says{' '}
              <span>About Us</span>
            </h2>
          </div>

          {/* Card + floating avatars */}
          <div className="tst-card-wrap relative mx-auto max-w-[980px]">

            {/* Underline decoration */}
            <img
              src={vector5}
              alt=""
              className="tst-underline decorative absolute left-[400px] top-[-110px] hidden md:block"
              style={{ width: '350px', height: '100px', objectFit: 'contain', zIndex: 20 }}
            />

            {/* Line decoration */}
            <img
              src={line65}
              alt=""
              className="tst-line65 decorative absolute right-[-36px] top-[80px] hidden xl:block"
              style={{ width: '220px', zIndex: 1 }}
            />

            {/* Quote card */}
            <div className="tst-card bg-[#EEF2EC] rounded-[32px] px-[52px] py-[64px] relative" style={{ zIndex: 2 }}>
              <div className="tst-quote-open text-[72px] leading-[0.8] text-[#00000026] font-bold">"</div>
              <p className="tst-quote-text font-satoshi text-[24px] leading-[36px] text-[#000] text-center mx-auto max-w-[740px] mt-[24px] mb-[24px]">
                Elementum delivered the site with inthe timeline as they requested.
                Inthe end, the client found a 50% increase in traffic with in days
                since its launch. They also had an impressive ability to use
                technologies that the company hasn't used, which have also proved
                to be easy to use and reliable
              </p>
              <div className="tst-quote-close text-[72px] leading-[0.8] text-[#00000026] font-bold text-right">"</div>
            </div>

            {/* LEFT avatars */}
            <img src={e267} alt="Customer" className="tst-av-l1 avatar-circle absolute rounded-full object-cover"
              style={{ width: '100px', height: '100px', left: '-400px', top: '350px', zIndex: 3 }} />
            <img src={e266} alt="Customer" className="tst-av-l2 avatar-circle absolute rounded-full object-cover"
              style={{ width: '76px',  height: '76px',  left: '-400px', top: '20px',  zIndex: 3 }} />
            <img src={e268} alt="Customer" className="tst-av-l3 avatar-circle absolute rounded-full object-cover"
              style={{ width: '180px', height: '180px', left: '-280px', top: '110px', zIndex: 3 }} />
            <img src={e263} alt="Customer" className="tst-av-l4 avatar-circle absolute rounded-full object-cover"
              style={{ width: '90px',  height: '90px',  left: '-240px', top: '-150px', zIndex: 3 }} />

            {/* RIGHT avatars */}
            <img src={e264} alt="Customer" className="tst-av-r1 avatar-circle absolute rounded-full object-cover"
              style={{ width: '90px',  height: '90px',  right: '-150px', top: '-80px',  zIndex: 3 }} />
            <img src={e265} alt="Customer" className="tst-av-r2 avatar-circle absolute rounded-full object-cover"
              style={{ width: '100px', height: '100px', right: '-230px', top: '80px',   zIndex: 3 }} />
            <img src={e270} alt="Customer" className="tst-av-r3 avatar-circle absolute rounded-full object-cover"
              style={{ width: '120px', height: '120px', right: '-320px', top: '-200px', zIndex: 3 }} />
            <img src={e269} alt="Customer" className="tst-av-r4 avatar-circle absolute rounded-full object-cover"
              style={{ width: '250px', height: '250px', right: '-400px', top: '250px',  zIndex: 3 }} />

          </div>

          {/* Mobile-only avatar row (below card) */}
          <div className="tst-mobile-avatars">
            {[e266, e267, e268, e263, e264, e265, e269, e270].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Customer"
                style={{ width: 'clamp(44px, 11vw, 64px)', height: 'clamp(44px, 11vw, 64px)' }}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  )
}