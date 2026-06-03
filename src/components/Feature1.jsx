// Feature Section 1 — "Tomorrow should be better than today"

import image348 from '../../trams/image 348.png'
import vector2517 from '../../trams/Vector 2517.png'
import rect657_1 from '../../trams/Rectangle 657 (1).png'

export default function Feature1() {
  return (
    <section className="relative w-full overflow-visible py-[80px]">
      <div className="max-w-[1600px] mx-auto px-[60px]">
        <div className="flex items-center gap-[60px] flex-wrap lg:flex-nowrap">

          {/* Left: Text content */}
          <div className="flex-1 min-w-[300px]">
            <h2
              className="font-satoshi font-bold text-black leading-[1.1] mb-[28px]"
              style={{ fontSize: 'clamp(32px, 3.5vw, 56px)' }}
            >
              <span className="underline-red-bold italic">Tomorrow</span> should
              <br />
              be better than <span className="underline-red-bold">today</span>
            </h2>

            <p
              className="text-[#555] leading-[1.8] mb-[36px]"
              style={{ fontSize: 'clamp(13px, 1vw, 15px)', maxWidth: '380px' }}
            >
              We are a team of strategists, designers communicators, researchers.
              Together, we believe that progress only happens when you refuse to
              play things safe.
            </p>

            <a href="#" className="read-more-link">Read more</a>
          </div>

          {/* Right: Circular photo with decorative elements */}
          <div className="flex-1 min-w-[300px] relative flex justify-center items-center" style={{ minHeight: '460px' }}>

            {/* Pink/salmon glow blob behind image */}
            <div
              className="absolute rounded-full"
              style={{
                width: '320px',
                height: '320px',
                background: 'radial-gradient(circle, rgba(255,180,160,0.45) 0%, transparent 70%)',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 1,
              }}
            />

            {/* Main circular photo */}
            <img
              src={image348}
              alt="Business meeting"
              className="avatar-circle relative"
              style={{ width: '380px', height: '380px', zIndex: 2 }}
            />

            {/* Red rectangle decoration top-right */}
            <img
              src={rect657_1}
              alt=""
              className="decorative absolute"
              style={{ width: '90px', top: '30px', right: '60px', zIndex: 3 }}
            />

            {/* Wavy red line below */}
            <img
              src={vector2517}
              alt=""
              className="decorative absolute"
              style={{ width: '100%', maxWidth: '600px', bottom: '-80px', left: '-40px', zIndex: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
