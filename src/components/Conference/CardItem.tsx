import Image from "next/image";

type Props = {
  data: {
    title: string;
    src: string;
    description: string;
    icons?: boolean;
  };
};

const CardItem = ({ data }: Props) => {
  const { description, src, title, icons } = data;
  return (
    <div className="flex flex-col bg-white">
      <div className="p-4 flex gap-10">
        <Image src={src} height={140} width={140} alt="card-item" className="h-[140px]" />
        <div className="flex flex-col gap-5">
          <p className="text-xl font-bold">{title}</p>
          <p className="text-secondary">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
