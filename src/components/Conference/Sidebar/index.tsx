import DraggableList from "react-draggable-lists";

import ConferenceLink from "./ConferenceLink";
type Props = {
  index: string;
};

const Sidebar = ({ index }: Props) => {
  const list = [
    { url: `/conference/organizer?index=${index}`, title: "Organizer" },
    { url: `/conference/schedule?index=${index}`, title: "Schedule" },
    { url: `/conference/speakers?index=${index}`, title: "Speakers" },
    { url: `/conference/sponsors?index=${index}`, title: "Sponsors" },
  ];

  return (
    <div className="flex flex-col gap-8 max-lg:w-[300px] overflow-x-hidden">
      <DraggableList width={360} height={86} rowSize={1}>
        {list.map(({ url, title }, index) => (
          <>
            <ConferenceLink key={index} href={url}>
              {title}
            </ConferenceLink>
          </>
        ))}
      </DraggableList>
    </div>
  );
};
export default Sidebar;
