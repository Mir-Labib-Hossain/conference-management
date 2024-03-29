import Image from "next/image";
import Link from "next/link";

const Topbar = () => {
  return (
    <div className="max-w-[1320px] mx-auto mt-10 max-lg:mt-11 px-7 flex items-center justify-between">
      <Link href="/">
        <Image src="/images/navbar-logo.svg" alt="topbar" className="max-lg:w-[58px] max-lg:h-[16px]" width={117} height={32} />
      </Link>
      <div className="flex gap-14 max-lg:hidden">
        <Link href="#" className="hover:text-primary duration-300">
          About Us
        </Link>
        <Link href="#" className="hover:text-primary duration-300">
          What We do
        </Link>
        <Link href="#" className="hover:text-primary duration-300">
          Our work
        </Link>
        <Link href="#" className="hover:text-primary duration-300">
          Blog
        </Link>
        <Link href="#" className="hover:text-primary duration-300">
          Say hi
        </Link>
      </div>
      <Image src="/images/navbar-hamburger.svg" alt="logo" width={24} height={24} />
    </div>
  );
};

export default Topbar;
