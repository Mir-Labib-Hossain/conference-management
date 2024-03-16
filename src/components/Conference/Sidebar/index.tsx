import ConferenceLink from "./ConferenceLink";

type Props = {
  index: string;
};

const Sidebar = ({index}: Props) => {
  return (
    <div className="flex flex-col gap-8">
        
      <ConferenceLink href={`/conference/organizer?index=${index}`}>Organizer</ConferenceLink>
      <ConferenceLink href={`/conference/schedule?index=${index}`}>Schedule</ConferenceLink>
      <ConferenceLink href={`/conference/speakers?index=${index}`}>Speakers</ConferenceLink>
      <ConferenceLink href={`/conference/sponsors?index=${index}`}>Sponsors</ConferenceLink>
    </div>
  );
};

export default Sidebar;
