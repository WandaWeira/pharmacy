import { Link } from "react-router-dom";

import { HiChevronDown, HiChevronUp } from "react-icons/hi";

const SideBarItem = ({ dest, text, icon, chevron, children, chevronClick }) => {
  const chevronStyle = {
    marginLeft: "auto", // Aligns the chevron to the right
  };

  return (
    <Link to={dest}>
      <div className="group flex items-center gap-4 py-4 px-6  transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
        {icon}
        <p className="text-white text-sm font-poppins">{text}</p>
        {chevron ? (
          <HiChevronUp
            onClick={chevronClick}
            className="text-white text-xl"
            style={chevronStyle}
          />
        ) : null}
        {chevron === false ? (
          <HiChevronDown
            onClick={chevronClick}
            className="text-white text-xl"
            style={chevronStyle}
          />
        ) : null}
      </div>
      {chevron && children}
    </Link>
  );
};

export default SideBarItem;
