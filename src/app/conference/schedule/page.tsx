const Schedule = () => {
  return (
    <>
      {ScheduleList.map((item, index) => (
        <div key={index} className="bg-white px-10 py-6 flex flex-col gap-5">
          <div className="flex justify-between items-start">
            <p className="text-xl font-bold max-lg:text-base">{item.date}</p>
            <p className="text-[#0A142F] max-lg:xs">{item.day}</p>
          </div>
          <div className="flex flex-col gap-4 text-[#0A142F] max-lg:text-sm">
            {item.events.map(({ header, description }, index) => (
              <div key={header + "" + index}>
                <p>{header}</p>
                <ul className="list-disc list-inside p-0">
                  <li>{description}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Schedule;

const ScheduleList = [
  {
    date: "February 11, 2014",
    day: "Wednesday",
    events: [
      { header: "Duration : 05:00-06:00", description: "Registration" },
      { header: "Duration : 06:00-13:30", description: "Design systems for beginners" },
      { header: "Duration : 09:00-10:00", description: "Lunch" },
      { header: "Duration : 11:30-12:00", description: "Break" },
    ],
  },
  {
    date: "October 31, 2017",
    day: "Wednesday",
    events: [
      { header: "Duration : 05:00-06:00", description: "Registration" },
      { header: "Duration : 06:00-13:30", description: "Design systems for beginners" },
      { header: "Duration : 09:00-10:00", description: "Lunch" },
      { header: "Duration : 11:30-12:00", description: "Break" },
    ],
  },
];
