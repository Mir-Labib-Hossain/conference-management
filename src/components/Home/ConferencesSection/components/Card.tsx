import Image from "next/image";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  index: number;
};

const Card = ({ children, index }: Props) => {
  return (
    <Link href={`/conference/organizer/?index=${index}`}>
      <div className="cursor-pointer shadow-md hover:shadow-xl overflow-hidden rounded-lg bg-[#F9FAFB]">
        <div className="h-1 w-full bg-[#CDCDCD]" />
        
        <div className="px-4 py-7 max-lg:py-4 flex items-start gap-4">
          <Image className="mt-[6px]" src="/images/conferences/conference-list-icon.svg" alt="logo" width={16} height={16} />
          <div className="flex flex-col gap-2">{children}</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
