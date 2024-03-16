import Image from "next/image";

type Props = {
  first?: boolean;
  last?: boolean;
};

const TimeStamp = ({ first, last }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`w-12 h-12 rounded-full border flex justify-center items-center ${first ? "border-primary bg-[#FFF9EB]" : "border-[#CDCDCD] bg-[#F9FAFB]"}`}>
        <Image src={`/images/conferences/${first ? "lightning-icon-active.svg" : "lightning-icon.svg"}`} alt="logo" width={24} height={24} />
      </div>
      {!last && <div className={`h-[100px] max-lg:h-[130px] w-[2px] my-2 ${first ? "bg-primary" : "bg-[#CDCDCD]"}`} />}
    </div>
  );
};

export default TimeStamp;
