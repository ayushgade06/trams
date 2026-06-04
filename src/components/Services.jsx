import vector2516 from '../../trams/Vector 2516.png'
import vector5 from '../../trams/Vector 5.png'
import rectangle661 from '../../trams/Rectangle 661.png'

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
    badge: rectangle661,
  },
]

export default function Services() {
  return (
    <section className="relative w-full py-[100px] overflow-visible bg-white">
      <div className="mx-auto max-w-[1618px] px-[80px]">
        {/* Heading */}
        <div className="relative mb-[60px]">
          <h2 className="font-gerbil text-[56px] leading-[76px] font-[400] text-black max-w-[860px]">
            What we <span className="text-highlight-green">can</span>
            <br />

            <span className="relative inline-block">
              offer

              <img
                src={vector5}
                alt=""
                className="absolute pointer-events-none"
                style={{
                  left: '-4px',
                  bottom: '-10px',
                  width: '140px',
                  height: '20px',
                  objectFit: 'contain',
                }}
              />
            </span>{' '}
            you!
          </h2>

          {/* Red decorative curve */}
          <img
            src={vector2516}
            alt=""
            className="absolute pointer-events-none hidden xl:block"
            style={{
              right: '-20px',
              top: '-220px',
              width: '1000px',
              height: '400px',
              objectFit: 'cover',
              zIndex: 1,
            }}
          />
        </div>

        {/* Service Rows */}
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
              {/* Left Tag */}
              <div
                className="font-satoshi text-[18px] leading-[24px] text-[#000] whitespace-pre-line"
                style={{ minWidth: '220px' }}
              >
                {service.tag}
              </div>

              {/* Title */}
              <div className="relative z-10">
                <h3 className="font-gerbil text-[56px] leading-[76px] text-black font-[400] z-10">
                  {service.title}
                </h3>

                {/* Rectangle 661 only on third row */}
                {service.badge && (
                  <img
                    src={service.badge}
                    alt="Piloting digital confidence"
                    className="absolute"
                    style={{
                      width: '120px',
                      height: '300px',
                      right: '450px',
                      top: '-100px',
                      zIndex: -2,
                      objectFit: 'contain',
                    }}
                  />
                )}
              </div>

              {/* Arrow */}
              <div className="flex justify-end">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="arrow-btn"
                >
                  <path
                    d="M6 12H18M18 12L12 6M18 12L12 18"
                    stroke="#000"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}