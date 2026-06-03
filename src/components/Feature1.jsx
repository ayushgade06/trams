// Feature Section 1 — "Tomorrow should be better than today"

import image348 from '../../trams/image 348.png'
import vector2517 from '../../trams/Vector 2517.png'
import rect657_1 from '../../trams/Rectangle 657 (1).png'

export default function Feature1() {
  return (
    <section className="relative w-full overflow-visible py-[120px]">
      <div className="mx-auto max-w-[1599px] px-[80px]">
        <div className="grid gap-[88px] lg:grid-cols-[1.1fr_1fr] items-center">
          <div className="max-w-[760px]">
            <h2 className="font-gerbil text-[56px] leading-[76px] font-[400] text-black mb-[30px]">
              <span className="underline-yellow">Tomorrow</span> should be better than <span className="text-highlight-green">today</span>
            </h2>
            <p className="font-satoshi text-[24px] leading-[36px] text-[#000] mb-[40px]">
              We are a team of strategists, designers communicators, researchers.
              Together, we believe that progress only happens when you refuse to
              play things safe.
            </p>
            <a href="#" className="read-more-link">Read more</a>
          </div>

          <div className="relative flex justify-center items-center">
            <div
              className="absolute rounded-full"
              style={{
                width: '440px',
                height: '440px',
                background: 'radial-gradient(circle, rgba(255,180,160,0.28) 0%, transparent 70%)',
                zIndex: 1,
              }}
            />

            <img
              src={image348}
              alt="Business meeting"
              className="avatar-circle relative"
              style={{ width: '500px', height: '500px', zIndex: 2 }}
            />

            <img
              src={rect657_1}
              alt=""
              className="decorative absolute"
              style={{ width: '92px', top: '34px', right: '46px', zIndex: 3 }}
            />

            <img
              src={vector2517}
              alt=""
              className="decorative absolute"
              style={{ width: '84%', maxWidth: '620px', bottom: '-72px', left: '-46px', zIndex: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
