import { Logo } from "../assets";
import { Link } from "react-router-dom";
import { navPage } from "../utilities/useData";
import { TiThMenu } from "react-icons/ti";
import { RiCloseLargeLine } from "react-icons/ri";
import { useState } from "react";

const Nav = () => {
  const [openOnMobile, setOpenOnMobile] = useState(false);

  return (
    <div className={`${openOnMobile ? "h-[100vh]" : "h-auto"} bg-primary py-3`}>
      <div className="md:w-[85%] w-[90%] mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={Logo} alt="divic_logo" />
          </Link>
        </div>

        <div className="md:flex hidden items-center gap-10 text-theWhite">
          {navPage.map((page, idx) => (
            <Link to={page.path} key={idx}>
              {page.name}
            </Link>
          ))}
        </div>

        <div className="md:flex hidden">
          <Link to={"/support"}>
            <button className="px-10 py-2 bg-secondary rounded-lg">
              Support
            </button>
          </Link>
        </div>

        <div className="md:hidden flex">
          {openOnMobile ? (
            <RiCloseLargeLine
              className="text-3xl text-theWhite"
              onClick={() => setOpenOnMobile(!openOnMobile)}
            />
          ) : (
            <TiThMenu
              className=" text-3xl text-theWhite"
              onClick={() => setOpenOnMobile(!openOnMobile)}
            />
          )}
        </div>
      </div>
      {openOnMobile && (
        <div className="flex text-2xl flex-col h-full items-center justify-center gap-10 text-theWhite">
          {navPage.map((page, idx) => (
            <Link
              to={page.path}
              key={idx}
              onClick={() => setOpenOnMobile(false)}
            >
              {page.name}
            </Link>
          ))}
          <div className="">
            <Link to={"/support"}>
              <button className="px-10 py-2 bg-secondary rounded-lg">
                Support
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
