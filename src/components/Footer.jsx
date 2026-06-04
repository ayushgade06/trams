const styles = `
  /* ── TABLET: 768px – 1279px ── */
  @media (min-width: 768px) and (max-width: 1279px) {
    .ft-inner {
      padding-left: 48px !important;
      padding-right: 48px !important;
      padding-bottom: 56px !important;
    }
    .ft-grid {
      gap: 28px !important;
    }
    .ft-heading {
      font-size: 15px !important;
      margin-bottom: 14px !important;
    }
    .ft-link, .ft-contact-line {
      font-size: 14px !important;
      line-height: 20px !important;
    }
    .ft-copyright {
      font-size: 14px !important;
    }
  }

  /* ── MOBILE: < 768px ── */
  @media (max-width: 767px) {
    .ft-inner {
      padding-left: 20px !important;
      padding-right: 20px !important;
      padding-bottom: 36px !important;
    }
    .ft-grid {
      grid-template-columns: 1fr 1fr !important;
      gap: 32px 20px !important;
    }
    .ft-heading {
      font-size: 14px !important;
      margin-bottom: 12px !important;
    }
    .ft-link, .ft-contact-line {
      font-size: 13px !important;
      line-height: 20px !important;
    }
    .ft-gap {
      gap: 8px !important;
    }
    .ft-copyright {
      font-size: 13px !important;
      padding-top: 24px !important;
    }
  }
`

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
    <>
      <style>{styles}</style>
      <footer className="w-full bg-[#DDE8D9]">
        <div className="ft-inner mx-auto max-w-[1920px] px-[80px] pb-[80px]">
          <div className="ft-grid border-t border-[#0000001A] pt-[48px] grid grid-cols-2 md:grid-cols-4 gap-[40px]">
            {footerColumns.map((col) => (
              <div key={col.id} id={col.id}>
                <h4
                  className="ft-heading font-satoshi font-semibold text-black mb-[20px]"
                  style={{ fontSize: '18px', lineHeight: '24px' }}
                >
                  {col.heading}
                </h4>

                {col.isContact ? (
                  <div className="ft-gap flex flex-col gap-[10px]">
                    <p className="ft-contact-line text-[#000] text-[18px] leading-[24px]">{col.address}</p>
                    <p className="ft-contact-line text-[#000] text-[18px] leading-[24px]">{col.phone}</p>
                    <a
                      href={`mailto:${col.email}`}
                      className="ft-link text-[#000] text-[18px] leading-[24px] no-underline hover:text-black transition-colors"
                    >
                      {col.email}
                    </a>
                  </div>
                ) : (
                  <ul className="ft-gap list-none flex flex-col gap-[12px]">
                    {col.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="ft-link text-[#000] text-[18px] leading-[24px] no-underline hover:text-black transition-colors duration-150"
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

          <div className="pt-[34px] text-center">
            <p className="ft-copyright font-satoshi text-[18px] leading-[24px] text-[#000]">
              ©2023 Elementum. All rights reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}