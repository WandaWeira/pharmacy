import CardSmall from "./CardSmall";
import { MdAdd } from "react-icons/md";

const Inventory = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Inventory</h2>
        <h3>List of medicines available for sale</h3>
        <button className="flex justify-between items-center rounded p-2 border-2 text-white bg-red-500">
          <MdAdd className="w-5" />
          <h3>Add New Item</h3>
        </button>
      </div>
      <CardSmall />
    </>
  );
};

export default Inventory;
