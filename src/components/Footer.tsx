import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-[69px] px-10 max-lg:py-10 bg-secondary flex flex-col gap-[78px] max-lg:gap-12 items-center justify-center">
      <Image src="/images/footer-logo.svg" alt="footer" className="max-lg:w-[116px] max-lg:h-8" width={175} height={48} />
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-8">
          <Image src="/images/social-media/x-icon.svg" alt="x" width={24} height={24} />
          <Image src="/images/social-media/linkedin-icon.svg" alt="x" width={24} height={24} />
          <Image src="/images/social-media/facebook-icon.svg" alt="x" width={24} height={24} />
          <Image src="/images/social-media/dribble-icon.svg" alt="x" width={24} height={24} />
        </div>
        <p className="text-center text-base font-normal text-white">&#169; {new Date().getFullYear()} Lemonhive. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
