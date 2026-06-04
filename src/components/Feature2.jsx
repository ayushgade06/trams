import image348_1 from '../../trams/image 348 (1).png'
import polygon1 from '../../trams/Polygon 1.png'
import rect657_1 from '../../trams/Rectangle 657.png'
import vector5 from '../../trams/Vector 5.png'

export default function Feature2() {
  return (
    <section className="relative bg-white overflow-visible pb-[120px]">

      <div className="mx-auto max-w-[1600px] px-[80px]">

        <div className="grid lg:grid-cols-[520px_1fr] gap-[120px] items-center">

          {/* LEFT IMAGE */}

          <div className="relative w-[420px] h-[420px] z-0">

            {/* LEFT TRIANGLE */}
            <img
              src={polygon1}
              alt=""
              className="absolute z-0"
              style={{
                left: '-10px',
                top: '10px',
                width: '150px',
                transform: 'rotate(0deg)',
              }}
            />

            {/* BOTTOM TRIANGLE */}
            <img
              src={polygon1}
              alt=""
              className="absolute z-0"
              style={{
                right: '-50px',
                bottom: '-40px',
                width: '150px',
                transform: 'rotate(120deg)',
                zIndex: 20,
              }}
            />

            <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
              <img
                src={image348_1}
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT */}

          <div className="max-w-[650px]">

            <h2
              className="font-gerbil font-normal text-black"
              style={{
                fontSize: '56px',
                lineHeight: '68px',
              }}
            >
              <span className="relative inline-block z-20">
                <img
                  src={rect657_1}
                  alt=""
                  className="absolute inset-0 w-full h-full object-fill -z-10"
                />
                See
              </span>{' '}
              how we can
              <br />
              help you{' '}
              <span className="relative inline-block">
                progress

                <img
                  src={vector5}
                  alt=""
                  className="absolute left-0 bottom-[-15px] w-full object-contain"
                />
              </span>
            </h2>

            <p
              className="mt-6 font-satoshi text-black/80"
              style={{
                fontSize: '16px',
                lineHeight: '28px',
                maxWidth: '560px',
              }}
            >
              We add a layer of fearless insights and action that
              allows change makers to accelerate their progress in
              areas such as brand, design, digital, comms and social
              research.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="font-satoshi text-[16px] font-medium">
                Read more
              </span>
              <span className="w-[90px] h-[1px] bg-black" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}