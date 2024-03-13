import Image from "next/image";

const Footer = () => {
  return (
    <div className="h-[336px] bg-secondary flex flex-col gap-[78px] items-center justify-center">
      <Image src="/images/footer-logo.svg" alt="footer" width={117} height={32} />
      <div className="flex flex-col items-center gap-6">
        <div className="flex gap-8">
          <Image src="/images/social-media/x-icon.svg" alt="x" width={24} height={24} />
          <Image src="/images/social-media/linkedin-icon.svg" alt="x" width={24} height={24} />
          <Image src="/images/social-media/facebook-icon.svg" alt="x" width={24} height={24} />
          <Image src="/images/social-media/dribble-icon.svg" alt="x" width={24} height={24} />
        </div>
        <p className="text-base font-normal text-white">&#169; {new Date().getFullYear()} Lemonhive. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
