import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    const handleClick = (newIndex) => {
      setExpandedIndex((curExpandedIndex) => {
        if (curExpandedIndex === newIndex) {
          return -1;
        } else {
          return newIndex;
        }
      });
    };

    return (
      <div key={item.id}>
        <div
          className="header flex p-3 border-b justify-between font-bold items-center cursor-pointer bg-gray-50"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        <div>
          {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>
      </div>
    );
  });
  return (
    <div className="rounded border-t border-b border-l border-r">
      {renderedItems}
    </div>
  );
}

export default Accordion;
