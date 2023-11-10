import React from "react";
import { FaSearch } from "react-icons/fa";
import { BsFunnel } from "react-icons/bs";
import { MdAdd, MdChevronRight, MdSearch } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Table from "./Table";

const MedicineList = () => {
  const navigateTo = useNavigate();

  return (
    <>
      <div className="flex justify-between">
        <div>
          <div className="flex gap-x-2 items-baseline">
            <Link to="/inventory">
              <span className="text-gray-800 text-opacity-50 text-xl font-bold ">
                Inventory
              </span>
            </Link>
            <MdChevronRight />
            <span className="text-gray-800 text-xl font-bold ">
              List of Medicines (298)
            </span>
          </div>
          <p className="text-gray-800 text-sm font-normal">
            List of medicines available for sales.
          </p>
        </div>
        <button
          onClick={() => {
            navigateTo("/addNewMedicine");
          }}
          className="flex justify-between items-center rounded-lg p-2 border-2 text-white bg-red-500 hover:bg-red-600"
        >
          <MdAdd className="w-5" />
          <h3>Add New Item</h3>
        </button>
      </div>
      <div>
        <div className="my-2 flex justify-between">
          <div className="relative">
            <input
              type="text"
              placeholder="Search medicine inventory..."
              className="py-2 pl-8 pr-4 w-[340px] h-[38px] rounded border-2 bg-slate-200 font-normal border-gray-200 focus:outline-none focus:border-gray-300"
            />
            <div className="absolute right-3 top-3">
              <MdSearch className="text-gray-400" />
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <BsFunnel />
            <select
              type="input"
              className="w-[217px] h-[38px] focus:outline-none bg-white rounded border border-gray-800 border-opacity-30"
            >
              <option value="">- Select Group -</option>
              <option value=""></option>
            </select>
          </div>
        </div>
      </div>
      <Table />
    </>
  );
};

export default MedicineList;
