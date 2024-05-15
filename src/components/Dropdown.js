import { useState, useEffect, useRef } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
  const divEl = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      // Checks to make sure divEl is assigned to prevent minor bugs
      if (divEl.current && !divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handler, true);

    // Cleanup function to remove listener when our Dropdown component closes.
    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []);

  return (
    <div ref={divEl} className="w-48 relative">
      <Panel
        className="flex justify-between items-center cursor-pointer bg-gray-50"
        onClick={handleClick}
      >
        <span>{"Select..."}</span>
        {icon}
      </Panel>
      {isOpen && <Panel className="absolute top-full">{renderedItems}</Panel>}
    </div>
  );
}
export default Dropdown;
