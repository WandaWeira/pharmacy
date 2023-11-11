import React from "react";
import { MdAdd } from "react-icons/md";
import data from "../data/data.js";
import { MdChevronRight, MdDeleteOutline } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import TableIcons from "./Tables/TableIcons.jsx";

const MedicineGroupsDetails = () => {
  const { itemId } = useParams();
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
            <Link to="/medicineGroups">
              <span className="text-gray-800 text-opacity-50 text-xl font-bold ">
                Medicine Groups ({data.length})
              </span>
            </Link>
            <MdChevronRight />
            <span className="text-gray-800 text-xl font-bold ">{itemId}</span>
          </div>
          <p className="text-gray-800 text-sm font-normal">
            Detailed list of a medicine groups
          </p>
        </div>
        <button className="flex justify-between items-center rounded-lg p-2 border-2 text-white bg-red-500">
          <MdAdd className="w-5" />
          <h3>Add Medicine</h3>
        </button>
      </div>
      <div className="w-80 my-1 relative">
        <input
          type="text"
          placeholder="Search for medicine details..."
          className="py-2 pl-8 pr-4 w-full rounded border-2 bg-slate-200 font-normal border-gray-200 focus:outline-none focus:border-gray-300"
        />
        <div className="absolute right-3 top-4">
          <FaSearch className="text-gray-400" />
        </div>
      </div>
      <TableIcons />
      <div className="rounded border border-red-500 w-44 text-red-500 flex items-center p-2 my-8 text-sm">
        <MdDeleteOutline className="w-14"/>
        <button className="uppercase h-46 w-full">Delete Group</button>
      </div>
    </>
  );
};

export default MedicineGroupsDetails;
