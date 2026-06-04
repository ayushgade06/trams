import image348_1 from '../../trams/image 348 (1).png'
import polygon1 from '../../trams/Polygon 1.png'
import rect657_1 from '../../trams/Rectangle 657.png'
import vector5 from '../../trams/Vector 5.png'

const styles = `
  /* ── TABLET: 768px – 1279px ── */
  @media (min-width: 768px) and (max-width: 1279px) {
    .f2-inner {
      padding-left: 48px !important;
      padding-right: 48px !important;
    }
    .f2-grid {
      grid-template-columns: 1fr 1fr !important;
      gap: 60px !important;
    }
    .f2-image-wrap {
      width: 36vw !important;
      height: 36vw !important;
    }
    .f2-tri-left {
      width: 100px !important;
      left: -8px !important;
      top: 8px !important;
    }
    .f2-tri-bottom {
      width: 100px !important;
      right: -36px !important;
      bottom: -30px !important;
    }
    .f2-text h2 {
      font-size: 40px !important;
      line-height: 52px !important;
    }
    .f2-text p {
      font-size: 15px !important;
      line-height: 26px !important;
    }
  }

  /* ── MOBILE: < 768px ── */
  @media (max-width: 767px) {
    .f2-section {
      padding-bottom: 60px !important;
    }
    .f2-inner {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    .f2-grid {
      display: flex !important;
      flex-direction: column !important;
      gap: 36px !important;
    }
    .f2-image-wrap {
      width: min(75vw, 300px) !important;
      height: min(75vw, 300px) !important;
      margin: 0 auto !important;
    }
    .f2-tri-left {
      width: 70px !important;
      left: -6px !important;
      top: 6px !important;
    }
    .f2-tri-bottom {
      width: 70px !important;
      right: -28px !important;
      bottom: -22px !important;
    }
    .f2-text {
      max-width: 100% !important;
    }
    .f2-text h2 {
      font-size: clamp(26px, 7vw, 40px) !important;
      line-height: 1.28 !important;
    }
    .f2-text p {
      font-size: 15px !important;
      line-height: 24px !important;
      max-width: 100% !important;
    }
  }
`

export default function Feature2() {
  return (
    <>
      <style>{styles}</style>
      <section className="f2-section relative bg-white overflow-visible pb-[120px]">
        <div className="f2-inner mx-auto max-w-[1600px] px-[80px]">
          <div className="f2-grid grid lg:grid-cols-[520px_1fr] gap-[120px] items-center">

            {/* LEFT IMAGE */}
            <div className="f2-image-wrap relative w-[420px] h-[420px] z-0">

              <img
                src={polygon1}
                alt=""
                className="f2-tri-left absolute z-0"
                style={{ left: '-10px', top: '10px', width: '150px', transform: 'rotate(0deg)' }}
              />

              <img
                src={polygon1}
                alt=""
                className="f2-tri-bottom absolute"
                style={{ right: '-50px', bottom: '-40px', width: '150px', transform: 'rotate(120deg)', zIndex: 20 }}
              />

              <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
                <img
                  src={image348_1}
                  alt="Team working"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="f2-text max-w-[650px]">
              <h2
                className="font-gerbil font-normal text-black"
                style={{ fontSize: '56px', lineHeight: '68px' }}
              >
                <span className="relative inline-block z-20">
                  <img
                    src={rect657_1}
                    alt=""
                    className="absolute inset-0 w-full h-full object-fill -z-10"
                  />
                  See
                </span>{' '}
                how we can
                <br />
                help you{' '}
                <span className="relative inline-block">
                  progress
                  <img
                    src={vector5}
                    alt=""
                    className="absolute left-0 bottom-[-15px] w-full object-contain"
                  />
                </span>
              </h2>

              <p
                className="mt-6 font-satoshi text-black/80"
                style={{ fontSize: '16px', lineHeight: '28px', maxWidth: '560px' }}
              >
                We add a layer of fearless insights and action that
                allows change makers to accelerate their progress in
                areas such as brand, design, digital, comms and social
                research.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="font-satoshi text-[16px] font-medium">Read more</span>
                <span className="w-[90px] h-[1px] bg-black" />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}