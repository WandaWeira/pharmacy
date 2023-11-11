
const CardLarge = ({title, instruction}) => {
  return (
      <div className="w-full border-2 border-gray-300 shadow rounded p-4">
        <div className="m-1 font-bold">{title}</div>
        <hr className="w-full bg-gray-500"/>
        <div className="m-1">{instruction}</div>
      </div>
  );
};

export default CardLarge;
