import { MdChevronRight, MdSearch, MdAdd } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import TableMedicinesGroups from "./Tables/TableMedicineGroup";

import data from "../data/data.js";
import { useState } from "react";

const MedicineGroups = () => {
  const navigateTo = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredMedicines = data.filter((item) =>
    item.groupName.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              Medicine Groups ({filteredMedicines.length})
            </span>
          </div>
          <p className="text-gray-800 text-sm font-normal">
            List of medicines groups.
          </p>
        </div>
        <button
          onClick={() => {
            navigateTo("/addMedicineGroup");
          }}
          className="flex justify-between items-center rounded-lg p-2 border-2 text-white bg-red-500 hover:bg-red-600"
        >
          <MdAdd className="w-5" />
          <h3>Add New Group</h3>
        </button>
      </div>
      <div>
        <div className="my-2 flex justify-between">
          <div className="relative">
            <input
              type="text"
              placeholder="Search medicine groups..."
              className="py-2 pl-8 pr-4 w-[340px] h-[38px] rounded border-2 bg-slate-200 font-normal border-gray-200 focus:outline-none focus:border-gray-300"
              onChange={({ target }) => setSearchTerm(target.value)}
            />
            <div className="absolute right-3 top-3">
              <MdSearch className="text-gray-400" />
            </div>
          </div>
        </div>
      </div>
      <TableMedicinesGroups data={filteredMedicines} />
    </>
  );
};

export default MedicineGroups;
