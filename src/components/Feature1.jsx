import image348 from '../../trams/image 348.png'
import vector2517 from '../../trams/Vector 2517.png'
import rectangle657 from '../../trams/Rectangle 657.png'
import vector5 from '../../trams/Vector 5.png'

export default function Feature1() {
  return (
    <section className="relative w-full bg-white overflow-visible">
      <div className="relative mx-auto max-w-[1600px] px-[80px] pt-[80px] pb-[20px] min-h-[700px]">

        <div
          className="absolute pointer-events-none"
          style={{
            left: '600px',
            top: '-150px',
            width: '500px',
            height: '500px',
            background:
              'radial-gradient(circle, rgba(255, 125, 125, 0.30) 0%, rgba(255, 125, 125, 0.08) 35%, rgba(255, 125, 125, 0) 75%)',
            zIndex: 0,
          }}
        />

        {/* Large connecting red curve */}
        <img
          src={vector2517}
          alt=""
          className="absolute pointer-events-none z-0"
          style={{
            right: '-60px',
            top: '270px',
            width: '1400px',
            height: '800px',
            objectFit: 'contain',
          }}
        />

        {/* Yellow underline */}
        <img
          src={vector5}
          alt=""
          className="absolute left-[78px] top-[164px] w-[330px] object-contain z-10"
        />

        {/* Content */}
        <div className="absolute left-[80px] top-[110px] z-20">
          <h2
            className="font-gerbil text-black font-normal"
            style={{
              fontSize: '56px',
              lineHeight: '68px',
              maxWidth: '750px',
            }}
          >
            Tomorrow should
            <br />
            be better than {"  "}
            <span className="relative inline-block">
              <img
                src={rectangle657}
                alt=""
                className="absolute inset-0 w-full h-full object-fill -z-10"
              />
              today
            </span>
          </h2>

          <p
            className="mt-6 font-satoshi text-black"
            style={{
              fontSize: '18px',
              lineHeight: '30px',
              maxWidth: '540px',
            }}
          >
            We are a team of strategists, designers communicators,
            researchers. Together, we believe that progress only
            happens when you refuse to play things safe.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <span className="font-satoshi text-[16px] font-medium">
              Read more
            </span>
            <span className="w-[90px] h-[1px] bg-black" />
          </div>
        </div>

        {/* Top Image */}
        <div className="absolute right-[120px] top-[20px] w-[420px] h-[420px]">

          {/* Red square BEHIND image */}
          <div
            className="absolute right-[-20px] top-[10px] w-[130px] h-[130px] bg-[#FF7B7B] rotate-[12deg]"
          />

          <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
            <img
              src={image348}
              alt="Business meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}