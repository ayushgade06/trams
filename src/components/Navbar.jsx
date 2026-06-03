import { useState } from 'react'

const navLinks = ['Home', 'Studio', 'Services', 'Contact', "FAQ's"]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-[#F7F7F7] border-b border-[#E0E0E0]">
      <div className="relative mx-auto flex h-[100px] max-w-[1920px] items-center px-[80px]">
        <div className="font-satoshi font-semibold text-[22px] text-black tracking-tight select-none">
          Elementum
        </div>

        <ul className="nav-links hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-[48px] list-none">
          {navLinks.map((link) => (
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

        <button
          id="hamburger-btn"
          aria-label="Open menu"
          className="hamburger flex lg:hidden flex-col gap-[6px] ml-auto cursor-pointer bg-transparent border-none p-0"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-[28px] h-[2px] bg-black rounded-full" />
          <span className="block w-[28px] h-[2px] bg-black rounded-full" />
          <span className="block w-[28px] h-[2px] bg-black rounded-full" />
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-[#F7F7F7] border-t border-[#E0E0E0] px-[60px] py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a key={link} href="#" className="text-[18px] font-medium text-black no-underline">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
