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
    <section className="relative w-full py-[100px] overflow-visible">
      <div className="mx-auto max-w-[1618px] px-[80px]">

        <div className="relative mb-[60px]">
          <h2 className="font-gerbil text-[56px] leading-[76px] font-[400] text-black max-w-[860px]">
            What we <span className="text-highlight-green">can</span>
            <br />
            offer you!
          </h2>

          <img
            src={vector2516}
            alt=""
            className="decorative absolute hidden xl:block"
            style={{ width: '320px', right: '0', top: '40px', zIndex: 1 }}
          />
        </div>

        <div className="space-y-[24px]">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className="service-row relative grid grid-cols-[220px_1fr_auto] items-center gap-6 py-[42px]"
              style={{
                borderTop: index === 0 ? '1px solid #D8D8D8' : undefined,
                borderBottom: '1px solid #D8D8D8',
              }}
            >
              <div className="font-satoshi text-[18px] leading-[24px] text-[#000] whitespace-pre-line" style={{ minWidth: '220px' }}>
                {service.tag}
              </div>

              <div className="relative">
                <h3 className="font-gerbil text-[56px] leading-[76px] text-black font-[400]">
                  {service.title}
                </h3>
                {service.badge && (
                  <img
                    src={service.badge}
                    alt="badge"
                    className="decorative absolute"
                    style={{ width: '72px', right: '-62px', top: '12px', zIndex: 2 }}
                  />
                )}
              </div>

              <div className="flex justify-end">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="arrow-btn">
                  <path d="M6 12H18M18 12L12 6M18 12L12 18" stroke="#000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
