"use client";
import Sidebar from "@/components/Conference/Sidebar";
import { ConferenceList } from "@/components/Home/ConferencesSection";
import { useSearchParams } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const Conference = ({ children }: Props) => {
  const searchParams = useSearchParams();

  const index = searchParams.get("index") || "";
  const { description, title } = ConferenceList[Number(index)];

  return (
    <div className="max-w-[1320px] mx-auto my-24 max-lg:my-12 px-7">
      <p className="text-secondary text-5xl max-lg:text-2xl font-bold">{title}</p>
      <p className="text-[#0A142F] text-xl max-lg:text-base opacity-50 mt-4 mb-[52px] max-lg:mb-10">{description}</p>
      <div className="grid grid-cols-12 gap-12">
        <div className="col-span-4">
          <Sidebar index={index} />
        </div>
        <div className="col-span-8 p-[52px] rounded-lg bg-[#F9FAFB] flex flex-col gap-6">{children}</div>
      </div>
    </div>
  );
};

export default Conference;
