import e255 from '../../trams/Ellipse 255.png'
import e256 from '../../trams/Ellipse 256.png'
import e257 from '../../trams/Ellipse 257.png'
import e258 from '../../trams/Ellipse 258.png'
import e259 from '../../trams/Ellipse 259.png'
import e260 from '../../trams/Ellipse 260.png'
import e261 from '../../trams/Ellipse 261.png'
import e262 from '../../trams/Ellipse 262.png'

import vector2511 from '../../trams/Vector 2511.png'
import vector2510 from '../../trams/Vector 2510.png'
import rectangle657 from '../../trams/Rectangle 657 (1).png'
import rectangle658 from '../../trams/Rectangle 658.png'
import vector5 from '../../trams/Vector 5.png'
import ellipse736 from '../../trams/Ellipse 736.png'

const heroStyles = `
  /* ─────────── BASE (desktop ≥ 1280px) ─────────── */
  .hero-section {
    position: relative;
    background: white;
    width: 1920px;
    height: 1254px;
  }

  /* highlights sit on top of text at desktop via original absolute values */
  .hero-section .highlight-pink-img {
    position: absolute;
    left: 120px;
    top: 20px;
    width: 1220px;
    height: 105px;
    object-fit: contain;
    z-index: -1;
  }
  .hero-section .highlight-green-img {
    position: absolute;
    left: 10px;
    top: 0px;
    width: 3000px;
    height: 150px;
    object-fit: contain;
    z-index: -1;
  }
  .hero-section .highlight-underline-img {
    position: absolute;
    left: -10px;
    bottom: -250px;
    width: 600px;
    height: 500px;
    object-fit: contain;
  }

  /* ─────────── TABLET: 768px – 1279px ─────────── */
  @media (min-width: 768px) and (max-width: 1279px) {
    .hero-section {
      width: 100%;
      height: auto;
      overflow: hidden;
      padding-bottom: 60px;
    }

    /* Decorative curves — scale with viewport */
    .hero-curve-outer {
      left: -3% !important;
      top: 28% !important;
      width: 13% !important;
      height: auto !important;
    }
    .hero-curve-inner {
      left: 3% !important;
      top: 30% !important;
      width: 7% !important;
      height: auto !important;
    }

    /* Purple blob */
    .hero-purple {
      left: auto !important;
      right: 2% !important;
      top: 5% !important;
      width: 7vw !important;
      height: auto !important;
    }

    /* Heading — flow, centered */
    .hero-heading {
      position: relative !important;
      left: auto !important;
      top: auto !important;
      transform: none !important;
      width: 85% !important;
      margin: 0 auto !important;
      padding-top: 80px;
      font-size: 6vw !important;
      line-height: 1.26 !important;
    }

    /* Highlight images: fill parent span exactly */
    .hero-heading .highlight-pink-img {
      left: -4px !important;
      top: 4px !important;
      width: calc(100% + 8px) !important;
      height: calc(100% - 4px) !important;
      object-fit: fill !important;
    }
    .hero-heading .highlight-green-img {
      left: -4px !important;
      top: 0 !important;
      width: calc(100% + 8px) !important;
      height: 100% !important;
      object-fit: fill !important;
    }
    /* Underline sits just below the word */
    .hero-heading .highlight-underline-img {
      left: 0 !important;
      bottom: -18% !important;
      width: 100% !important;
      height: auto !important;
      max-height: 30px;
    }

    /* Description */
    .hero-description {
      position: relative !important;
      left: auto !important;
      top: auto !important;
      transform: none !important;
      width: 70% !important;
      margin: 32px auto 0 !important;
      font-size: 2vw !important;
      line-height: 1.5 !important;
    }

    .hero-images-desktop { display: none !important; }
    .hero-images-mobile  { display: none !important; }
    .hero-images-tablet  { display: block !important; }
  }

  /* ─────────── MOBILE: < 768px ─────────── */
  @media (max-width: 767px) {
    .hero-section {
      width: 100%;
      height: auto;
      overflow: hidden;
      padding-bottom: 40px;
    }

    /* Hide decorative curves entirely — they bleed off-screen */
    .hero-curve-outer,
    .hero-curve-inner {
      display: none !important;
    }

    /* Purple blob — small, top-right corner */
    .hero-purple {
      left: auto !important;
      right: 3% !important;
      top: 3% !important;
      width: 11vw !important;
      height: auto !important;
    }

    /* Heading */
    .hero-heading {
      position: relative !important;
      left: auto !important;
      top: auto !important;
      transform: none !important;
      width: 92% !important;
      margin: 0 auto !important;
      padding-top: 56px;
      font-size: clamp(28px, 8vw, 52px) !important;
      line-height: 1.24 !important;
    }

    /* Highlight images: fill parent span exactly, no overflow */
    .hero-heading .highlight-pink-img {
      left: -4px !important;
      top: 4px !important;
      width: calc(100% + 8px) !important;
      height: calc(100% - 4px) !important;
      object-fit: fill !important;
    }
    .hero-heading .highlight-green-img {
      left: -4px !important;
      top: 0 !important;
      width: calc(100% + 8px) !important;
      height: 100% !important;
      object-fit: fill !important;
    }
    /* Underline: sits just below word, hugs its width */
    .hero-heading .highlight-underline-img {
      left: 0 !important;
      bottom: -20% !important;
      width: 100% !important;
      height: auto !important;
      max-height: 20px;
    }

    /* Description */
    .hero-description {
      position: relative !important;
      left: auto !important;
      top: auto !important;
      transform: none !important;
      width: 88% !important;
      margin: 20px auto 0 !important;
      font-size: clamp(13px, 3.5vw, 18px) !important;
      line-height: 1.6 !important;
    }

    .hero-images-desktop { display: none !important; }
    .hero-images-tablet  { display: none !important; }
    .hero-images-mobile  { display: flex !important; }
  }

  /* ─── Shared tablet image container ─── */
  .hero-images-tablet {
    display: none;
    position: relative;
    width: 92%;
    margin: 40px auto 0;
    height: 18vw;
  }

  /* ─── Shared mobile image container ─── */
  .hero-images-mobile {
    display: none;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 28px;
    padding: 0 12px;
  }
  .hero-images-mobile-row {
    display: flex;
    justify-content: center;
    gap: 6px;
    flex-wrap: wrap;
  }
`

