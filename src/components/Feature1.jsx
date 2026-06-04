import image348 from '../../trams/image 348.png'
import vector2517 from '../../trams/Vector 2517.png'
import rectangle657 from '../../trams/Rectangle 657.png'
import vector5 from '../../trams/Vector 5.png'

const styles = `
  /* ── TABLET: 768px – 1279px ── */
  @media (min-width: 768px) and (max-width: 1279px) {
    .f1-section-inner {
      padding: 60px 48px 40px !important;
      min-height: unset !important;
    }
    .f1-content {
      position: relative !important;
      left: auto !important;
      top: auto !important;
      max-width: 55% !important;
    }
    .f1-content h2 {
      font-size: 40px !important;
      line-height: 52px !important;
    }
    .f1-content p {
      font-size: 16px !important;
      line-height: 26px !important;
      max-width: 100% !important;
    }
    .f1-image-wrap {
      position: absolute !important;
      right: 48px !important;
      top: 40px !important;
      width: 36vw !important;
      height: 36vw !important;
    }
    .f1-red-square {
      width: 80px !important;
      height: 80px !important;
    }
    .f1-underline {
      left: 0px !important;
      top: 148px !important;
      width: 240px !important;
    }
    .f1-curve {
      right: -40px !important;
      top: 200px !important;
      width: 90vw !important;
      height: auto !important;
    }
    .f1-glow {
      left: 40% !important;
      top: -80px !important;
      width: 360px !important;
      height: 360px !important;
    }
  }

  /* ── MOBILE: < 768px ── */
  @media (max-width: 767px) {
    .f1-section-inner {
      padding: 40px 20px 32px !important;
      min-height: unset !important;
      display: flex !important;
      flex-direction: column !important;
      gap: 32px !important;
    }
    .f1-content {
      position: relative !important;
      left: auto !important;
      top: auto !important;
      max-width: 100% !important;
      order: 2;
    }
    .f1-content h2 {
      font-size: clamp(26px, 7vw, 40px) !important;
      line-height: 1.28 !important;
      max-width: 100% !important;
    }
    .f1-content p {
      font-size: 15px !important;
      line-height: 24px !important;
      max-width: 100% !important;
    }
    .f1-image-wrap {
      position: relative !important;
      right: auto !important;
      top: auto !important;
      width: min(75vw, 300px) !important;
      height: min(75vw, 300px) !important;
      margin: 0 auto !important;
      order: 1;
    }
    .f1-red-square {
      width: 60px !important;
      height: 60px !important;
    }
    .f1-underline {
      left: 0px !important;
      top: 124px !important;
      width: clamp(160px, 45vw, 260px) !important;
    }
    .f1-curve {
      display: none !important;
    }
    .f1-glow {
      display: none !important;
    }
  }
`

export default function Feature1() {
  return (
    <>
      <style>{styles}</style>
      <section className="relative w-full bg-white overflow-visible">
        <div className="f1-section-inner relative mx-auto max-w-[1600px] px-[80px] pt-[80px] pb-[20px] min-h-[700px]">

          {/* Glow blob */}
          <div
            className="f1-glow absolute pointer-events-none"
            style={{
              left: '600px',
              top: '-150px',
              width: '500px',
              height: '500px',
              background:
                'radial-gradient(circle, rgba(255, 125, 125, 0.30) 0%, rgba(255, 125, 125, 0.08) 35%, rgba(255, 125, 125, 0) 75%)',
              zIndex: 0,
            }}
          />

          {/* Red curve */}
          <img
            src={vector2517}
            alt=""
            className="f1-curve absolute pointer-events-none z-0"
            style={{
              right: '-60px',
              top: '270px',
              width: '1400px',
              height: '800px',
              objectFit: 'contain',
            }}
          />

          {/* Yellow underline */}
          <img
            src={vector5}
            alt=""
            className="f1-underline absolute left-[78px] top-[164px] w-[330px] object-contain z-10"
          />

          {/* Text content */}
          <div className="f1-content absolute left-[80px] top-[110px] z-20">
            <h2
              className="font-gerbil text-black font-normal"
              style={{ fontSize: '56px', lineHeight: '68px', maxWidth: '750px' }}
            >
              Tomorrow should
              <br />
              be better than{'  '}
              <span className="relative inline-block">
                <img
                  src={rectangle657}
                  alt=""
                  className="absolute inset-0 w-full h-full object-fill -z-10"
                />
                today
              </span>
            </h2>

            <p
              className="mt-6 font-satoshi text-black"
              style={{ fontSize: '18px', lineHeight: '30px', maxWidth: '540px' }}
            >
              We are a team of strategists, designers communicators,
              researchers. Together, we believe that progress only
              happens when you refuse to play things safe.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span className="font-satoshi text-[16px] font-medium">Read more</span>
              <span className="w-[90px] h-[1px] bg-black" />
            </div>
          </div>

          {/* Circular image + red square */}
          <div className="f1-image-wrap absolute right-[120px] top-[20px] w-[420px] h-[420px]">
            <div
              className="f1-red-square absolute right-[-20px] top-[10px] w-[130px] h-[130px] bg-[#FF7B7B] rotate-[12deg]"
            />
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
              <img
                src={image348}
                alt="Business meeting"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  )
}