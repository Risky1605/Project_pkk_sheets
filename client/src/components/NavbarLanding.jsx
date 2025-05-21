import { Navigation } from "../../src/constant/contstant";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "../assets/logo.png";
import CircleNav from "../design/circleNav";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const NavbarLanding = () => {
  const pathName = useLocation();
  const [openStatus, openSetStatus] = useState(false);

  return (
    <div className="w-full fixed left-0 top-0  text-primary   border-2 border-primary/10 bg-white ultimate-z">
      <div className="flex items-center justify-between md:justify-normal px-[2rem] md:px-[8rem]  lg:px-[10rem] py-6 ">
        <div className="md:w-[10rem] ">
          <div className="rounded-full bg-supporting-color-low/20 border-2 border-primary/20 w-fit p-[0.2rem]">
            <img
              src={Logo}
              height={56}
              width={56}
              className="rounded-full"
            ></img>
          </div>
        </div>

        <div
          className={`${
            openStatus ? "flex" : "hidden"
          } md:flex mx-auto px-[2rem] py-[0.8rem] bg-white md:bg-supporting-color-low/20 border-2 border-primary/20 md:rounded-full fixed inset-0 md:static flex items-center justify-center `}
        >
          <CircleNav></CircleNav>
          <nav className="flex items-center flex-col md:flex-row gap-20 md:gap-10">
            {Navigation.map((navitem) => (
              <a
                key={navitem.key}
                href={navitem.url}
                className={`relative capitalize text-[2rem] md:text-[1rem] hover:font-semibold transition-all duration-75 text-primary no-underline ${
                  navitem.inSmallScreen ? "md:hidden" : ""
                } ${navitem.url === pathName.hash ? "font-semibold" : ""}`}
              >
                {navitem.title}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex gap-4 text-nowrap md:w-[10rem]">
          <button type="button" className=" btn-signIn">
            Sign In
          </button>
          <button type="button" className=" btn-signUp">
            Sign Up
          </button>
          <button
            type="button"
            className="btn-Hamburger"
            onClick={() => openSetStatus(!openStatus)}
          >
            <RxHamburgerMenu className="size-8"></RxHamburgerMenu>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarLanding;
