import CardItem from "@/components/Conference/CardItem";

type Props = {};

const Organizer = (props: Props) => {
  return (
    <>
      {OrganizerList.map((item) => (
        <CardItem key={item.title} data={item} />
      ))}
    </>
  );
};

export default Organizer;

const OrganizerList = [
  {
    src: "/images/conferences/organizer-1.png",
    title: "Siddhartha",
    description: "Lorem ipsum dolor sit amet, con sec tetur ad.",
  },
  {
    src: "/images/conferences/organizer-2.png",
    title: "Candide",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
  },
  {
    src: "/images/conferences/organizer-3.png",
    title: "The Little Prince",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
  },
];
