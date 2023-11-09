import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import profileImage from "../../assets/profile-image.jpeg";
import {
  MdOutlineSpaceDashboard,
  MdOutlineInventory2,
  MdOutlinePeopleOutline,
  MdNotificationsNone,
  MdOutlineMessage,
  MdOutlineHelpCenter,
  MdMoreVert,
  MdPersonOutline,
  MdOutlineLogout,
  MdOutlineArrowDropDown,
  MdChevronRight,
  MdChevronLeft,
} from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";
import { FaVirusCovid } from "react-icons/fa6";

import "../custom-scrollbar.css";
import SideBarItem from "./SideBarItem";
import Hr from "./Hr";

const SideBar = () => {
  const [subInventoryVisibility, setSubInvVisibility] = useState(false);
  const [subReportsVisibility, setSubReportsVisibility] = useState(false);

  const [sideBarVisible, setSideBarVisible] = useState(true);

  const toggleSidebar = () => {
    setSideBarVisible((prevState) => !prevState);
  };
  return (
    <div className="relative">
      <button
        className="text-white p-2 bg-gray-800 hover:bg-gray-600 rounded-full absolute top-2 right-2"
        onClick={toggleSidebar}
      >
        {sideBarVisible ? <MdChevronLeft /> : <MdChevronRight />}
      </button>
      <aside
        className={`w-64 h-screen bg-gray-800 overflow-y-auto custom-scrollbar ${
          sideBarVisible ? "translate-x-0" : "-translate-x-64"
        } transition-transform duration-300 ease-in-out`}
      >
        <div id="logo" className="flex items-center gap-4">
          <img src={logo} className="w-[42px] h-[42px] ms-[24px] my-[9px]" />
          <p className="text-white text-lg font-semibold font-poppins leading-normal ">
            Pharma One
          </p>
        </div>

        <div className="bg-slate-700">
          <div id="profile" className="flex items-center py-[30px] gap-4">
            <div className=" ms-[24px] w-[42px] h-[42px] relative">
              <img
                className=" w-[42px] h-[42px] rounded border border-zinc-500"
                src={profileImage}
              />
              <div className="w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-gray-700 absolute top-6 left-9" />
            </div>
            <div className="items-center">
              <p className=" text-white text-sm font-medium font-poppins">
                Subash
              </p>
              <p className="text-yellow-400 text-[11px] font-normal font-poppins">
                Super Admin
              </p>
            </div>
            <MdMoreVert className="ms-[40px] text-white text-xl" />
          </div>
          <Hr />
          <Link to="">
            <div className="group flex items-center gap-4 py-4 px-6 transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
              <MdOutlineSpaceDashboard className="text-white" />
              <p className="text-white text-sm font-poppins">Dashboard</p>
            </div>
          </Link>
          <SideBarItem
            dest="/inventory"
            text="Inventory"
            icon={<MdOutlineInventory2 className="text-white" />}
            chevron={subInventoryVisibility}
            chevronClick={() => setSubInvVisibility((prevState) => !prevState)}
          >
            <div className="bg-slate-900">
              <Link to="/medicineList">
                <div className="group flex items-center gap-4 py-4 px-14 transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
                  <p className="text-white text-sm font-poppins">
                    List of Medicines
                  </p>
                </div>
              </Link>
              <div className="group flex items-center gap-4 py-4 px-14 transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
                <p className="text-white text-sm font-poppins">
                  Medicine Groups
                </p>
              </div>
            </div>
          </SideBarItem>
          <SideBarItem
            dest="#"
            text="Reports"
            chevron={subReportsVisibility}
            icon={<TbReportAnalytics className="text-white" />}
            chevronClick={() =>
              setSubReportsVisibility((prevState) => !prevState)
            }
          >
            <div className="bg-slate-900">
              <Link to="#">
                <div className="place-content-center py-4 px-14 transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
                  <p className="text-white text-sm font-poppins">
                    Sales Report
                  </p>
                </div>
              </Link>
              <Link to="#">
                <div className="self-center py-4 px-14 transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
                  <p className="text-white text-sm font-poppins">
                    Payment Report
                  </p>
                </div>
              </Link>
            </div>
          </SideBarItem>
          <SideBarItem
            dest="#"
            text="Configurations"
            icon={<VscSettings className="text-white" />}
          />
          <Hr />
          <SideBarItem
            dest="#"
            text="Contacts"
            icon={<MdNotificationsNone className="text-white" />}
          />
          <SideBarItem
            dest="#"
            text="Notifications"
            icon={<MdNotificationsNone className="text-white" />}
          />
          <div className="group flex items-center gap-4 py-4 px-6 transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
            <MdOutlineMessage className="text-white" />
            <p className="text-white text-sm font-poppins">
              Chat with Visitors
            </p>
          </div>
          <div className="h-[0px] border border-gray-600" />
          <Link to="/appSettings">
            <div className="group flex items-center gap-4 py-4 px-6 transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
              <MdOutlinePeopleOutline className="text-white" />
              <p className="text-white text-sm font-poppins">
                Application Settings
              </p>
            </div>
          </Link>
          <Link to="/covid19">
            <div className="group flex items-center gap-4 py-4 px-6 transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
              <FaVirusCovid className="text-white" />
              <p className="text-white text-sm font-poppins">Covid 19</p>
            </div>
          </Link>
          <Link to="/help">
            <div className="group flex items-center gap-4 py-4 px-6 transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
              <MdOutlineHelpCenter className="text-white" />
              <p className="text-white text-sm font-poppins">
                Get Technical Help
              </p>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-between mx-[24px] h-[34px] bg-gray-800">
          <p className="text-white text-opacity-70 text-[10px] font-poppins">
            Powered by Subash © 2022
          </p>
          <p className=" text-white text-opacity-70 text-[10px] font-poppins">
            v 1.1.2
          </p>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
