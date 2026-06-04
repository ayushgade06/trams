import image348 from '../../trams/image 348.png'
import vector2517 from '../../trams/Vector 2517.png'
import rectangle657 from '../../trams/Rectangle 657.png'
import vector5 from '../../trams/Vector 5.png'

export default function Feature1() {
  return (
    <section className="relative w-full overflow-visible bg-white px-[160px] py-[80px]">
      <div className="relative mx-auto w-full max-w-[1599px] h-[600px]">
        <img
          src={vector2517}
          alt=""
          className="absolute left-[450px] top-[430px] w-[1439.87px] h-[697.6px] object-contain decorative"
        />

        <img
          src={vector5}
          alt=""
          className="absolute left-[4px] top-[184.5px] w-[371px] h-[30px] object-contain decorative"
        />

        <img
          src={rectangle657}
          alt=""
          className="absolute left-[520px] top-[200.5px] w-[217px] h-[81px] object-contain decorative"
        />

        <div className="absolute left-[0px] top-[129.5px] w-[737px]">
          <h2 className="font-gerbil text-[56px] leading-[72px] font-normal text-black max-w-[724px]">
            Tomorrow should be better than{' '}
            <span className="relative inline-flex">
              <img
                src={rectangle657}
                alt=""
                className="absolute inset-0 w-full h-full object-contain decorative"
              />
              <span className="relative">today</span>
            </span>
          </h2>

          <p className="mt-[24px] w-[715px] font-satoshi text-[24px] leading-[36px] text-black">
            We are a team of strategists, designers communicators, researchers.
            Together, we believe that progress only happens when you refuse to
            play things safe.
          </p>

          <div className="mt-[44px] flex items-center gap-[16px]">
            <span className="font-satoshi text-[20px] font-medium leading-[24px] text-black">Read more</span>
            <span className="block w-[144px] h-[1px] bg-black" />
          </div>
        </div>

        <div className="absolute right-[0px] top-[0px] w-[600px] h-[600px] rounded-full overflow-hidden">
          <img src={image348} alt="Business meeting" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  )
}
