import {
  MdLocalHospital,
  MdOutlineArrowForwardIos,
  MdMoney,
  MdMedication,
  MdDangerous,
} from "react-icons/md";

const CardSmall = () => {
  return (
    <div className="flex justify-between">
      <div className="my-8 border-2 border-green-500 w-60 h-32 rounded text-center flex flex-col justify-between">
        <div className="items-center">
          <div className="flex items-center justify-center mt-2">
            <MdLocalHospital className="text-green-400 text-2xl" />
          </div>
          <h2 className="font-bold text-xl">Good</h2>
          <h3 className="text-sm">Inventory Status</h3>
        </div>
        <div className="flex items-center justify-center bg-green-200 p-1">
          <h3 className="text-xs">View Detailed Report</h3>
          <div className="flex ml-4">
            <MdOutlineArrowForwardIos size="8" />
            <MdOutlineArrowForwardIos size="8" />
          </div>
        </div>
      </div>
      <div className="my-8 border-2 border-yellow-300 w-60 h-32 rounded text-center flex flex-col justify-between">
        <div className="items-center">
          <div className="flex items-center justify-center mt-2">
            <MdMoney className="text-yellow-400 text-2xl" />
          </div>
          <h2 className="font-bold text-xl">UGX. 8,000,000</h2>
          <h3 className="text-sm">Revenue: Jan 2022</h3>
        </div>
        <div className="flex items-center justify-center bg-yellow-200 p-1">
          <h3 className="text-xs">View Detailed Report</h3>
          <div className="flex ml-4">
            <MdOutlineArrowForwardIos size="8" />
            <MdOutlineArrowForwardIos size="8" />
          </div>
        </div>
      </div>
      <div className="my-8 border-2 border-blue-500 w-60 h-32 rounded text-center flex flex-col justify-between">
        <div className="items-center">
          <div className="flex items-center justify-center mt-2">
            <MdMedication className="text-blue-400 text-2xl" />
          </div>
          <h2 className="font-bold text-xl">298</h2>
          <h3 className="text-sm">Medicines Available</h3>
        </div>
        <div className="flex items-center justify-center bg-blue-200 p-1">
          <h3 className="text-xs">Visit Inventory</h3>
          <div className="flex ml-4">
            <MdOutlineArrowForwardIos size="8" />
            <MdOutlineArrowForwardIos size="8" />
          </div>
        </div>
      </div>
      <div className="my-8 border-2 border-red-500 w-60 h-32 rounded text-center flex flex-col justify-between">
        <div className="items-center">
          <div className="flex items-center justify-center mt-2">
            <MdDangerous className="text-red-400 text-2xl" />
          </div>
          <h2 className="font-bold text-xl">01</h2>
          <h3 className="text-sm">Medicine Shortage</h3>
        </div>
        <div className="flex items-center justify-center bg-red-200 p-1">
          <h3 className="text-xs">Resolve Now</h3>
          <div className="flex ml-4">
            <MdOutlineArrowForwardIos size="8" />
            <MdOutlineArrowForwardIos size="8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSmall;
