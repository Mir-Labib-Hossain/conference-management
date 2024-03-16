import { log } from "console";
import Image from "next/image";

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
    console.log(data);
  return (
    <div className="flex flex-col bg-white">
      <div className="p-4 flex gap-10">
        <Image src={src} height={140} width={140} alt="card-item" className="h-[140px]" />
        <div className="flex flex-col gap-5">
          <div className="flex">
            <p className="text-xl font-bold">{title}</p>
            {social && (
              <div className="flex gap-8">
                <Image src="/images/social-media/x-icon.svg" alt="x" width={24} height={24} />
                <Image src="/images/social-media/linkedin-icon.svg" alt="x" width={24} height={24} />
                <Image src="/images/social-media/facebook-icon.svg" alt="x" width={24} height={24} />
                <Image src="/images/social-media/dribble-icon.svg" alt="x" width={24} height={24} />
              </div>
            )}
          </div>
          <p className="text-secondary">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
