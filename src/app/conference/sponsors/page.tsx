import CardItem from "@/components/Conference/CardItem";

const Sponsors = () => {
  return (
    <>
      {SponsorsList.map((item) => (
        <CardItem key={item.title} data={item} />
      ))}
    </>
  );
};

export default Sponsors;

const SponsorsList = [
  {
    src: "/images/conferences/sponsors-1.png",
    title: "Louis Vuitton",
    description: "Lorem ipsum dolor sit amet, con sec tetur ad.",
  },
  {
    src: "/images/conferences/sponsors-2.png",
    title: "MasterCard",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
  },
  {
    src: "/images/conferences/sponsors-3.png",
    title: "The Walt Disney Company",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et condimentum lectus in vel pellentesque arcu non odio. Ut dis eu dolor ac tellus vitae ut.",
  },
];
