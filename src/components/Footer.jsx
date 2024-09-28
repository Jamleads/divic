import { Logo } from "../assets";
import { Link } from "react-router-dom";
import { navPage, socials } from "../utilities/useData";

const Footer = () => {
  return (
    <div className=" bg-primary">
      <div className="md:w-[85%] w-[90%] mx-auto py-20 flex md:flex-row flex-col md:items-center justify-between gap-10">
        <div className="">
          <img src={Logo} alt="logo" />

          <div className="flex items-center gap-5 my-5">
            {socials.map((item, idx) => (
              <Link key={idx} to={item.url}>
                <div className="w-[30px] h-[30px] flex items-center justify-center">
                  <img src={item.icon} alt="" className="w-full" />
                </div>
              </Link>
            ))}
          </div>

          <div className="">
            <Link to={"/support"}>
              <button className="px-10 py-2 bg-secondary rounded-lg">
                Support
              </button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 text-theWhite text-sm">
          <p>Address: Plot 3202, Dasuka Street, F01, Kubwa Abuja</p>
          <p>
            Operating office Address: Wing B, 740, First Floor, Sheriff Plaza,
            Aminu Kano Crescent, Wuse Zone II, Abuja.
          </p>
        </div>

        <div>
          <p className=" text-2xl font-extrabold text-theWhite">Quick links</p>
          <ul className="flex flex-col gap-3 mt-3">
            <Link className=" text-sm text-theWhite" to="/">
              Home
            </Link>
            {navPage.map((page, idx) => (
              <Link className=" text-sm text-theWhite" key={idx} to={page.path}>
                {page.name}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
