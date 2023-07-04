import { useState } from "react";
import { ChevronDown, MenuIcon, SearchIcon } from "../hooks/Icons";
import { Link } from "react-router-dom";
import NavReveal from "../utils/NavReveal";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <header className="py-8 flex px-14 lg:px-0 justify-center mx-auto items-center">
      <NavReveal>
        <Link to="/">
          <h1 className="text-2xl text-pink mr-8">Kudasai</h1>
        </Link>
      </NavReveal>

      <nav>
        <ul className="hidden xl:flex gap-10">
          <NavReveal>
            <li className="flex items-center gap-1 relative">
              Categories{" "}
              <button onClick={handleDropdown} className="mt-1">
                <ChevronDown />
              </button>
              {dropdown && (
                <ul
                  className="absolute left-0 top-8
                     "
                >
                  <li>
                    <Link to="/anime/all/popular">Popular</Link>
                  </li>
                  <li>
                    <Link to="/anime/all/ongoing">Ongoing</Link>
                  </li>
                </ul>
              )}
            </li>
          </NavReveal>
          <NavReveal>
            <li>Films</li>
          </NavReveal>
          <NavReveal>
            <li>News</li>
          </NavReveal>
          <NavReveal>
            <li>Community</li>
          </NavReveal>
        </ul>
      </nav>
      <NavReveal>
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
      </NavReveal>

      <NavReveal>
        <div className="hidden md:flex ml-8 mr-6 font-semibold">
          <button className="">Log in</button>
          <button className="lg:px-4 lg:py-3 px-2 py-1 ml-4 bg-red rounded-full hover:bg-transparent transition-colors duration-300  ">
            Sign up
          </button>
        </div>
      </NavReveal>

      <NavReveal>
        <button className="flex   xl:hidden">
          <MenuIcon />
        </button>
      </NavReveal>
    </header>
  );
};

export default Header;
