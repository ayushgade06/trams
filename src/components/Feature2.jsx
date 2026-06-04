// Feature Section 2 — "See how we can help you progress"
import image348_1 from '../../trams/image 348 (1).png'
import polygon1 from '../../trams/Polygon 1.png'
import vector2516 from '../../trams/Vector 2516.png'
import rect657_1 from '../../trams/Rectangle 657.png'
import vector5 from '../../trams/Vector 5.png' // Reused yellow scribble asset

export default function Feature2() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-[100px]">
      <div className="mx-auto max-w-[1599px] px-[80px]">
        <div className="grid gap-[88px] lg:grid-cols-[1fr_1.1fr] items-center relative z-20">
          
          {/* Left Side Image Box with Overlapping Elements */}
          <div className="relative flex justify-center items-center justify-self-start">
            {/* Circular Image Frame Mask */}
            <div className="relative w-[480px] h-[480px] rounded-full overflow-hidden z-20 shadow-sm border border-neutral-100">
              <img
                src={image348_1}
                alt="Team working"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Triangle Accent (Left Mid) */}
            <img
              src={polygon1}
              alt=""
              className="absolute -left-[35px] bottom-[230px] w-[65px] object-contain z-30 transform rotate-[-15deg]"
            />
            
            {/* Floating Large Triangle Accent (Bottom Right) */}
            <img
              src={polygon1}
              alt=""
              className="absolute right-[25px] -bottom-[35px] w-[140px] object-contain z-30 transform rotate-[35deg]"
            />
          </div>

          {/* Right Side Content Box */}
          <div className="max-w-[680px] lg:pl-[40px]">
            <h2 className="font-gerbil text-[56px] leading-[72px] font-normal text-black mb-[24px] tracking-tight">
              <span className="relative inline-flex items-center justify-center px-5 py-1 mr-1 align-baseline transform translate-y-1">
                <img
                  src={rect657_1}
                  alt=""
                  className="absolute inset-0 w-full h-full object-fill -z-10"
                />
                <span className="relative z-10">See</span>
              </span>{' '}
              how we can
              <br />
              help you{' '}
              <span className="relative inline-block">
                progress
                <img
                  src={vector5}
                  alt=""
                  className="absolute left-0 bottom-[6px] w-full pointer-events-none object-contain"
                />
              </span>
            </h2>
            <p className="font-satoshi text-[16px] leading-[26px] text-black/80 mb-[32px] max-w-[560px]">
              We add a layer of fearless insights and action that allows change
              makers to accelerate their progress in areas such as brand, design,
              digital, comms and social research.
            </p>
            <a href="#" className="group inline-flex items-center font-satoshi text-[16px] font-medium text-black transition-all">
              <span>Read more</span>
              <span className="ml-2 block w-[80px] h-[1px] bg-black group-hover:w-[100px] transition-all duration-300"></span>
            </a>
          </div>

        </div>
      </div>

      {/* Red Wave background decoration tailored for Section 2 */}
      <img
        src={vector2516}
        alt=""
        className="absolute right-0 top-[-180px] w-[65%] max-w-[900px] z-10 pointer-events-none object-contain opacity-90"
      />
    </section>
  )
}