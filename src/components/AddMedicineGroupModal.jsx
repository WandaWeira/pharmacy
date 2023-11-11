import { useEffect } from "react";
import { createPortal } from "react-dom";
import { MdClose, MdAdd } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const AddMedicineGroupModal = ({ onClose }) => {
  const modalRoot = document.getElementById("modal-root");
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, [el, modalRoot]);
  return createPortal(
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold">Add Medicine</h3>
          <MdClose onClick={onClose} className="text-gray-500" />
        </div>
        <p>Medicine</p>
        <div className="w-96 my-1 relative">
          <input
            type="text"
            placeholder="Enter Medicine Name or Medicine ID"
            className="py-2 pl-8 pr-4 w-full rounded border-2 bg-slate-200 font-normal border-gray-200 focus:outline-none focus:border-gray-300"
          />
          <div className="absolute right-3 top-4">
            <FaSearch className="text-gray-400" />
          </div>
        </div>
        <div className="rounded text-white bg-red-500 flex items-center p-2 my-8 text-sm w-48">
          <MdAdd className="w-14" />
          <button className="uppercase h-46 w-full">Delete medicine</button>
        </div>
      </div>
    </div>,
    el
  );
};

export default AddMedicineGroupModal;
