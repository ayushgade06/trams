// Services Section — "What we can offer you!"

import vector2516 from '../../trams/Vector 2516.png'
import msg from '../../trams/msg.png'

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
    badge: msg,
  },
]

export default function Services() {
  return (
    <section className="relative w-full py-[80px] overflow-visible">
      <div className="max-w-[1600px] mx-auto px-[60px]">

        {/* Heading */}
        <div className="mb-[60px] relative">
          <h2
            className="font-satoshi font-bold text-black leading-[1.05]"
            style={{ fontSize: 'clamp(48px, 5.5vw, 88px)' }}
          >
            What we{' '}
            <span className="underline-red-bold">can</span>
            <br />
            offer you!
          </h2>

          {/* Wavy red line beside heading */}
          <img
            src={vector2516}
            alt=""
            className="decorative absolute"
            style={{ width: '320px', right: '100px', top: '60px', zIndex: 1 }}
          />
        </div>

        {/* Service rows */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="service-row flex items-center gap-[40px] py-[28px] cursor-pointer"
              style={{
                borderTop: index === 0 ? '1px solid #D8D8D8' : 'none',
                borderBottom: '1px solid #D8D8D8',
              }}
            >
              {/* Left tag */}
              <div
                className="text-[#888] leading-[1.6]"
                style={{ fontSize: 'clamp(11px, 0.85vw, 13px)', minWidth: '200px', whiteSpace: 'pre-line' }}
              >
                {service.tag}
              </div>

              {/* Center title */}
              <div className="flex-1 flex items-center gap-4">
                <h3
                  className="font-satoshi font-medium text-black"
                  style={{ fontSize: 'clamp(20px, 2.2vw, 36px)' }}
                >
                  {service.badge ? (
                    <>
                      {service.title.slice(0, service.title.indexOf('con'))}
                      <span className="relative inline-block">
                        con
                        <img
                          src={service.badge}
                          alt="badge"
                          className="absolute decorative"
                          style={{ width: '52px', bottom: '-14px', left: '50%', transform: 'translateX(-50%)' }}
                        />
                      </span>
                      {service.title.slice(service.title.indexOf('con') + 3)}
                    </>
                  ) : (
                    service.title
                  )}
                </h3>
              </div>

              {/* Right arrow */}
              <div className="arrow-btn ml-auto">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9H15M15 9L9.5 3.5M15 9L9.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
