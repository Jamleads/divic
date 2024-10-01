/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Frame4, Frame5 } from "../assets";
import Showcase from "../components/Showcase";

const About = () => {
  return (
    <div>
      <Showcase
        title={"About Us"}
        details={
          "Divic Farmers Aid Initiative is a dedicated non-governmental organisation committed to hard work with the target of tranforming Nigeria's agricultural landscape. We focus on empowering farmers by providing essential financial education, access to capital, and innovative resources to help them build sustainable livelihoods."
        }
      />
      <div className="bg-theWhite py-20">
        <div className="md:w-[85%] mx-auto w-[90%] ">
          <div
            data-aos="fade-down-right"
            className="flex md:flex-row flex-col items-center justify-between gap-10"
          >
            <div className="md:w-1/2">
              <img src={Frame4} alt="" />
            </div>
            <div className="md:w-1/2">
              <p className=" text-[#0E6130] font-bold text-4xl">
                Financial Education
              </p>
              <p className=" text-lg mt-3">
                It's essential for farmers, agricultural entrepreneurs, and
                rural communities to navigate the complex agricultural financial
                landscape, mitigate risks, and capitalize on opportunities for
                sustainable growth and development.
              </p>
            </div>
          </div>

          <div
            data-aos="fade-down-left"
            className="flex md:flex-row flex-col-reverse items-center justify-between gap-10"
          >
            <div className="md:w-1/2">
              <p className=" text-[#0E6130] font-bold text-4xl">Get involved</p>
              <p className=" text-lg mt-3">
                We invite you to join us in this vital mission, wether through
                partnership, support, or simply spreading the word. Together, we
                can make a lasting impact on the lives of farmers, their
                communities, and our Nation at large.
              </p>
            </div>
            <div className="md:w-1/2">
              <img src={Frame5} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 showcase2 h-[60vh] flex items-center justify-center">
        <div className="md:w-[85%] mx-auto w-[90%]">
          <div
            className="md:w-2/3 flex flex-col gap-5"
            data-aos="fade-down-right"
          >
            <p className="md:leading-[90px] md:text-[70px] text-[50px] text-theWhite font-extrabold">
              Agriculture Matters to the Future of Development
            </p>

            <div className="flex items-center gap-5 mt-3">
              <Link to="/support">
                <button className="px-10 py-2 bg-secondary rounded-lg md:text-base text-xs">
                  Support
                </button>
              </Link>
              <Link to="https://wa.link/08pjoo">
                <button className="px-10 py-2 bg-transparent text-theWhite border-[1px] rounded-lg md:text-base text-xs">
                  Book a consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
