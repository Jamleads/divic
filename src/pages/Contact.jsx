import Showcase from "../components/Showcase";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-router-dom";
import { socials } from "../utilities/useData";
import { Eclipse } from "../assets";

const Contact = () => {
  return (
    <div>
      <Showcase
        title={"Contact Us"}
        details={"Any question or remarks? Just write us a message!"}
      />

      <div className="my-20">
        <div
          className="md:w-[75%] md:h-[600px] w-[90%] mx-auto bg-theWhite p-3 shadow-lg rounded-lg flex md:flex-row flex-col"
          data-aos="flip-left"
        >
          <div className="relative md:w-1/3 bg-primary text-theWhite p-10 flex flex-col justify-between">
            <div>
              <p
                className="text-theWhite font-bold text-2xl
              "
              >
                Contact Information
              </p>
              <p className=" text-[#C9C9C9]">
                Say something to start a live chat!
              </p>
            </div>

            <div className="">
              <div className=" font-bold text-theWhite flex gap-5 mt-7">
                <div className="w-[20px] h-[20px] flex items-center justify-center">
                  <TiThMenu className="" />
                </div>
                <p>+234 85 43878 33</p>
              </div>
              <div className=" font-bold text-theWhite flex gap-5 mt-7">
                <div className="w-[20px] h-[20px] flex items-center justify-center">
                  <TiThMenu className="" />
                </div>
                <p>
                  Wing B, 740, First Floor, Sheriff Plaza, Aminu Kano Crescent,
                  Wuse Zone II, Abuja.
                </p>
              </div>
            </div>

            <div className="h-[100px]">
              <div></div>
              <div></div>
              <div></div>
            </div>

            <div className="flex">
              <div className="flex items-center gap-5 my-5">
                {socials.map((item, idx) => (
                  <Link key={idx} to={item.url}>
                    <div className="w-[30px] h-[30px] flex items-center justify-center">
                      <img src={item.icon} alt="" className="w-full" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <img src={Eclipse} alt="" className=" absolute bottom-0 right-0" />
          </div>

          <div className="md:w-2/3 p-10 text-[#8D8D8D]">
            <form action="https://formspree.io/f/xdknqzgq" method="POST">
              <div className="flex items-center justify-between gap-10">
                <div className="w-1/2">
                  <label htmlFor="firstName">First Name</label> <br />
                  <input
                    required
                    type="text"
                    name="firstName"
                    id="firstName"
                    className="border-b-[1px] border-[#8D8D8D] focus:border-black w-full py-2"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="lastName">Last Name</label> <br />
                  <input
                    required
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="border-b-[1px] border-[#8D8D8D] focus:border-black w-full py-2"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between gap-10 mt-5">
                <div className="w-1/2">
                  <label htmlFor="email">Email</label> <br />
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    className="border-b-[1px] border-[#8D8D8D] focus:border-black w-full py-2"
                  />
                </div>
                <div className="w-1/2">
                  <label htmlFor="phoneNumber">Phone Number</label> <br />
                  <input
                    required
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    className="border-b-[1px] border-[#8D8D8D] focus:border-black w-full py-2"
                  />
                </div>
              </div>

              <div className="w-full mt-10">
                <label htmlFor="message">Message</label> <br />
                <textarea
                  name="message"
                  id="message"
                  className="border-b-[1px] border-[#8D8D8D] focus:border-black w-full py-2"
                ></textarea>
              </div>

              <div className="flex justify-end mt-10">
                <button
                  type="submit"
                  className="px-10 py-2 bg-primary rounded-lg text-theWhite"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
