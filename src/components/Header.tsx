import React from "react";
import { menuSvg } from "../assets";
import { navLinks } from "../utils/data";

const logo: string =
  "https://i0.wp.com/cine21.ng/wp-content/uploads/2021/01/cropped-White-Horizontal-Logo-1.png?fit=1639%2C752&ssl=1";
const menu: string =
  "https://mpng.subpng.com/20180514/sle/kisspng-hamburger-button-computer-icons-menu-5afa4b5d6c72a7.2738325215263527334442.jpg";
const close: string =
  "https://www.kindpng.com/picc/m/463-4638719_close-close-button-transparent-png-png-download.png";
const Header = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[62px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((navLink, index) => (
          <li key={index + navLink.id} className={"font-poppins"}>
            <a
              href={`#${navLink.id}`}
              className={`font-normal cursor-pointer font-poppins text-[16px]   ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              } text-indigo-500`}
            >
              {navLink.title}
            </a>
          </li>
        ))}
      </ul>
      {/** small device navbar preference */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="nav_logo"
          className="w-[35px] h-[35px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          }  p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px ] rounded-xl sidebar`}
        >
          <ul className="list-none  flex flex-col  justify-end items-center flex-1">
            {navLinks.map((navLink, index) => (
              <li
                key={index + navLink.id}
                className={`font-medium cursor-pointer font-poppins text-[16px]   ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                <a href={`#${navLink.id}`}>{navLink.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
