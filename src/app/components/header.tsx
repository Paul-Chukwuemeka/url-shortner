import { FaRegSun } from "react-icons/fa6";
import { FiMoon } from "react-icons/fi";
interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}
const Header: React.FC<HeaderProps> = ({
  darkMode,
  setDarkMode,
}) => {
  return (
    <div className="p-4 relative z-10 flex items-center justify-between bg-transparent text-3xl gap-2 w-full max-lg:items-center mb-10">
      <h1 className="gradient-text">LinkMe</h1>
      <div
        className=" w-fit overflow-hidden backdrop-blur-lg p-2 text-xl font-bold rounded-3xl flex items-center
      
      "
      >
        <button className={`flex items-center border-2 rounded-full p-2 focus:outline-none focus:ring-0 ${darkMode ? `border-white`: `border-black`}`}
        onClick={() => setDarkMode(!darkMode)}
        >
         { darkMode ? <FiMoon /> : <FaRegSun /> }
        </button>
      </div>
    </div>
  );
};

export default Header;
