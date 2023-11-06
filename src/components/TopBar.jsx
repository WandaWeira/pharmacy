import { FaSearch } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
const TopBar = () => {
  return (
    <div className="border-b-4 border-blue-500">
      <div className="m-8 mt-4 mb-4">
        <div className="flex justify-between">
          <div className="flex items-center w-1/2">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for anything here..."
                className="py-2 pl-8 pr-4 w-full rounded border-2 border-gray-200 focus:outline-none focus:border-gray-300"
              />
              <div className="absolute right-3 top-4">
                <FaSearch className="text-gray-400" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <h2>English(US)</h2>
            <MdArrowDropDown className="w-5" />
          </div>
          <div>
            <h2 className="font-semibold text-sm">Good morning</h2>
            <div className="flex gap-3 text-sm">
              <h2>14 January 2022</h2>
              <h2>22:45:04</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
