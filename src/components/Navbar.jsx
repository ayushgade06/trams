const navLinks = ['Home', 'Studio', 'Services', 'Contact', "FAQ's"]

export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="mx-auto flex h-[80px] lg:h-[100px] max-w-[1920px] items-center justify-between px-5 md:px-10 lg:px-[160px]">

        {/* Logo */}
        <div className="font-gerbil text-[22px] md:text-[24px] lg:text-[28px] leading-[46px] text-black select-none shrink-0">
          Elementum
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex mx-auto items-center gap-[56px] list-none p-0 m-0">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="font-satoshi font-medium text-[18px] leading-[24px] text-black no-underline"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="flex flex-col gap-[8px] lg:gap-[10px] bg-transparent border-0 cursor-pointer p-0"
          aria-label="Menu"
        >
          <span className="block w-[32px] lg:w-[45px] h-[2px] bg-black" />
          <span className="block w-[32px] lg:w-[45px] h-[2px] bg-black" />
          <span className="block w-[32px] lg:w-[45px] h-[2px] bg-black" />
        </button>

      </div>
    </nav>
  )
}