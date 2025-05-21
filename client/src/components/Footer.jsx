import { Navigation } from "../constant/contstant";

const Footer = () => {
  return (
    <footer className="w-full btn-card-experince rounded-none p-[2rem] flex flex-col gap-2 items-center text-primary mt-12 md:mt-0">
      {/* <nav className="flex items-center flex-col md:flex-row gap-20 md:gap-10">
        {Navigation.map((navitem) => (
          <a
            key={navitem.key}
            href={navitem.url}
            className={`relative capitalize text-[2rem] md:text-[1rem] hover:font-semibold transition-all duration-75 text-inherit no-underline ${
              navitem.inSmallScreen ? "md:hidden" : ""
            } `}
          >
            {navitem.title}
          </a>
        ))}
      </nav> */}

      {/* <hr className="bg-slate-500 p-[0.5px] w-full mt-8"></hr> */}
      <p className="text-inherit mt-4">Copyright © 2025-Sheets company</p>
    </footer>
  );
};

export default Footer;
