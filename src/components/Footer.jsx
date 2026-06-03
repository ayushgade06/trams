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
    <footer className="w-full bg-[#F7F7F7] border-t border-[#E0E0E0]">
      <div className="max-w-[1600px] mx-auto px-[60px] py-[60px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[40px] mb-[60px]">
          {footerColumns.map((col) => (
            <div key={col.id} id={col.id}>
              <h4
                className="font-satoshi font-semibold text-black mb-[20px]"
                style={{ fontSize: '15px' }}
              >
                {col.heading}
              </h4>

              {col.isContact ? (
                <div className="flex flex-col gap-[10px]">
                  <p className="text-[#666] text-[13px] leading-[1.7]">{col.address}</p>
                  <p className="text-[#666] text-[13px]">{col.phone}</p>
                  <a href={`mailto:${col.email}`} className="text-[#666] text-[13px] no-underline hover:text-black transition-colors">
                    {col.email}
                  </a>
                </div>
              ) : (
                <ul className="list-none flex flex-col gap-[12px]">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-[#666] text-[13px] no-underline hover:text-black transition-colors duration-150"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#E0E0E0] pt-[24px] text-center">
          <p className="text-[#999] text-[13px]">©2023 Elementum. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}
