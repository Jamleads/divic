import { Rectangle } from "../assets";
import Showcase from "../components/Showcase";

const TheSupport = () => {
  return (
    <div>
      <Showcase
        title={"Support"}
        details={"Support farmers across the nation"}
      />

      <div className="my-20">
        <div className="md:w-[75%] md:h-[600px] w-[90%] mx-auto bg-theWhite p-3 shadow-lg rounded-lg flex items-center md:flex-row flex-col">
          <div className="md:w-1/2 h-full">
            <img src={Rectangle} alt="" className="h-full" />
          </div>

          <div className="md:w-1/3 flex flex-col items-center justify-center p-10">
            <p className="text-3xl font-light">Account details</p>
            <p className="text-[#FF0606] font-bold md:text-3xl text-2xl">
              United Bank For Africa
            </p>

            <div className="flex flex-col items-center justify-center mt-10">
              <p className="md:text-3xl text-2xl font-light mt-2">
                <span className="font-bold">Pounds: </span>3004469996
              </p>
              <p className="md:text-3xl text-2xl font-light mt-2">
                <span className="font-bold">Dollars: </span>3004465235
              </p>
              <p className="md:text-3xl text-2xl font-light mt-2">
                <span className="font-bold">Euros: </span>3004465280
              </p>
              <p className="md:text-3xl text-2xl font-light mt-2">
                <span className="font-bold">Naira: </span>1027249911
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheSupport;
