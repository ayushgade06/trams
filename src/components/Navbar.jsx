import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-[#F7F7F7] border-b border-[#E0E0E0]" style={{ height: '100px' }}>
      <div className="max-w-[1600px] mx-auto px-[60px] h-full flex items-center justify-between">
        {/* Logo */}
        <div className="font-satoshi font-bold text-[22px] text-black tracking-tight select-none">
          Elementum
        </div>

        {/* Center Nav Links */}
        <ul className="nav-links hidden md:flex items-center gap-[48px] list-none">
          {['Home', 'Studio', 'Services', 'Contact', "FAQ's"].map((link) => (
            <li key={link}>
              <a
                href="#"
                className="font-satoshi font-medium text-[18px] leading-[24px] text-black no-underline hover:opacity-60 transition-opacity duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          id="hamburger-btn"
          aria-label="Open menu"
          className="hamburger flex flex-col gap-[6px] cursor-pointer bg-transparent border-none p-0"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-[28px] h-[2px] bg-black rounded-full" />
          <span className="block w-[28px] h-[2px] bg-black rounded-full" />
          <span className="block w-[28px] h-[2px] bg-black rounded-full" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#F7F7F7] border-t border-[#E0E0E0] px-[60px] py-4 flex flex-col gap-4">
          {['Home', 'Studio', 'Services', 'Contact', "FAQ's"].map((link) => (
            <a key={link} href="#" className="text-[18px] font-medium text-black no-underline">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
