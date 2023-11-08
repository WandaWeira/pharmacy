import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import profileImage from "../assets/profile-image.jpeg";
import { VscKebabVertical } from "react-icons/vsc";
import {
  MdOutlineSpaceDashboard,
  MdOutlineInventory2,
  MdOutlinePeopleOutline,
  MdNotificationsNone,
  MdOutlineMessage,
  MdOutlineHelpCenter,
} from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";
import { FaVirusCovid } from "react-icons/fa6";
const SideBar = () => {
  return (
    <aside className="w-64 h-screen bg-gray-800">
      <div id="logo" className="flex items-center gap-4">
        <img src={logo} className="w-[42px] h-[42px] ms-[24px] my-[9px]" />
        <p className="text-white text-lg font-semibold font-poppins leading-normal ">
          Pharma One
        </p>
      </div>

      <div className="bg-slate-700 h-full">
        <div id="profile" className="flex items-center py-[30px] gap-4">
          <div className=" ms-[24px] w-[42px] h-[42px]">
            <img
              className="absolute w-[42px] h-[42px] origin-top-left rounded border border-zinc-500"
              src={profileImage}
            />
            <div className="w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-gray-700 relative top-5 left-9" />
          </div>
          <div className="items-center">
            <p className=" text-white text-sm font-medium font-poppins">
              Subash
            </p>
            <p className="text-yellow-400 text-[11px] font-normal font-poppins">
              Super Admin
            </p>
          </div>
          <div>
            <VscKebabVertical className="ms-[40px] text-white text-xl" />
          </div>
        </div>
        <div className="h-[0px] border border-gray-600" />
        <Link to="/">
          <div className="group flex items-center gap-4 py-4 px-6 transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
            <MdOutlineSpaceDashboard className="text-white" />
            <p className="text-white text-sm font-poppins">Dashboard</p>
          </div>
        </Link>
        <Link to="/inventory">
          <div className="group flex items-center gap-4 py-4 px-6 transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
            <MdOutlineInventory2 className="text-white" />
            <p className="text-white text-sm font-poppins">Inventory</p>
          </div>
        </Link>
        <Link to="/reports">
          <div className="group flex items-center gap-4 py-4 px-6 transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
            <TbReportAnalytics className="text-white" />
            <p className="text-white text-sm font-poppins">Reports</p>
          </div>
        </Link>
        <Link to="/configurations">
          <div className="group flex items-center gap-4 py-4 px-6 transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
            <VscSettings className="text-white" />
            <p className="text-white text-sm font-poppins">Configurations</p>
          </div>
        </Link>

        <div className="h-[0px] border border-gray-600" />
        <Link to="/contactManagement">
          <div className="group flex items-center gap-4 py-4 px-6 transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
            <MdOutlinePeopleOutline className="text-white" />
            <p className="text-white text-sm font-poppins">
              Contact Management
            </p>
          </div>
        </Link>

        <Link to="/contactManagement">
          <div className="group flex items-center gap-4 py-4 px-6 transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
            <MdNotificationsNone className="text-white" />
            <p className="text-white text-sm font-poppins">Notifications</p>
          </div>
        </Link>

        <Link to="/chat">
          <div className="group flex items-center gap-4 py-4 px-6 transition duration-300 ease-in-out hover:bg-teal-400 active:bg-teal-400 ">
            <MdOutlineMessage className="text-white" />
            <p className="text-white text-sm font-poppins">
              Chat with Visitors
            </p>
          </div>
        </Link>

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
    </aside>
  );
};

export default SideBar;
