import Footer from "./Footer";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { BiSolidError } from "react-icons/bi";

const Layout = () => {
  const devpayment = null;
  return (
    <div className={` ${!devpayment ? "h-[100vh] overflow-hidden" : ""}`}>
      <div className="modal md:w-[35%] w-[95%] py-20 px-5 flex flex-col items-center justify-center gap-20 rounded-2xl">
        <div className="flex items-center justify-center gap-5 text-red-700 text-5xl">
          <BiSolidError />
          Error 403
        </div>
        <div>
          <p className="text-2xl text-center">Access restricted.</p>
          {/* <p className="text-center">
            The developer responsible for building this website has not received
            payment for their services.
          </p> */}
        </div>
      </div>

      {!devpayment && <div className="modal-backdrop"></div>}

      <div>
        <Nav />

        <>
          <Outlet />
        </>

        <Footer />
      </div>
    </div>
  );
};

export default Layout;
