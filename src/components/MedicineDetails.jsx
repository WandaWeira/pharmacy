import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdChevronRight, MdDeleteOutline } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import CardDetails from "./CardDetails";
import CardLarge from "./CardLarge";

const MedicineDetails = () => {
  const { itemId } = useParams();
  // Fetch medicine details based on itemId

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
            <Link to="/medicineList">
              <span className="text-gray-800 text-opacity-50 text-xl font-bold ">
                List of Medicines (298)
              </span>
            </Link>
            <MdChevronRight />
            <span className="text-gray-800 text-xl font-bold ">{itemId}</span>
          </div>
          <p className="text-gray-800 text-sm font-normal">
            List of medicines available for sales.
          </p>
        </div>
        <button className="flex justify-between items-center rounded-lg p-2 border-2 text-white bg-blue-500">
          <BiEdit className="w-5" />
          <h3>Edit Details</h3>
        </button>
      </div>
      {/* <div> */}
      <div className="w-80 my-1 relative">
        <input
          type="text"
          placeholder="Search fim medicine details..."
          className="py-2 pl-8 pr-4 w-full rounded border-2 bg-slate-200 font-normal border-gray-200 focus:outline-none focus:border-gray-300"
        />
        <div className="absolute right-3 top-4">
          <FaSearch className="text-gray-400" />
        </div>
      </div>
      <div className="flex gap-10 my-6">
        <CardDetails
          title="Inventory"
          titleLink="Go to Configuration"
          left="298"
          leftDeails="Total no of Medicines"
          right="24"
          rightDeails="Medicine Groups"
        />
        <CardDetails
          title="Inventory"
          titleLink="Go to Configuration"
          left="298"
          leftDeails="Total no of Medicines"
          right="24"
          rightDeails="Medicine Groups"
        />
      </div>
      <div className="my-2">
        <CardLarge
          title="How to use"
          instruction="Take this medication by mouth with or without food as directed by your doctor, usually once daily."
        />
      </div>
      <div className="my-2">
        <CardLarge
          title="Side Effects"
          instruction="Dizziness, lightheadedness, drowsiness, nausea, vomiting, tiredness, excess saliva/drooling, blurred vision, weight gain, constipation, headache, and trouble sleeping may occur. If any of these effects persist or worsen, consult your doctor."
        />
      </div>
      <div className="rounded border border-red-500 w-44 text-red-500 flex items-center p-2 my-8 text-sm">
        <MdDeleteOutline className="w-14"/>
        <button className="uppercase h-46 w-full">Delete medicine</button>
      </div>
    </>
  );
};

export default MedicineDetails;
