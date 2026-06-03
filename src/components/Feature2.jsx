// Feature Section 2 — "See how we can help you progress"

import image348_1 from '../../trams/image 348 (1).png'
import polygon1 from '../../trams/Polygon 1.png'
import vector2516 from '../../trams/Vector 2516.png'

export default function Feature2() {
  return (
    <section className="relative w-full overflow-visible py-[100px]">
      <div className="max-w-[1600px] mx-auto px-[60px]">
        <div className="flex items-center gap-[60px] flex-wrap-reverse lg:flex-nowrap">

          {/* Left: Circular photo with triangles */}
          <div className="flex-1 min-w-[300px] relative flex justify-center items-center" style={{ minHeight: '460px' }}>

            {/* Main circular photo */}
            <img
              src={image348_1}
              alt="Team working"
              className="avatar-circle relative"
              style={{ width: '360px', height: '360px', zIndex: 2 }}
            />

            {/* Red triangle top-right */}
            <img
              src={polygon1}
              alt=""
              className="decorative absolute"
              style={{ width: '100px', top: '20px', right: '80px', zIndex: 3 }}
            />

            {/* Red triangle bottom-left (smaller) */}
            <img
              src={polygon1}
              alt=""
              className="decorative absolute"
              style={{ width: '65px', bottom: '60px', left: '60px', zIndex: 3, opacity: 0.85 }}
            />
          </div>

          {/* Right: Text content */}
          <div className="flex-1 min-w-[300px]">
            <h2
              className="font-satoshi text-black leading-[1.35] mb-[28px]"
              style={{ fontSize: '56px', fontWeight: 400 }}
            >
              See how we can
              <br />
              help you progress
            </h2>

            <p
              className="font-satoshi text-[#666] leading-[1.6] mb-[36px]"
              style={{ fontSize: '24px', fontWeight: 400, maxWidth: '440px' }}
            >
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design
              digital, comms and social research.
            </p>

            <a href="#" className="read-more-link">Read more</a>
          </div>
        </div>
      </div>

      {/* Wavy red line decoration */}
      <img
        src={vector2516}
        alt=""
        className="decorative absolute"
        style={{ width: '55%', right: '0', bottom: '-40px', zIndex: 1 }}
      />
    </section>
  )
}
