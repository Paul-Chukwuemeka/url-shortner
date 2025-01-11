import { FaRegSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
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
        className="relative w-fit gap-2 border overflow-hidden backdrop-blur-lg p-2 text-xl font-bold rounded-3xl flex items-center
      
      "
      >
        <div className={`absolute duration-200 ${darkMode ? `dark ` : "light"}`}></div>
        <button className="flex items-center  gap-1 focus:border-none focus:outline-none focus:ring-0"
        onClick={() => setDarkMode(false)}
        >
          <FaRegSun /> Light
        </button>
        <button className="flex items-center gap-1 focus:border-none focus:outline-none focus:ring-0"
        onClick={() => setDarkMode(true)}
        >
          <FaMoon /> Dark
        </button>
      </div>
    </div>
  );
};

export default Header;
