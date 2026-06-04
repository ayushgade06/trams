import e255 from '../../trams/Ellipse 255.png'
import e256 from '../../trams/Ellipse 256.png'
import e257 from '../../trams/Ellipse 257.png'
import e258 from '../../trams/Ellipse 258.png'
import e259 from '../../trams/Ellipse 259.png'
import e260 from '../../trams/Ellipse 260.png'
import e261 from '../../trams/Ellipse 261.png'
import e262 from '../../trams/Ellipse 262.png'

import vector2511 from '../../trams/Vector 2511.png'
import vector2510 from '../../trams/Vector 2510.png'
import rectangle657 from '../../trams/Rectangle 657 (1).png'
import rectangle658 from '../../trams/Rectangle 658.png'
import vector5 from '../../trams/Vector 5.png'
import ellipse736 from '../../trams/Ellipse 736.png'

export default function Hero() {
  return (
    <section
      className="relative bg-white"
      style={{
        width: '1920px',
        height: '1254px',
      }}
    >
      {/* Left Decorative Curves */}
      <img
        src={vector2510}
        alt=""
        className="absolute object-contain"
        style={{
          left: '-70px',
          top: '350px',
          width: '260px',
          height: '540px',
        }}
      />

      <img
        src={vector2511}
        alt=""
        className="absolute object-contain"
        style={{
          left: '60px',
          top: '370px',
          width: '140px',
          height: '450px',
        }}
      />

      {/* Purple Shape */}
      <img
        src={ellipse736}
        alt=""
        className="absolute object-contain"
        style={{
          left: '1650px',
          top: '400px',
          width: '120px',
          height: '120px',
        }}
      />

      {/* Heading */}
      <h1
        className="absolute text-black font-normal text-center"
        style={{
          fontFamily: 'Gerbil',
          fontSize: '100px',
          lineHeight: '126px',
          width: '1305px',
          left: '50%',
          top: '180px',
          transform: 'translateX(-50%)',
          margin: 0,
        }}
      >
        The{' '}
        <span className="relative inline-block">
          thinkers

          <img
            src={vector5}
            alt=""
            className="absolute pointer-events-none"
            style={{
              left: '-10px',
              bottom: '-250px',
              width: '600px',
              height: '500px',
              objectFit: 'contain',
            }}
          />
        </span>{' '}
        and
        <br />
        doers were{' '}
        <span className="relative inline-block">
          <img
            src={rectangle657}
            alt=""
            className="absolute -z-10"
            style={{
              left: '120px',
              top: '20px',
              width: '1220px',
              height: '105px',
              objectFit: 'contain',
            }}
          />
          changing
        </span>
        <br />
        the{' '}
        <span className="relative inline-block">
          <img
            src={rectangle658}
            alt=""
            className="absolute -z-10"
            style={{
              left: '10px',
              top: '0px',
              width: '3000px',
              height: '150px',
              objectFit: 'contain',
            }}
          />
          status
        </span>{' '}
        Quo with
      </h1>

      {/* Description */}
      <p
        className="absolute text-black font-normal text-center"
        style={{
          fontFamily: 'Satoshi',
          fontSize: '24px',
          lineHeight: '36px',
          width: '831px',
          left: '50%',
          top: '560px',
          transform: 'translateX(-50%)',
          margin: 0,
        }}
      >
        We are a team of strategists, designers communicators, researchers.
        Together, we believe that progress only happens when you refuse to play
        things safe.
      </p>

      {/* Team Images */}

      <img
        src={e262}
        alt=""
        className="absolute rounded-full object-cover"
        style={{
          left: '70px',
          top: '860px',
          width: '226px',
          height: '226px',
        }}
      />

      <img
        src={e261}
        alt=""
        className="absolute rounded-full object-cover"
        style={{
          left: '210px',
          top: '840px',
          width: '226px',
          height: '226px',
          border: '8px solid #FFFFFF',
          boxSizing: 'border-box',
        }}
      />

      <img
        src={e255}
        alt=""
        className="absolute rounded-full object-cover"
        style={{
          left: '540px',
          top: '700px',
          width: '226px',
          height: '226px',
        }}
      />

      <img
        src={e256}
        alt=""
        className="absolute rounded-full object-cover"
        style={{
          left: '670px',
          top: '930px',
          width: '226px',
          height: '226px',
        }}
      />

      <img
        src={e257}
        alt=""
        className="absolute rounded-full object-cover"
        style={{
          left: '980px',
          top: '760px',
          width: '226px',
          height: '226px',
        }}
      />

      <img
        src={e258}
        alt=""
        className="absolute rounded-full object-cover"
        style={{
          left: '1130px',
          top: '860px',
          width: '226px',
          height: '226px',
          border: '8px solid #FFFFFF',
          boxSizing: 'border-box',
        }}
      />

      <img
        src={e259}
        alt=""
        className="absolute rounded-full object-cover"
        style={{
          left: '1400px',
          top: '690px',
          width: '226px',
          height: '226px',
        }}
      />

      <img
        src={e260}
        alt=""
        className="absolute rounded-full object-cover"
        style={{
          left: '1650px',
          top: '860px',
          width: '226px',
          height: '226px',
        }}
      />
    </section>
  )
}