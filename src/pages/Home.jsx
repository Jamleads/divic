import { Link } from "react-router-dom";
import { Core, Core2, Farmers, FarmersIcon, Magegoals } from "../assets";
import AccordionItem from "../components/AccordionItem";
import { faqs, partnerLogo } from "../utilities/useData";

const Home = () => {
  const widthOfScreen = window.screen.width;

  return (
    <>
      <div
        className={`h-[100vh] flex items-center justify-center ${
          widthOfScreen <= 500 ? "showcase_mobole" : "showcase"
        }`}
      >
        <div className="md:w-[85%] mx-auto w-[90%]">
          <div
            className="md:w-2/3 flex flex-col gap-5"
            data-aos="fade-down-right"
          >
            <p className="md:leading-[90px] md:text-[100px] text-[50px] text-theWhite font-extrabold">
              Sowing Support, Reaping Success.
            </p>
            <p className="w-[70%] font-extralight text-theWhite">
              Support nurtures growth, turning seeds of encouragement into
              success. Through collaboration and dedication, achievements
              flourish, creating a cycle where effort and teamwork lead to
              progress and shared accomplishments.
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

      <div>
        <div
          className="md:w-[85%] mx-auto w-[90%] flex md:flex-row flex-col items-center
         gap-20 py-40"
        >
          <div className="md:w-1/2 relative" data-aos="fade-down-right">
            <img src={Farmers} alt="" className="relative z-10" />

            <div className="bg-primary w-[270px] mx-auto rounded-lg absolute md:bottom-10 bottom-5 left-1/2 transform -translate-x-1/2 z-20">
              <div className="flex items-center justify-center gap-5 py-3">
                <img src={FarmersIcon} alt="farmerIcon" />
                <p className="w-[150px] text-theWhite">
                  Several Successfully Project Completed
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2" data-aos="fade-down-left">
            <div>
              <p className=" text-[#0E6130]">Our Introduction</p>
              <p className="text-5xl font-extrabold text-[#1E1E1E] mt-3">
                Divic Farmers Aid Initiative is a non-governmental organization
                (NGO)
              </p>
            </div>

            <div className="mt-10">
              <p className="text-[#0E6130] font-bold">
                We’re Leader in Agriculture Market
              </p>
              <p className=" font-extralight text-[#1E1E1E] mt-3">
                Dedicated to improving the agricultural sector in Nigeria, with
                a particular focus on empowering smallholder and mid-level
                farmers. Our mission is to enhance the financial capacity of
                farmers by providing them with the resources, education, and
                support they need to boost productivity and achieve financial
                independence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#63C95D] py-20">
        <div className="md:w-[75%] mx-auto w-[90%]">
          <div className="flex items-center justify-center flex-col">
            <p className=" text-3xl font-extrabold text-[#1F1E17]">
              Our key goals
            </p>
            <p className=" font-light text-[#1F1E17]">
              Reliable process for achieving distinctiveness.
            </p>
          </div>

          <div className="mt-20">
            <div className="flex md:flex-row flex-col gap-10">
              <div
                className="bg-[#0E6130] md:w-1/2 px-10 py-14"
                data-aos="fade-down-right"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[#63C95D] font-bold">Short-Term Goals</p>
                  <img src={Magegoals} alt="" />
                </div>

                <p className="text-[#F0F0F0] mt-5">
                  Help farmers build financial capacity by providing access to
                  capital, tools, and financial literacy training.
                </p>
              </div>

              <div
                className="bg-[#0E6130] md:w-1/2 px-10 py-14"
                data-aos="fade-down-left"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[#63C95D] font-bold">Long-Term Goals</p>
                  <img src={Magegoals} alt="" />
                </div>

                <p className="text-[#F0F0F0] mt-5">
                  Subsidize the prices of farm produce to improve food security
                  and make agricultural products more affordable for local
                  communities.
                </p>
              </div>
            </div>

            <div className="bg-[#0E6130] px-10 py-14 mt-10" data-aos="fade-up">
              <div className="flex items-center justify-center gap-20">
                <p className="text-[#63C95D] font-bold">Core Project</p>
                <img src={Magegoals} alt="" />
              </div>

              <p className="text-[#F0F0F0] mt-5">
                Our flagship project, “Let Farming Be Easy For A Sustainable
                Economic Growth (LFBESEG)” is aimed at alleviating poverty by
                providing farmers with financial aid and training, ensuring they
                have the resources to thrive and contribute to Nigeria’s
                agricultural economy. At Divic Farmers Aid Initiative, we
                believe that supporting farmers is essential for sustainable
                development and poverty reduction in Nigeria.
              </p>
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

      <div className="bg-theWhite py-20 my-20 shadow-sm">
        <div className="md:w-[75%] mx-auto w-[90%]">
          <div className="flex items-center justify-center flex-col">
            <p className="text-5xl font-extrabold text-[#1F1E17]">
              Our Core Values
            </p>
            <p className=" font-light text-[#1F1E17] text-2xl">
              Reliable process for achieving distinctiveness.
            </p>
          </div>
        </div>
        <div className="md:w-[85%] mx-auto w-[90%]">
          <img src={Core} alt="" className="mt-20 md:flex hidden" />
          <img src={Core2} alt="" className="mt-20 md:hidden flex" />
          {/* <div className="mt-20 grid md:grid-cols-2 grid-cols-1 gap-10">
            {values.map((item, idx) => (
              <div key={idx} className="flex gap-5">
                <div>
                  <img src={item.image} alt="" />
                </div>
                <div>
                  <p className="text-primary font-bold text-2xl -mt-2">
                    {item.title}
                  </p>
                  <p className="mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>

      <div className="bg-theWhite py-20 my-20 shadow-sm">
        <div className="md:w-[75%] mx-auto w-[90%]">
          <div className="flex items-center justify-center flex-col">
            <p className=" text-4xl font-extrabold text-[#1F1E17]">
              Our Partners
            </p>
            <p className=" font-light text-[#1F1E17]">
              Their support enables us to create impactful solutions
            </p>
          </div>
        </div>

        <div className="mt-20 flex md:flex-row flex-col items-center justify-center gap-10">
          {partnerLogo.map((item, idx) => (
            <img key={idx} src={item.logo} alt="" data-aos="fade-right" />
          ))}
        </div>
      </div>

      <div className="bg-theWhite py-20 mt-20 shadow-sm">
        <div className="md:w-[75%] mx-auto w-[90%]">
          <div className="flex items-center justify-center flex-col">
            <p className=" text-4xl font-extrabold text-[#1F1E17]">
              Frequently asked question
            </p>
            <p className=" font-light text-[#1F1E17]">
              We have answered pressing questions you might need answers to
            </p>
          </div>

          <div className="mt-20">
            {faqs.map((item, idx) => (
              <AccordionItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
