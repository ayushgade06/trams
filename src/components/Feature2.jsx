// Feature Section 2 — "See how we can help you progress"

import image348_1 from '../../trams/image 348 (1).png'
import polygon1 from '../../trams/Polygon 1.png'
import vector2516 from '../../trams/Vector 2516.png'

export default function Feature2() {
  return (
    <section className="relative w-full overflow-visible py-[120px]">
      <div className="mx-auto max-w-[1599px] px-[80px]">
        <div className="grid gap-[88px] lg:grid-cols-[1fr_1.1fr] items-center">
          <div className="relative flex justify-center items-center">
            <div
              className="absolute rounded-full"
              style={{
                width: '440px',
                height: '440px',
                background: 'radial-gradient(circle, rgba(255,107,107,0.18) 0%, transparent 72%)',
                zIndex: 1,
              }}
            />

            <img
              src={image348_1}
              alt="Team working"
              className="avatar-circle relative"
              style={{ width: '500px', height: '500px', zIndex: 2 }}
            />

            <img
              src={polygon1}
              alt=""
              className="decorative absolute"
              style={{ width: '108px', top: '32px', right: '72px', zIndex: 3 }}
            />
            <img
              src={polygon1}
              alt=""
              className="decorative absolute"
              style={{ width: '72px', bottom: '72px', left: '68px', zIndex: 3, opacity: 0.92 }}
            />
          </div>

          <div className="max-w-[740px]">
            <h2 className="font-gerbil text-[56px] leading-[76px] font-[400] text-black mb-[30px]">
              <span className="text-highlight-green">See</span> how we can
              <br />
              help you <span className="underline-yellow">progress</span>
            </h2>
            <p className="font-satoshi text-[24px] leading-[36px] text-[#000] mb-[40px]">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>
            <a href="#" className="read-more-link">Read more</a>
          </div>
        </div>

        <img
          src={vector2516}
          alt=""
          className="decorative absolute hidden lg:block"
          style={{ width: '55%', maxWidth: '620px', right: '0', bottom: '-32px', zIndex: 1 }}
        />
      </div>
    </section>
  )
}
