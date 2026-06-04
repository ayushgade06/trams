import { useRef } from 'react'
import vector2516 from '../../trams/Vector 2516.png'
import vector5 from '../../trams/Vector 5.png'
import rectangle661 from '../../trams/Rectangle 661.png'

import { useGSAPEffect } from '../hooks/useGSAP'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const styles = `
  /* ─── BASE: desktop vector5 underline on "offer" ─── */
  .svc-offer-underline {
    position: absolute;
    left: -4px;
    bottom: -10px;
    width: 140px;
    height: 20px;
    object-fit: contain;
    pointer-events: none;
  }

  /* ── TABLET: 768px – 1279px ── */
  @media (min-width: 768px) and (max-width: 1279px) {
    .svc-section {
      padding-top: 72px !important;
      padding-bottom: 72px !important;
    }
    .svc-inner {
      padding-left: 48px !important;
      padding-right: 48px !important;
    }
    .svc-heading {
      font-size: 42px !important;
      line-height: 56px !important;
    }
    /* Scale underline to match smaller font */
    .svc-offer-underline {
      width: 100px !important;
      height: 16px !important;
      bottom: -8px !important;
      left: -2px !important;
    }
    .svc-row {
      grid-template-columns: 160px 1fr auto !important;
      gap: 16px !important;
      padding-top: 28px !important;
      padding-bottom: 28px !important;
    }
    .svc-tag {
      font-size: 14px !important;
      line-height: 20px !important;
      min-width: 160px !important;
    }
    .svc-title {
      font-size: 36px !important;
      line-height: 48px !important;
    }
    .svc-badge {
      right: 200px !important;
      top: -60px !important;
      width: 80px !important;
      height: 200px !important;
    }
    .svc-curve {
      right: -20px !important;
      top: -160px !important;
      width: 700px !important;
      height: 300px !important;
    }
  }

  /* ── MOBILE: < 768px ── */
  @media (max-width: 767px) {
    .svc-section {
      padding-top: 48px !important;
      padding-bottom: 48px !important;
    }
    .svc-inner {
      padding-left: 20px !important;
      padding-right: 20px !important;
    }
    .svc-heading-wrap {
      margin-bottom: 36px !important;
    }
    .svc-heading {
      font-size: clamp(32px, 8vw, 44px) !important;
      line-height: 1.25 !important;
    }
    /* Underline proportional to word at mobile font size */
    .svc-offer-underline {
      width: 70% !important;
      height: auto !important;
      max-height: 14px !important;
      bottom: -6px !important;
      left: 0 !important;
    }
    .svc-curve {
      display: none !important;
    }
    .svc-row {
      display: flex !important;
      flex-direction: column !important;
      gap: 8px !important;
      padding-top: 20px !important;
      padding-bottom: 20px !important;
    }
    .svc-tag {
      font-size: 13px !important;
      line-height: 18px !important;
      color: #666 !important;
      min-width: unset !important;
    }
    .svc-title {
      font-size: clamp(22px, 6vw, 32px) !important;
      line-height: 1.3 !important;
    }
    .svc-arrow {
      align-self: flex-end !important;
    }
    .svc-badge {
      display: none !important;
    }
  }

  /* Arrow icon hover */
  .arrow-btn {
    transition: transform 0.3s ease;
  }
  .service-row:hover .arrow-btn {
    transform: translateX(6px);
  }
`

const services = [
  {
    id: 'service-1',
    tag: 'Office of multiple\ninterest content',
    title: 'Colaborative & partnership',
  },
  {
    id: 'service-2',
    tag: 'The hanger US Air force\ndigital experimental',
    title: 'We talk about our weight',
  },
  {
    id: 'service-3',
    tag: 'Delta faucet content,\nsocial, digital',
    title: 'Piloting digital confidence',
    badge: rectangle661,
  },
]

export default function Services() {
  const sectionRef = useRef(null)

  useGSAPEffect((gsap, ScrollTrigger) => {
    const section = sectionRef.current
    if (!section) return

    const headingST = { trigger: section, start: 'top 80%', once: true }

    // Heading fades up
    gsap.fromTo(
      section.querySelector('.svc-heading-wrap'),
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.0, ease: 'power2.out', scrollTrigger: headingST }
    )

    // Underline scaleX reveal
    gsap.fromTo(
      section.querySelector('.svc-offer-underline'),
      { opacity: 0, scaleX: 0, transformOrigin: 'left center' },
      { opacity: 1, scaleX: 1, duration: 0.8, ease: 'expo.out', delay: 0.3, scrollTrigger: headingST }
    )

    // Decorative curve fades in
    gsap.fromTo(
      section.querySelector('.svc-curve'),
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 1.1, ease: 'power2.out', delay: 0.2, scrollTrigger: headingST }
    )

    // Service rows stagger reveal on scroll
    const rows = section.querySelectorAll('.service-row')
    rows.forEach((row, i) => {
      gsap.fromTo(
        row,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power2.out',
          delay: i * 0.12,
          scrollTrigger: {
            trigger: row,
            start: 'top 88%',
            once: true,
          },
        }
      )
    })
  }, [])

  return (
    <>
      <style>{styles}</style>
      <section className="svc-section relative w-full py-[100px] overflow-visible bg-white" ref={sectionRef}>
        <div className="svc-inner mx-auto max-w-[1618px] px-[80px]">

          {/* Heading */}
          <div className="svc-heading-wrap relative mb-[60px]">
            <h2 className="svc-heading font-gerbil text-[56px] leading-[76px] font-[400] text-black max-w-[860px]">
              What we <span className="text-highlight-green">can</span>
              <br />
              <span className="relative inline-block">
                offer
                {/* vector5 underline — scales via media query class */}
                <img
                  src={vector5}
                  alt=""
                  className="svc-offer-underline absolute"
                />
              </span>{' '}
              you!
            </h2>

            {/* Red decorative curve — hidden on mobile via class */}
            <img
              src={vector2516}
              alt=""
              className="svc-curve absolute pointer-events-none hidden xl:block"
              style={{
                right: '-20px',
                top: '-220px',
                width: '1000px',
                height: '400px',
                objectFit: 'cover',
                zIndex: 1,
              }}
            />
          </div>

          {/* Service Rows */}
          <div className="space-y-[24px]">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="svc-row service-row relative grid grid-cols-[220px_1fr_auto] items-center gap-6 py-[42px]"
                style={{
                  borderTop: index === 0 ? '1px solid #D8D8D8' : undefined,
                  borderBottom: '1px solid #D8D8D8',
                }}
              >
                {/* Left Tag */}
                <div
                  className="svc-tag font-satoshi text-[18px] leading-[24px] text-[#000] whitespace-pre-line"
                  style={{ minWidth: '220px' }}
                >
                  {service.tag}
                </div>

                {/* Title */}
                <div className="relative z-10">
                  <h3 className="svc-title font-gerbil text-[56px] leading-[76px] text-black font-[400] z-10">
                    {service.title}
                  </h3>

                  {service.badge && (
                    <img
                      src={service.badge}
                      alt=""
                      className="svc-badge absolute"
                      style={{
                        width: '120px',
                        height: '300px',
                        right: '450px',
                        top: '-100px',
                        zIndex: -2,
                        objectFit: 'contain',
                      }}
                    />
                  )}
                </div>

                {/* Arrow */}
                <div className="svc-arrow flex justify-end">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="arrow-btn">
                    <path
                      d="M6 12H18M18 12L12 6M18 12L12 18"
                      stroke="#000"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}