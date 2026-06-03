// Footer Section

const footerColumns = [
  {
    id: 'col-company',
    heading: 'Company',
    links: ['Home', 'About', 'Studio', 'Service', 'Blog'],
  },
  {
    id: 'col-terms',
    heading: 'Terms & Policies',
    links: ['Privacy Policy', 'Terms & Conditions', 'Explore', 'Accessibility'],
  },
  {
    id: 'col-follow',
    heading: 'Follow Us',
    links: ['Instagram', 'LinkedIn', 'YouTube', 'Twitter'],
  },
  {
    id: 'col-contact',
    heading: 'Terms & Policies',
    isContact: true,
    address: '1498e Flatlands, STE 20 Chicago, IL 63867.',
    phone: '(123) 456789030',
    email: 'info@elementum.com',
  },
]

export default function Footer() {
  return (
    <footer className="w-full bg-[#DDE8D9]">
      <div className="mx-auto max-w-[1920px] px-[80px] pb-[80px]">
        <div className="border-t border-[#0000001A] pt-[48px] grid grid-cols-2 md:grid-cols-4 gap-[40px]">
          {footerColumns.map((col) => (
            <div key={col.id} id={col.id}>
              <h4 className="font-satoshi font-semibold text-black mb-[20px]" style={{ fontSize: '18px', lineHeight: '24px' }}>
                {col.heading}
              </h4>

              {col.isContact ? (
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[#000] text-[18px] leading-[24px]">{col.address}</p>
                  <p className="text-[#000] text-[18px] leading-[24px]">{col.phone}</p>
                  <a href={`mailto:${col.email}`} className="text-[#000] text-[18px] leading-[24px] no-underline hover:text-black transition-colors">
                    {col.email}
                  </a>
                </div>
              ) : (
                <ul className="list-none flex flex-col gap-[12px]">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[#000] text-[18px] leading-[24px] no-underline hover:text-black transition-colors duration-150">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="pt-[34px] text-center">
          <p className="font-satoshi text-[18px] leading-[24px] text-[#000]">©2023 Elementum. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
