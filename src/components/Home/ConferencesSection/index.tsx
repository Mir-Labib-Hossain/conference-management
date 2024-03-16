import Card from "./components/Card";
import TimeStamp from "./components/TimeStamp";

const ConferencesSection = () => {
  return (
    <div id="conference" className="flex flex-col items-center py-24 max-lg:py-10 px-6">
      <p className="text-5xl max-lg:text-2xl font-bold mb-10">Conferences</p>
      <div className="flex flex-col w-full">
        {ConferenceList.map(({ date, title, description }, index) => (
          <div key={title} className="flex justify-center items-start gap-10 max-lg:gap-5">
            <div className={`${index % 2 === 0 ? "order-1" : "order-3"} max-lg:order-2 w-full max-w-[480px]`}>
              <p className="lg:hidden mb-3 w-full max-w-[480px] text-[#617187] text-sm font-normal">{date}</p>
              <Card index={index}>
                <p className="text-lg font-medium">{title}</p>
                <p className="text-sm text-[#617187]">{description}</p>
              </Card>
            </div>
            <div className="order-2 max-lg:order-1">
              <TimeStamp first={index === 0} last={index === ConferenceList.length - 1} />
            </div>
            <p className={`${index % 2 === 0 ? "order-3" : "order-1 text-right"} max-lg:hidden w-full max-w-[480px] text-[#617187] text-sm font-normal`}>{date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConferencesSection;

export const ConferenceList = [
  {
    title: "Freezing Edge 2023",
    description: "The edge isn't bleeding, it's freezing!",
    date: "02 September, 2023",
  },
  {
    title: "Design systems for beginners",
    description: "The workshop will provide you with all the basics",
    date: "02 September, 2023",
  },
  {
    title: "Web Components - Write once & run ",
    description: "The edge isn't bleeding, it's freezing!",
    date: "02 September, 2023",
  },
  {
    title: "Accessibility testing for developers",
    description: "The workshop is split into several modules.",
    date: "03 September, 2023",
  },
  {
    title: "The weird things about React",
    description: "Conditional rendering issues in JSX, forwardRef",
    date: "03 September, 2023",
  },
];
