import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  children: string;
};

const ConferenceLink = ({ children, href }: Props) => {
  const pathname = usePathname();
  const active = pathname.includes(children.toLowerCase());
  return (
    <Link href={href}>
      <div className={`p-2 ${active ? "text-white bg-primary" : "text-black bg-white border border-[##D9D9D9]"} rounded-lg flex items-center gap-11`}>
        <div className="bg-[#FFFCF6] h-14 w-14 rounded-lg flex items-center justify-center">
          <Image src="/images/conferences/drag-arrow-icon.svg" alt="arrow" height={25} width={25} />
        </div>
        <p>{children}</p>
      </div>
    </Link>
  );
};

export default ConferenceLink;
