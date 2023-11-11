import data from "../../data/data";
import { HiChevronUpDown } from "react-icons/hi2";
import {MdOutlineDelete} from "react-icons/md"

const TableIcons = () => {
  return (
    <div className="relative overflow-x-auto font-poppins font-normal border my-6 rounded-sm  border-b border-gray-300">
      <table className="w-full text-sm text-left rtl:text-right ">
        <thead className=" border-b text-lg  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Medicine name
                <a href="#">
                  <HiChevronUpDown className="w-3 h-3 ms-1.5" />
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                No of Medicines
                <a href="#">
                  <HiChevronUpDown className="w-3 h-3 ms-1.5" />
                </a>
              </div>
            </th>
            <th scope="col" className="px-6 py-3">
              <div className="flex items-center">
                Action
                <a href="#">
                  <HiChevronUpDown className="w-3 h-3 ms-1.5" />
                </a>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 3).map((item, index) => (
            <tr key={index} className="border-b">
              <td scope="row" className="px-6 py-4">
                {item.groupName}
              </td>
              <td className="px-6 py-4">{item.stockInQty}</td>

              <td className="px-6 py-4  text-right flex items-center">
                <MdOutlineDelete className="text-red-500 mr-5"/>
                <p className="text-red-500">Remove from Group</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableIcons