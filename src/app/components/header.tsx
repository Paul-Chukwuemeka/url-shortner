import { FaCut } from "react-icons/fa";
const Header = () => {
  return (
    <div className="p-4 flex items-center text-3xl gap-2 w-full text-sky-500 max-lg:items-center mb-10">
      <h1 className="text-3xl font-[900] text-white">
        Short
        <span className="text-sky-500">ly</span>
      </h1>
      <span className="-rotate-45">
        <FaCut />
      </span>
    </div>
  );
};

export default Header;
