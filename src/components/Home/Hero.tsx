import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="relative max-lg:hidden">
        <div className="absolute rotate-[270deg] bottom-6 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm">&#9664; Scroll Down</div>
        <div className="grid grid-cols-12 gap-9 h-screen items-end p-3">
          <div className="col-span-7">
            <div className="flex flex-col items-end">
              <div className="relative">
                <Image className="absolute -top-14 -left-14" src="/images/hero/hero-crown.svg" width={85} height={82} alt="hero" />
                <p className="text-secondary text-[140px] font-bold leading-[120px]">React</p>
              </div>
              <p className="text-secondary text-[140px] font-bold leading-[120px]">Conference</p>
              <div className="flex gap-[70px] mt-11">
                <div className="relative">
                  <Image className="z-30 relative" src="/images/hero/hero-small.png" width={330} height={420} alt="hero" />
                  <Image className="z-10 absolute -bottom-[80px] -right-[80px]" src="/images/hero/hero-small-overlap.svg" width={196} height={186} alt="hero" />
                </div>
                <div className="flex flex-col">
                  <p className="w-[515px] text-lg mb-16">Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum.</p>
                  <button className="w-fit py-5 px-20 bg-primary rounded-[30px]">Buy Tickets &#8599;</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 relative">
            <Image src="/images/hero/hero-large.png" width={550} height={560} alt="hero" />
            <Image className="absolute -bottom-[60px] -left-10px]" src="/images/hero/hero-large-overlap.svg" width={131} height={131} alt="hero" />
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="col-span-7">
          <div className="flex flex-col items-end">
            <div className="relative">
              <Image className="absolute -top-14 -left-14" src="/images/hero/hero-crown.svg" width={41} height={41} alt="hero" />
              <p className="text-secondary text-[48px] font-bold leading-[40px]">React</p>
            </div>
            <p className="text-secondary text-[48px] font-bold leading-[40px]">Conference</p>
            <div className="flex gap-[70px] mt-11">
              <div className="relative">
                <Image className="z-30 relative" src="/images/hero/hero-small.png" width={330} height={420} alt="hero" />
                <Image className="z-10 absolute -bottom-[80px] -right-[80px]" src="/images/hero/hero-small-overlap.svg" width={196} height={186} alt="hero" />
              </div>
              <div className="flex flex-col">
                <p className="w-[515px] text-lg mb-16">Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id fermentum.In quis diam turpis quam id fermentum.</p>
                <button className="w-fit py-5 px-20 bg-primary rounded-[30px]">Buy Tickets &#8599;</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5 relative">
          <Image src="/images/hero/hero-large.png" width={550} height={560} alt="hero" />
          <Image className="absolute -bottom-[60px] -left-10px]" src="/images/hero/hero-large-overlap.svg" width={131} height={131} alt="hero" />
        </div>
      </div>
    </>
  );
};

export default Hero;
