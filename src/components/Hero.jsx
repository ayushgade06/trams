// Hero Section — thinkers, doers, status quo

// Avatar imports
import e255 from '../../trams/Ellipse 255.png'
import e256 from '../../trams/Ellipse 256.png'
import e257 from '../../trams/Ellipse 257.png'
import e258 from '../../trams/Ellipse 258.png'
import e259 from '../../trams/Ellipse 259.png'
import e260 from '../../trams/Ellipse 260.png'
import e261 from '../../trams/Ellipse 261.png'

// Decorative imports
import squiggleLeft from '../../trams/Vector 2510.png'
import squiggleLeft2 from '../../trams/Vector 2511.png'
import polygon3 from '../../trams/Polygon 3.png'
import ellipse736 from '../../trams/Ellipse 736.png'

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-visible"
      style={{ minHeight: '1011px', maxWidth: '100%' }}
    >
      <div className="max-w-[1600px] mx-auto px-[60px] pt-[60px] relative">

        {/* Left squiggle decoration */}
        <img
          src={squiggleLeft}
          alt=""
          className="decorative absolute"
          style={{ left: '-20px', top: '80px', width: '80px', zIndex: 1 }}
        />

        {/* Purple polygon top-right */}
        <img
          src={polygon3}
          alt=""
          className="decorative absolute"
          style={{ right: '40px', top: '20px', width: '72px', zIndex: 1 }}
        />

        {/* Hero Heading */}
        <div className="relative z-10 text-center max-w-[900px] mx-auto pt-[20px]">
          <h1
            className="font-satoshi text-black leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(52px, 6vw, 100px)', fontWeight: 700 }}
          >
            The{' '}
            <span className="italic underline-red">thinkers</span>
            {' '}and
            <br />
            doers were{' '}
            <span className="highlight-pink">changing</span>
            <br />
            the{' '}
            <span className="highlight-green">status</span>
            {' '}Quo with
          </h1>

          {/* Subtitle */}
          <p
            className="font-satoshi text-[#555] mt-[28px] mx-auto"
            style={{ maxWidth: '460px', fontSize: 'clamp(14px, 1.1vw, 16px)', lineHeight: 1.7 }}
          >
            We are a team of strategists, designers communicators, researchers.
            Together, we belive that progress only highappens when you refuse to
            play things safe.
          </p>
        </div>

        {/* Floating Avatars */}
        {/* Top row - 3 avatars spread */}
        <div className="relative w-full" style={{ height: '480px', marginTop: '-20px' }}>
          {/* Avatar 1 - Far left, low */}
          <img
            src={e260}
            alt="Team member"
            className="avatar-circle float-1 absolute"
            style={{ width: '140px', height: '140px', left: '0px', top: '200px', zIndex: 3 }}
          />

          {/* Avatar 2 - Left center, high */}
          <img
            src={e255}
            alt="Team member"
            className="avatar-circle float-2 absolute"
            style={{ width: '120px', height: '120px', left: '18%', top: '80px', zIndex: 3 }}
          />

          {/* Avatar 3 - Left of center, mid */}
          <img
            src={e258}
            alt="Team member"
            className="avatar-circle float-3 absolute"
            style={{ width: '160px', height: '160px', left: '30%', top: '160px', zIndex: 3 }}
          />

          {/* Avatar 4 - Center */}
          <img
            src={e257}
            alt="Team member"
            className="avatar-circle float-4 absolute"
            style={{ width: '130px', height: '130px', left: '44%', top: '70px', zIndex: 3 }}
          />

          {/* Avatar 5 - Right of center */}
          <img
            src={e256}
            alt="Team member"
            className="avatar-circle float-5 absolute"
            style={{ width: '145px', height: '145px', left: '58%', top: '180px', zIndex: 3 }}
          />

          {/* Avatar 6 - Far right, high */}
          <img
            src={e259}
            alt="Team member"
            className="avatar-circle float-6 absolute"
            style={{ width: '120px', height: '120px', right: '14%', top: '60px', zIndex: 3 }}
          />

          {/* Avatar 7 - Far right, low */}
          <img
            src={e261}
            alt="Team member"
            className="avatar-circle float-7 absolute"
            style={{ width: '160px', height: '160px', right: '0px', top: '220px', zIndex: 3 }}
          />

          {/* Small decorative ellipse */}
          <img
            src={ellipse736}
            alt=""
            className="decorative absolute"
            style={{ width: '24px', height: '24px', left: '12%', top: '280px', zIndex: 2 }}
          />

          {/* Second squiggle */}
          <img
            src={squiggleLeft2}
            alt=""
            className="decorative absolute"
            style={{ width: '70px', left: '8%', top: '300px', zIndex: 1 }}
          />
        </div>
      </div>
    </section>
  )
}
