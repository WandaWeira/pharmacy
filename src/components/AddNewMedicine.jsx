import { useState } from "react";
import { MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";

import data from "../data/data";

const AddNewMedicine = () => {
  const initialState = {
    medicineName: "",
    medicineID: "",
    groupName: "",
    stockInQty: "",
    howToUse: "",
    sideEffects: "",
  };
  const [medicineData, setMedicineData] = useState(initialState);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    console.log(
      "form data",
      medicineData.medicineName,
      medicineData.medicineID,
      medicineData.stockInQty,
      medicineData.groupName,
      medicineData.howToUse,
      medicineData.sideEffects
    );
  };

  return (
    <>
      <div className="flex justify-between">
        <div>
          <div className="flex gap-x-2 items-baseline">
            <Link to="/inventory">
              <span className="text-gray-800 text-opacity-50 hover:text-opacity-60 text-xl font-bold ">
                Inventory
              </span>
            </Link>
            <MdChevronRight />
            <Link to="/medicineList">
              <span className="text-gray-800  text-opacity-50 text-xl font-bold hover:text-opacity-60">
                List of Medicines
              </span>
            </Link>
            <MdChevronRight />
            <Link to="">
              <span className="text-gray-800 text-xl font-bold ">
                Add New Medicine
              </span>
            </Link>
          </div>
          <p className="text-gray-800 text-sm font-normal">
            *All fields are mandatory, except mentioned as (optional).
          </p>
        </div>
      </div>
      <div className=" w-9/12">
        <form className="my-6" onSubmit={formSubmitHandler}>
          <div className="flex justify-between  my-3">
            <div className="flex flex-col">
              <label htmlFor="medicine_name" className="text-sm font-normal">
                Medicine Name
              </label>
              <input
                type="text"
                id="medicine_name"
                className="p-2 w-[340px] h-[38px]  rounded border-2 bg-slate-200 font-normal border-gray-200 focus:outline-none focus:border-gray-300"
                required
                onChange={({ target }) =>
                  setMedicineData((prevState) => ({
                    ...prevState,
                    medicineName: target.value,
                  }))
                }
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="medicine_id" className="text-sm font-normal">
                Medicine ID
              </label>
              <input
                type="text"
                id="medicine_id"
                className="p-2 w-[340px] h-[38px]  rounded border-2 bg-slate-200 font-normal border-gray-200 focus:outline-none focus:border-gray-300"
                required
                onChange={({ target }) =>
                  setMedicineData((prevState) => ({
                    ...prevState,
                    medicineID: target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="flex justify-between my-3">
            <div className="flex flex-col">
              <label htmlFor="medicine_group" className="text-sm font-normal">
                Medicine Group
              </label>
              <select
                id="medicine_name"
                className="p-2 w-[340px] h-[38px]  rounded border-2 bg-slate-200 font-normal border-gray-200 focus:outline-none focus:border-gray-300"
                required
                onChange={({ target }) =>
                  setMedicineData((prevState) => ({
                    ...prevState,
                    groupName: target.value,
                  }))
                }
              >
                <option value="">- Select Group -</option>
                {data.map((item, index) => (
                  <option key={index} value={item.groupName}>
                    {item.groupName}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col">
              <label htmlFor="medicine_id" className="text-sm font-normal">
                Quantity in Number
              </label>
              <input
                type="number"
                min={1}
                id="medicine_id"
                className="p-2 w-[340px] h-[38px]  rounded border-2 bg-slate-200 font-normal border-gray-200 focus:outline-none focus:border-gray-300"
                required
                onChange={({ target }) =>
                  setMedicineData((prevState) => ({
                    ...prevState,
                    stockInQty: target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="use" className="text-sm font-normal">
              How to Use
            </label>
            <textarea
              type="text"
              id="use"
              className="p-2  rounded border-2 bg-slate-200 font-normal border-gray-200 focus:outline-none focus:border-gray-300"
              required
              onChange={({ target }) =>
                setMedicineData((prevState) => ({
                  ...prevState,
                  howToUse: target.value,
                }))
              }
            />
          </div>
          <div className="flex flex-col my-2">
            <label htmlFor="effects" className="text-sm font-normal">
              Side Effects
            </label>
            <textarea
              type="text"
              id="effects"
              className="p-2  rounded border-2 bg-slate-200 font-normal border-gray-200 focus:outline-none focus:border-gray-300"
              required
              onChange={({ target }) =>
                setMedicineData((prevState) => ({
                  ...prevState,
                  sideEffects: target.value,
                }))
              }
            />
          </div>
          <button
            type="submit"
            className="my-6 rounded-lg p-2 px-6 border-2 text-white bg-red-500 hover:bg-red-600"
          >
            <h3>Save Details</h3>
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNewMedicine;
