import CardItem from "@/components/Conference/CardItem";

const Speakers = () => {
  return (
    <>
      {SpeakersList.map((item) => (
        <CardItem key={item.title} data={item} />
      ))}
    </>
  );
};

export default Speakers;

const SpeakersList = [
  {
    src: "/images/conferences/speakers-1.png",
    title: "Ronald Richards",
    description: "Lorem ipsum dolor sit amet, con sec tetur ad.",
    social: {
      x: "#",
      linkedin: "#",
      dribble: "#",
      github: "#",
    },
  },
  {
    src: "/images/conferences/speakers-2.png",
    title: "Jenny Wilson",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
    social: {
      x: "#",
      linkedin: "#",
      dribble: "#",
      github: "#",
    },
  },
  {
    src: "/images/conferences/speakers-3.png",
    title: "Cameron Williamson",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
    social: {
      x: "#",
      linkedin: "#",
      dribble: "#",
      github: "#",
    },
  },
];
