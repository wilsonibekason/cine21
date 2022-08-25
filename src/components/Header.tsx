import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate, NavLink } from "react-router-dom";
export default function Header() {
  const naviagte = useNavigate();
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-0 lg:px-12 py-3  mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            {/* <a
              className="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="#pablo"
            >
              cinema
            </a> */}
            <img
              src="https://i0.wp.com/cine21.ng/wp-content/uploads/2021/01/cropped-White-Horizontal-Logo-1.png?resize=1536%2C705&ssl=1"
              alt=""
              className="w-32  object-contain"
            />
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {/* <i className="fas fa-bars"></i> */}
              <GiHamburgerMenu size={30} />
            </button>
          </div>
          <div className="hidden lg:flex">
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
              <li className="nav-item">
                <NavLink
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold font-robotoMain leading-snug text-white hover:text-yellow-300 hover:border-b-4 hover:border-yellow-300 "
                  to={"/contactus"}
                >
                  {/* <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75 "></i> */}
                  <span className="ml-2 text-xs lg:text-2xl capitalize tracking-wide  font-black">
                    Contact us
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div
        className={
          " bg-gray-100 text-black text-start py-1 lg:hidden " +
          (navbarOpen
            ? " flex  transition-all ease-out duration-500 "
            : " hidden")
        }
        id="example-navbar-danger "
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
          <li className="nav-item">
            <NavLink
              className="px-3 py-2 flex items-center text-xs uppercase font-bold font-robotoMain leading-snug text-white hover:opacity-75"
              to={"/contactus"}
            >
              {/* <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75 "></i> */}
              <span className="ml-2 text-[18px] lg:text-2xl capitalize tracking-wide font-robotoMain text-black font-black leading-4">
                Contact us
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
