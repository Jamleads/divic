import Showcase from "../components/Showcase";
import { teamImage } from "../utilities/useData";

const Team = () => {
  return (
    <div>
      <Showcase
        title={"Our Team"}
        details={"Meet our talented team proud in delivering the best."}
      />

      <div className="bg-theWhite py-20">
        <div className="md:w-[85%] mx-auto w-[90%] grid md:grid-cols-3 grid-cols-1 gap-10">
          {teamImage.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center"
              data-aos="fade-right"
            >
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
