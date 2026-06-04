import { useState, useRef } from 'react'
import { useGSAPEffect } from '../hooks/useGSAP'
import { gsap } from 'gsap'

const navLinks = ['Home', 'Studio', 'Services', 'Contact', "FAQ's"]

const styles = `
  .nav-mobile-menu {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease, padding 0.35s ease;
  }
  .nav-mobile-menu.open {
    max-height: 400px;
  }
  .nav-hamburger-bar {
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center;
  }
  .nav-hamburger.open .bar-top {
    transform: translateY(10px) rotate(45deg);
  }
  .nav-hamburger.open .bar-mid {
    opacity: 0;
    transform: scaleX(0);
  }
  .nav-hamburger.open .bar-bot {
    transform: translateY(-10px) rotate(-45deg);
  }

  /* Nav link hover underline */
  .nav-link {
    position: relative;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 0%;
    height: 1.5px;
    background: #000;
    transition: width 0.3s ease;
  }
  .nav-link:hover::after {
    width: 100%;
  }

  /* ── TABLET ── */
  @media (min-width: 768px) and (max-width: 1279px) {
    .nav-inner {
      padding-left: 48px !important;
      padding-right: 48px !important;
    }
  }

  /* ── MOBILE ── */
  @media (max-width: 767px) {
    .nav-inner {
      padding-left: 20px !important;
      padding-right: 20px !important;
      height: 64px !important;
    }
    .nav-mobile-links a {
      font-size: 15px !important;
    }
  }
`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  useGSAPEffect((gsap) => {
    const nav = navRef.current
    if (!nav) return

    // Navbar slides down from top on page load
    gsap.fromTo(
      nav,
      { opacity: 0, y: -24 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', delay: 0.05 }
    )

    // Logo pops in
    gsap.fromTo(
      nav.querySelector('.nav-logo'),
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out', delay: 0.2 }
    )

    // Desktop nav links stagger in
    const links = nav.querySelectorAll('.nav-desktop-link')
    if (links.length) {
      gsap.fromTo(
        links,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out', stagger: 0.08, delay: 0.3 }
      )
    }

    // Hamburger fades in
    gsap.fromTo(
      nav.querySelector('.nav-hamburger'),
      { opacity: 0, x: 16 },
      { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', delay: 0.35 }
    )
  }, [])

  return (
    <>
      <style>{styles}</style>
      <nav className="w-full bg-white relative z-50" ref={navRef}>

        {/* Main bar */}
        <div className="nav-inner mx-auto flex h-[80px] lg:h-[100px] max-w-[1920px] items-center justify-between px-5 md:px-10 lg:px-[160px]">

          {/* Logo */}
          <div className="nav-logo font-gerbil text-[22px] md:text-[24px] lg:text-[28px] leading-[46px] text-black select-none shrink-0">
            Elementum
          </div>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex mx-auto items-center gap-[56px] list-none p-0 m-0">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="nav-desktop-link nav-link font-satoshi font-medium text-[18px] leading-[24px] text-black no-underline">
                  {link}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger button */}
          <button
            className={`nav-hamburger flex flex-col gap-[8px] lg:gap-[10px] bg-transparent border-0 cursor-pointer p-0${open ? ' open' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-hamburger-bar bar-top block w-[32px] lg:w-[45px] h-[2px] bg-black" />
            <span className="nav-hamburger-bar bar-mid block w-[32px] lg:w-[45px] h-[2px] bg-black" />
            <span className="nav-hamburger-bar bar-bot block w-[32px] lg:w-[45px] h-[2px] bg-black" />
          </button>
        </div>

        {/* Mobile / tablet dropdown */}
        <div className={`nav-mobile-menu lg:hidden bg-white border-t border-[#0000001A]${open ? ' open' : ''}`}>
          <ul className="nav-mobile-links list-none m-0 flex flex-col px-5 md:px-10 py-4 gap-0">
            {navLinks.map((link, i) => (
              <li key={link}>
                <a
                  href="#"
                  className="block font-satoshi font-medium text-[18px] leading-[24px] text-black no-underline py-[14px]"
                  style={{ borderBottom: i < navLinks.length - 1 ? '1px solid #0000001A' : 'none' }}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </nav>
    </>
  )
}