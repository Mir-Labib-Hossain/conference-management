import Image from "next/image";
import Link from "next/link";

type Props = {
  data: {
    title: string;
    src: string;
    description: string;
    social?: {
      x: string;
      linkedin: string;
      dribble: string;
      github: string;
    };
  };
};

const CardItem = ({ data }: Props) => {
  const { description, src, title, social } = data;
  console.log("CardItem", data);
  return (
    <div className="flex flex-col bg-white rounded-lg">
      <div className="p-4 flex gap-10 max-lg:gap-3">
        <Image src={src} height={140} width={140} alt="card-item" className="max-lg:h-[80px] max-lg:w-[80px]" />
        <div className="flex flex-col gap-5 max-lg:gap-2 w-full">
          <div className="flex justify-between max-lg:flex-col max-lg:gap-2">
            <p className="text-xl font-bold max-lg:text-base">{title}</p>
            {social && (
              <div className="flex gap-4 invert opacity-15">
                <Link href={social.x}>
                  <Image src="/images/social-media/x-icon.svg" alt="x" width={20} height={20} />
                </Link>
                <Link href={social.linkedin}>
                  <Image src="/images/social-media/linkedin-icon.svg" alt="x" width={20} height={20} />
                </Link>
                <Link href={social.dribble}>
                  <Image src="/images/social-media/dribble-icon.svg" alt="x" width={20} height={20} />
                </Link>
                <Link href={social.github}>
                  <Image src="/images/social-media/github-icon.svg" alt="x" width={20} height={20} />
                </Link>
              </div>
            )}
          </div>
          <p className="text-secondary max-lg:text-xs">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
