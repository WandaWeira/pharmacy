import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import {FaRegFileExcel, FaRegFilePdf} from 'react-icons/fa'
import CardSmall from "./CardSmall";
import CardLarge from "./CardLarge";

const Dashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="flex justify-between relative">
        <div className="">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <h3>A quick data overview of the inventory</h3>
        </div>
        <button
          className="flex justify-between items-center rounded p-2 border-2"
          onClick={toggleDropdown}
        >
          <h3>Download report</h3>
          <MdArrowDropDown className="w-5" />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-10 right-0 bg-white shadow-lg p-2 w-28 rounded">
            <ul>
              <li className="flex justify-evenly items-center m-2">
                <FaRegFileExcel className="w-5"/>
                <a href="">Excel</a>
              </li>
              <p className="border border-gray-200"></p>
              <li className="flex justify-evenly items-center m-2">
                <FaRegFilePdf className="w-5"/>
                <a href="">PDF</a>
              </li>
            </ul>
          </div>
        )}
      </div>
      <CardSmall />
      <CardLarge />
    </>
  );
};

export default Dashboard;
