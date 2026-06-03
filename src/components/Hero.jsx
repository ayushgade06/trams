// Hero Section — thinkers, doers, status quo

import e255 from '../../trams/Ellipse 255.png'
import e256 from '../../trams/Ellipse 256.png'
import e257 from '../../trams/Ellipse 257.png'
import e258 from '../../trams/Ellipse 258.png'
import e259 from '../../trams/Ellipse 259.png'
import e260 from '../../trams/Ellipse 260.png'
import e261 from '../../trams/Ellipse 261.png'

import squiggleTop from '../../trams/Vector 2511.png'
import squiggleBottom from '../../trams/Vector 2510.png'
import polygon3 from '../../trams/Polygon 3.png'
import rect657 from '../../trams/Rectangle 657.png'
import rect661 from '../../trams/Rectangle 661.png'
import ellipse736 from '../../trams/Ellipse 736.png'

export default function Hero() {
  return (
    <section className="relative w-full overflow-visible" style={{ minHeight: '1011px' }}>
      <div className="relative mx-auto px-[80px] pt-[120px] max-w-[1844px]">

        <img
          src={squiggleTop}
          alt=""
          className="decorative absolute"
          style={{ left: '-30px', top: '140px', width: '100px', zIndex: 1 }}
        />

        <img
          src={polygon3}
          alt=""
          className="decorative absolute"
          style={{ right: '54px', top: '16px', width: '90px', zIndex: 1 }}
        />

        <img
          src={rect661}
          alt=""
          className="decorative absolute"
          style={{ right: '160px', top: '120px', width: '92px', zIndex: 1 }}
        />

        <img
          src={rect657}
          alt=""
          className="decorative absolute"
          style={{ right: '280px', top: '220px', width: '74px', zIndex: 2 }}
        />

        <div className="relative z-10 mx-auto text-center max-w-[1305px]">
          <h1
            className="font-gerbil text-[100px] leading-[126px] tracking-[0] text-black"
            style={{ fontWeight: 400 }}
          >
            The <span className="underline-yellow">thinkers</span> and
            <br />
            doers were <span className="text-highlight-pink">changing</span>
            <br />
            the <span className="text-highlight-green">status</span> Quo with
          </h1>

          <p
            className="font-satoshi text-[24px] leading-[36px] text-[#000] mx-auto mt-[34px]"
            style={{ maxWidth: '840px' }}
          >
            We are a team of strategists, designers communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>
        </div>

        <div className="relative w-full h-[560px] mt-[72px]">
          <img
            src={e255}
            alt="Team member"
            className="avatar-circle float-1 absolute"
            style={{ width: '130px', height: '130px', left: '8%', top: '200px', zIndex: 4 }}
          />
          <img
            src={e256}
            alt="Team member"
            className="avatar-circle float-2 absolute"
            style={{ width: '116px', height: '116px', left: '3%', top: '260px', zIndex: 3 }}
          />
          <img
            src={e258}
            alt="Team member"
            className="avatar-circle float-3 absolute"
            style={{ width: '148px', height: '148px', left: '24%', top: '210px', zIndex: 4 }}
          />
          <img
            src={e257}
            alt="Team member"
            className="avatar-circle float-4 absolute"
            style={{ width: '170px', height: '170px', left: '44%', top: '110px', zIndex: 5 }}
          />
          <img
            src={e259}
            alt="Team member"
            className="avatar-circle float-5 absolute"
            style={{ width: '135px', height: '135px', left: '56%', top: '190px', zIndex: 4 }}
          />
          <img
            src={e260}
            alt="Team member"
            className="avatar-circle float-6 absolute"
            style={{ width: '120px', height: '120px', right: '20%', top: '92px', zIndex: 3 }}
          />
          <img
            src={e261}
            alt="Team member"
            className="avatar-circle float-7 absolute"
            style={{ width: '160px', height: '160px', right: '0', top: '242px', zIndex: 4 }}
          />

          <img
            src={ellipse736}
            alt=""
            className="decorative absolute"
            style={{ width: '24px', height: '24px', left: '16%', top: '320px', zIndex: 2 }}
          />
          <img
            src={squiggleBottom}
            alt=""
            className="decorative absolute"
            style={{ width: '120px', right: '8%', top: '330px', zIndex: 1 }}
          />
        </div>
      </div>
    </section>
  )
}
