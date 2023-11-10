import { FiChevronsRight } from "react-icons/fi";

const CardDetails = ({
  title,
  titleLink,
  left,
  leftDeails,
  right,
  rightDeails,
}) => {
  return (
    <div className="w-2/4 rounded border-2 border-gray-300 p-4">
      <div className="flex justify-between border-b-2 border-gray-300">
        <h2>{title}</h2>
        <div className="flex items-center">
          <h3>{titleLink}</h3>
          <FiChevronsRight className="ml-2"/>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <h2 className="font-bold text-lg">{left}</h2>
          <h3 className="font-semibold">{leftDeails}</h3>
        </div>
        <div>
          <h2 className="font-bold text-lg">{right}</h2>
          <h3 className="font-semibold">{rightDeails}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
