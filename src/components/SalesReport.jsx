import { useState } from "react";
import { MdChevronRight, MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaRegFileExcel, FaRegFilePdf } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Chart from "./Chart";

const SalesReport = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [medicineGroup, setMedicineGroup] = useState("");
  const [userName, setUserName] = useState("");

  const handleMedicineGroupChange = (event) => {
    setMedicineGroup(event.target.value);
  };
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };
  return (
    <>
      <div className="flex justify-between">
        <div>
          <div className="flex gap-x-2 items-baseline">
            <Link to="/reports">
              <span className="text-gray-800 text-opacity-50 text-xl font-bold ">
                Reports
              </span>
            </Link>
            <MdChevronRight />
            <span className="text-gray-800 text-xl font-bold ">
              Sales Reports
            </span>
          </div>
          <p className="text-gray-800 text-sm font-normal">
            Sales related report to the pharmacy.
          </p>
        </div>
        <button
          className="flex justify-between items-center rounded p-2 border-2 bg-white"
          onClick={toggleDropdown}
        >
          <h3>Download report</h3>
          <MdArrowDropDown className="w-5" />
        </button>
        {isDropdownOpen && (
          <div className="absolute top-40 right-8 bg-white shadow-lg p-2 w-28 rounded">
            <ul>
              <li className="flex justify-evenly items-center m-2">
                <FaRegFileExcel className="w-5" />
                <a href="">Excel</a>
              </li>
              <p className="border border-gray-200"></p>
              <li className="flex justify-evenly items-center m-2">
                <FaRegFilePdf className="w-5" />
                <a href="">PDF</a>
              </li>
            </ul>
          </div>
        )}
      </div>

      <div className="my-8 flex items-center gap-8">
        <div className="flex">
          {/* Start Date */}
          <div className="mr-4">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="startDate"
            >
              Start Date:
            </label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="Select start date"
              selectsStart
              startDate={startDate}
              endDate={endDate}
              className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="startDate"
            />
          </div>

          {/* End Date */}
          <div>
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="endDate"
            >
              End Date:
            </label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              placeholderText="Select end date"
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              className="shadow appearance-none border rounded w-40 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="endDate"
            />
          </div>
        </div>

        <div className="w-80 relative">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="medicineGroup"
          >
            Medicine Group
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border-gray-400 hover:border-gray-500 px-3 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-400"
              id="medicineGroup"
              value={medicineGroup}
              onChange={handleMedicineGroupChange}
            >
              {/* Placeholder option */}
              <option value="" disabled>
                Select Group
              </option>
              {/* Dropdown options */}
              <option value="group1">Group 1</option>
              <option value="group2">Group 2</option>
              <option value="group3">Group 3</option>
            </select>
            {/* Dropdown Icon */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <IoIosArrowDown className="text-gray-500" />
            </div>
          </div>
        </div>

        <div className="w-80 relative">
          <label
            className="block text-gray-700 text-sm mb-2"
            htmlFor="userName"
          >
            User Name
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border-gray-400 hover:border-gray-500 px-3 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-gray-400"
              id="userName"
              value={userName}
              onChange={handleUserNameChange}
            >
              {/* Placeholder option */}
              <option value="" disabled>
                Select User Name
              </option>
              {/* Dropdown options */}
              <option value="group1">Name 1</option>
              <option value="group2">Name 2</option>
              <option value="group3">Name 3</option>
            </select>
            {/* Dropdown Icon */}
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <IoIosArrowDown className="text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="border border-gray-300 w-full p-2">
          <span>Sales mode</span>
          <hr className="border-gray-300 my-2" />
          <Chart />
        </div>
        <div className="border border-gray-300 w-full p-2">
          <span>Sales mode</span>
          <hr className="border-gray-300 my-2" />
          {/* <Chart /> */}
        </div>
      </div>
    </>
  );
};

export default SalesReport;
