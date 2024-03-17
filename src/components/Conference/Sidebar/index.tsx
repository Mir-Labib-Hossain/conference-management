import { useState } from "react";
import ConferenceLink from "./ConferenceLink";
type Props = {
  index: string;
};

const Sidebar = ({ index }: Props) => {
  const [list, setList] = useState([
    { id: 0, url: `/conference/organizer?index=${index}`, title: "Organizer" },
    { id: 1, url: `/conference/schedule?index=${index}`, title: "Schedule" },
    { id: 2, url: `/conference/speakers?index=${index}`, title: "Speakers" },
    { id: 3, url: `/conference/sponsors?index=${index}`, title: "Sponsors" },
  ]);

  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
    setDraggedItem(id);
  };

  const handleDragOver = (e, id) => {
    e.preventDefault();
    const draggedOverItem = list.find((task) => task.id === id);
    if (draggedItem === draggedOverItem) {
      return;
    }
    let items = list.filter((task) => task.id !== draggedItem);
    let index = list.indexOf(draggedOverItem);
    items.splice(
      index,
      0,
      list.find((task) => task.id === draggedItem)
    );
    setList(items);
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  return (
    <div className="flex flex-col gap-8">
      {list.map(({ id, url, title }) => (
        <div key={id} className="task transition-transform duration-500 ease-in-out" draggable onDragStart={(e) => handleDragStart(e, id)} onDragOver={(e) => handleDragOver(e, id)} onDragEnd={handleDragEnd}>
          <ConferenceLink key={url} href={url}>
            {title}
          </ConferenceLink>
        </div>
      ))}
    </div>
  );
};export default Sidebar;
