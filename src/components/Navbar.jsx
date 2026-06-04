const navLinks = ['Home', 'Studio', 'Services', 'Contact', "FAQ's"]

export default function Navbar() {
  return (
    <nav className="w-full bg-white">
      <div className="mx-auto flex h-[100px] max-w-[1920px] items-center px-[160px]">
        <div className="font-gerbil text-[28px] leading-[46px] text-black select-none">
          Elementum
        </div>

        <ul className="mx-auto flex items-center gap-[56px] list-none p-0 m-0">
          {navLinks.map((link) => (
            <li key={link}>
              <a href="#" className="font-satoshi font-medium text-[18px] leading-[24px] text-black no-underline">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-[10px]">
          <span className="block w-[45.36px] h-[2px] bg-black" />
          <span className="block w-[45.36px] h-[2px] bg-black" />
          <span className="block w-[45.36px] h-[2px] bg-black" />
        </div>
      </div>
    </nav>
  )
}
