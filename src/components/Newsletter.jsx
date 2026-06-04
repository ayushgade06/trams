import { useRef } from 'react'
import polygon3 from '../../trams/Ellipse 736.png'
import vector2518 from '../../trams/Vector 2518.png'

import { useGSAPEffect, isMobile } from '../hooks/useGSAP'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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

  /* Subscribe button hover */
  .nl-subscribe-btn {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .nl-subscribe-btn:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0,0,0,0.18);
  }
`

export default function Newsletter() {
  const sectionRef = useRef(null)

  useGSAPEffect((gsap, ScrollTrigger) => {
    const section = sectionRef.current
    if (!section) return
    const mobile = isMobile()

    const st = { trigger: section, start: 'top 82%', once: true }

    // Arrow decorations animate gently (bob)
    if (!mobile) {
      const arrows = section.querySelectorAll('.nl-arrow')
      arrows.forEach((arrow, i) => {
        // Initial fade-in from above
        gsap.fromTo(
          arrow,
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: i * 0.1, scrollTrigger: st }
        )
        // Continuous gentle bob
        gsap.to(arrow, {
          y: -10,
          duration: 1.8 + i * 0.3,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: i * 0.4,
        })
      })

      // Purple semi-circle rotates/fades in
      gsap.fromTo(
        section.querySelector('.nl-purple'),
        { opacity: 0, scale: 0.6, rotation: 160 },
        { opacity: 1, scale: 1, rotation: 180, duration: 1.1, ease: 'expo.out', delay: 0.3, scrollTrigger: st }
      )

      // Subtle continuous pulse on purple shape
      gsap.to(section.querySelector('.nl-purple'), {
        scale: 1.06,
        duration: 2.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1.2,
      })
    }

    // Heading fades up in two lines — line by line feel via stagger on words
    gsap.fromTo(
      section.querySelector('.nl-heading'),
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out', scrollTrigger: st }
    )

    // Description fades up after heading
    gsap.fromTo(
      section.querySelector('.nl-sub'),
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power2.out', delay: 0.2, scrollTrigger: st }
    )

    // Button scales + fades in
    gsap.fromTo(
      section.querySelector('.nl-subscribe-btn'),
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'expo.out', delay: 0.38, scrollTrigger: st }
    )
  }, [])

  return (
    <>
      <style>{styles}</style>
      <section className="nl-section relative w-full overflow-hidden bg-[#DDE8D9] pt-[100px] pb-[80px]" ref={sectionRef}>
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
              className="nl-subscribe-btn bg-black text-white rounded-full px-[32px] py-[14px] font-satoshi text-[16px] font-medium"
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </>
  )
}