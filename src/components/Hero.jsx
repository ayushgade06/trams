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
      className="relative bg-white overflow-hidden"
      style={{
        width: '1920px',
        height: '1254px',
      }}
    >
      {/* Decorative background element - Vector 2510 */}
      <img
        src={vector2510}
        alt=""
        className="absolute object-contain"
        style={{
          left: '-140px',
          top: '130px',
          width: '220px',
          height: '520px',
        }}
      />

      {/* Decorative background element - Vector 2511 */}
      <img
        src={vector2511}
        alt=""
        className="absolute object-contain"
        style={{
          left: '-65px',
          top: '230px',
          width: '120px',
          height: '320px',
        }}
      />

      {/* Decorative element - Ellipse 736 */}
      <img
        src={ellipse736}
        alt=""
        className="absolute object-contain"
        style={{
          left: '1754.24px',
          top: '180px',
          width: '155.76px',
          height: '155.76px',
          transform: 'rotate(-60deg)',
        }}
      />

      {/* Main heading */}
      <h1
        className="absolute text-black font-normal"
        style={{
          fontFamily: 'Gerbil',
          fontSize: '100px',
          lineHeight: '126px',
          left: '308px',
          top: '243px',
          width: '1305px',
          height: '378px',
          margin: 0,
        }}
      >
        The{' '}
        <span className="relative inline-block">
          thinkers
          <img
            src={vector5}
            alt=""
            className="absolute object-contain"
            style={{
              left: '666px',
              top: '333px',
              width: '594px',
              height: '50px',
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
            className="absolute object-cover -z-10"
            style={{
              left: '1235px',
              top: '367px',
              width: '405px',
              height: '137px',
            }}
          />
          <span className="relative">changing</span>
        </span>
        <br />
        the{' '}
        <span className="relative inline-block">
          <img
            src={rectangle658}
            alt=""
            className="absolute object-cover -z-10"
            style={{
              left: '561px',
              top: '498px',
              width: '456px',
              height: '109px',
            }}
          />
          <span className="relative">status</span>
        </span>{' '}
        Quo with
      </h1>

      {/* Paragraph text */}
      <p
        className="absolute text-black font-normal"
        style={{
          fontFamily: 'Satoshi',
          fontSize: '24px',
          lineHeight: '36px',
          left: '545px',
          top: '648px',
          width: '831px',
          height: '72px',
          margin: 0,
        }}
      >
        We are a team of strategists, designers communicators, researchers.
        Together, we believe that progress only happens when you refuse to play
        things safe.
      </p>

      {/* Avatar images */}
      <img
        src={e255}
        alt=""
        className="absolute rounded-full object-cover"
        style={{
          left: '553px',
          top: '801px',
          width: '226px',
          height: '226px',
        }}
      />

      <img
        src={e256}
        alt=""
        className="absolute rounded-full object-cover"
        style={{
          left: '677px',
          top: '1027px',
          width: '226px',
          height: '226px',
        }}
      />

      <img
        src={e262}
        alt=""
        className="absolute rounded-full object-cover"
        style={{
          left: '38px',
          top: '996px',
          width: '226px',
          height: '226px',
        }}
      />

      <img
        src={e257}
        alt=""
        className="absolute rounded-full object-cover"
        style={{
          left: '977px',
          top: '856px',
          width: '226px',
          height: '226px',
        }}
      />

      <img
        src={e258}
        alt=""
        className="absolute rounded-full object-cover"
        style={{
          left: '1144px',
          top: '940px',
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
          left: '1414px',
          top: '801px',
          width: '226px',
          height: '226px',
        }}
      />

      <img
        src={e260}
        alt=""
        className="absolute rounded-full object-cover"
        style={{
          left: '1656px',
          top: '960px',
          width: '226px',
          height: '226px',
        }}
      />

      <img
        src={e261}
        alt=""
        className="absolute rounded-full object-cover"
        style={{
          left: '199px',
          top: '940px',
          width: '226px',
          height: '226px',
          border: '8px solid #FFFFFF',
          boxSizing: 'border-box',
        }}
      />
    </section>
  )
}
