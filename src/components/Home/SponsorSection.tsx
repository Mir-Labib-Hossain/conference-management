import Image from "next/image";

const SponsorSection = () => {
  return (
    <div className="bg-[#F9FAFB] flex flex-col items-center gap-8  py-[100px] max-lg:py-14 px-[26px]">
      <p className="text-5xl max-lg:text-xl font-bold text-center">Our Sponsor</p>
      <p className="text-base max-lg:text-xs font-medium">🥇 Gold Sponsor</p>
      <div className="flex justify-center flex-wrap gap-14">
        <SponsorImg src="/images/sponsor/sponsor-1.svg" />
        <SponsorImg src="/images/sponsor/sponsor-2.svg" />
      </div>

      <p className="text-base max-lg:text-xs font-medium">🥈Silver Sponsors</p>
      <div className="flex justify-center flex-wrap gap-14">
        <SponsorImg src="/images/sponsor/sponsor-3.svg" />
        <SponsorImg src="/images/sponsor/sponsor-4.svg" />
        <SponsorImg src="/images/sponsor/sponsor-5.svg" />
      </div>

      <p className="text-base max-lg:text-xs font-medium">🥉Bronze Sponsors</p>
      <div className="flex justify-center flex-wrap gap-14">
        <SponsorImg src="/images/sponsor/sponsor-6.svg" />
        <SponsorImg src="/images/sponsor/sponsor-7.svg" />
        <SponsorImg src="/images/sponsor/sponsor-8.svg" />
        <SponsorImg src="/images/sponsor/sponsor-9.svg" />
      </div>
    </div>
  );
};

export default SponsorSection;

const SponsorImg = ({ src }: { src: string }) => {
  return <Image src={src} alt="sponsor" height={72} width={300} className="max-lg:h-8" style={{ width: "auto" }} />;
};
