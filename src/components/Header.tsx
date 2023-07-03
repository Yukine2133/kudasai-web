import { ChevronDown, MenuIcon, SearchIcon } from "../hooks/Icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="py-8 flex px-14 lg:px-0 justify-center mx-auto items-center ">
      <Link to='/'>
        <h1 className="text-2xl text-pink mr-8">Kudasai</h1>
      </Link>

      <nav>
        <ul className="hidden xl:flex gap-10">
          <li className="flex items-center gap-1 ">
            Categories{" "}
            <button className="mt-1">
              <ChevronDown />
            </button>
          </li>
          <li>Films</li>
          <li>News</li>
          <li>Community</li>
        </ul>
      </nav>
      <div className="ml-10 flex items-center">
        <input
          type="text"
          placeholder="Search..."
          className="bg-grey  rounded-full outline-none py-2 px-3  "
        />
        <div className="transform -translate-x-11">
          <SearchIcon />
        </div>
      </div>

      <div className="hidden md:flex ml-8 mr-6 font-semibold">
        <button className="">Log in</button>
        <button className="lg:px-4 lg:py-3 px-2 py-1 ml-4 bg-red rounded-full hover:bg-transparent transition-colors duration-300  ">
          Sign up
        </button>
      </div>

      <button className="flex   xl:hidden">
        <MenuIcon />
      </button>
    </header>
  );
};

export default Header;
