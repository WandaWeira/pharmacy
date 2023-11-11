import React, { useState } from "react";
import { BsFunnel } from "react-icons/bs";
import { MdAdd, MdChevronRight, MdSearch } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Table from "./Tables/Table";

import data from "../data/data.js";

const MedicineList = () => {
  const navigateTo = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("");

  let filteredMedicines = data.filter(
    (medicine) =>
      medicine.medicineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      medicine.groupName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  filteredMedicines = filterTerm
    ? data.filter(
        (medicine) =>
          medicine.groupName.toLowerCase() === filterTerm.toLowerCase()
      )
    : filteredMedicines;

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
              List of Medicines ({filteredMedicines.length})
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
              onChange={({ target }) => {
                setSearchTerm(target.value);
                setFilterTerm("");
              }}
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
              onChange={({ target }) => {
                setFilterTerm(target.value);
                setSearchTerm("");
              }}
            >
              <option value="">- Select Group -</option>
              {data.map((item, index) => (
                <option key={index} value={item.groupName}>
                  {item.groupName}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <Table data={filteredMedicines} />
    </>
  );
};

export default MedicineList;
