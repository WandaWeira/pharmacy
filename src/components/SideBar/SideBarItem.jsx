import { Link } from "react-router-dom";

import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const SideBarItem = ({ dest, text, icon, chevron, children, chevronClick }) => {
  return (
    <Link to={dest}>
      <div className="group flex items-center gap-4 py-4 px-6  transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
        {icon}
        <p className="text-white text-sm font-poppins">{text}</p>
        {!chevron ? (
          <HiChevronDown
            onClick={chevronClick}
            className=" ms-[70px] text-white text-xl"
          />
        ) : (
          <HiChevronUp
            onClick={chevronClick}
            className=" ms-[70px] text-white text-xl"
          />
        )}
      </div>
      {chevron && children}
    </Link>
  );
};

export default SideBarItem;