const teamImages = [e262, e261, e255, e256, e257, e258, e259, e260]

const tabletPositions = [
  { left: '0%',    bottom: '0',   top: 'auto',  border: false },
  { left: '8%',    bottom: '15%', top: 'auto',  border: true  },
  { left: '27%',   top: '0',      bottom: 'auto', border: false },
  { left: '34%',   bottom: '0',   top: 'auto',  border: false },
  { left: '51%',   top: '10%',    bottom: 'auto', border: false },
  { left: '58.5%', bottom: '0',   top: 'auto',  border: true  },
  { left: '73%',   top: '0',      bottom: 'auto', border: false },
  { right: '0%',   bottom: '0',   top: 'auto',  left: 'auto', border: false },
]

export default function Hero() {
  return (
    <>
      <style>{heroStyles}</style>

      <section className="hero-section">

        {/* Left Decorative Curves */}
        <img src={vector2510} alt=""
          className="hero-curve-outer absolute object-contain"
          style={{ left: '-70px', top: '350px', width: '260px', height: '540px' }}
        />
        <img src={vector2511} alt=""
          className="hero-curve-inner absolute object-contain"
          style={{ left: '60px', top: '370px', width: '140px', height: '450px' }}
        />

        {/* Purple Shape */}
        <img src={ellipse736} alt=""
          className="hero-purple absolute object-contain"
          style={{ left: '1650px', top: '400px', width: '120px', height: '120px' }}
        />

        {/* Heading */}
        <h1
          className="hero-heading absolute text-black font-normal text-center"
          style={{
            fontFamily: 'Gerbil',
            fontSize: '100px',
            lineHeight: '126px',
            width: '1305px',
            left: '50%',
            top: '180px',
            transform: 'translateX(-50%)',
            margin: 0,
          }}
        >
          The{' '}
          {/* "thinkers" — underline vector sits below the word */}
          <span className="relative inline-block">
            thinkers
            <img
              src={vector5}
              alt=""
              className="highlight-underline-img absolute pointer-events-none"
            />
          </span>{' '}
          and
          <br />
          doers were{' '}
          {/* "changing" — pink highlight fills the span */}
          <span className="relative inline-block">
            <img
              src={rectangle657}
              alt=""
              className="highlight-pink-img absolute"
            />
            changing
          </span>
          <br />
          the{' '}
          {/* "status" — green highlight fills the span */}
          <span className="relative inline-block">
            <img
              src={rectangle658}
              alt=""
              className="highlight-green-img absolute"
            />
            status
          </span>{' '}
          Quo with
        </h1>

        {/* Description */}
        <p
          className="hero-description absolute text-black font-normal text-center"
          style={{
            fontFamily: 'Satoshi',
            fontSize: '24px',
            lineHeight: '36px',
            width: '831px',
            left: '50%',
            top: '560px',
            transform: 'translateX(-50%)',
            margin: 0,
          }}
        >
          We are a team of strategists, designers communicators, researchers.
          Together, we believe that progress only happens when you refuse to play
          things safe.
        </p>

        {/* ── DESKTOP team images (original pixel values, untouched) ── */}
        <div className="hero-images-desktop">
          <img src={e262} alt="" className="absolute rounded-full object-cover"
            style={{ left: '70px',   top: '860px', width: '226px', height: '226px' }} />
          <img src={e261} alt="" className="absolute rounded-full object-cover"
            style={{ left: '210px',  top: '840px', width: '226px', height: '226px', border: '8px solid #fff', boxSizing: 'border-box' }} />
          <img src={e255} alt="" className="absolute rounded-full object-cover"
            style={{ left: '540px',  top: '700px', width: '226px', height: '226px' }} />
          <img src={e256} alt="" className="absolute rounded-full object-cover"
            style={{ left: '670px',  top: '930px', width: '226px', height: '226px' }} />
          <img src={e257} alt="" className="absolute rounded-full object-cover"
            style={{ left: '980px',  top: '760px', width: '226px', height: '226px' }} />
          <img src={e258} alt="" className="absolute rounded-full object-cover"
            style={{ left: '1130px', top: '860px', width: '226px', height: '226px', border: '8px solid #fff', boxSizing: 'border-box' }} />
          <img src={e259} alt="" className="absolute rounded-full object-cover"
            style={{ left: '1400px', top: '690px', width: '226px', height: '226px' }} />
          <img src={e260} alt="" className="absolute rounded-full object-cover"
            style={{ left: '1650px', top: '860px', width: '226px', height: '226px' }} />
        </div>

        {/* ── TABLET team images — scattered %, same visual feel ── */}
        <div className="hero-images-tablet">
          {teamImages.map((src, i) => (
            <img key={i} src={src} alt=""
              className="absolute rounded-full object-cover"
              style={{
                width: '11.5vw',
                height: '11.5vw',
                ...(tabletPositions[i].left !== 'auto' ? { left: tabletPositions[i].left } : {}),
                ...(tabletPositions[i].right           ? { right: tabletPositions[i].right } : {}),
                ...(tabletPositions[i].top !== 'auto'  ? { top: tabletPositions[i].top }    : {}),
                ...(tabletPositions[i].bottom !== 'auto' ? { bottom: tabletPositions[i].bottom } : {}),
                ...(tabletPositions[i].border ? { border: '4px solid #fff', boxSizing: 'border-box' } : {}),
              }}
            />
          ))}
        </div>

        {/* ── MOBILE team images — two tidy rows ── */}
        <div className="hero-images-mobile">
          <div className="hero-images-mobile-row">
            {[e262, e261, e255, e256].map((src, i) => (
              <img key={i} src={src} alt="" className="rounded-full object-cover"
                style={{ width: 'clamp(60px, 17vw, 100px)', height: 'clamp(60px, 17vw, 100px)', border: '3px solid #fff' }} />
            ))}
          </div>
          <div className="hero-images-mobile-row">
            {[e257, e258, e259, e260].map((src, i) => (
              <img key={i} src={src} alt="" className="rounded-full object-cover"
                style={{ width: 'clamp(60px, 17vw, 100px)', height: 'clamp(60px, 17vw, 100px)', border: '3px solid #fff' }} />
            ))}
          </div>
        </div>

      </section>
    </>
  )
}