/* eslint-disable react/prop-types */
const Showcase = ({ title, details }) => {
  return (
    <div className=" showcase3 h-[50vh] flex items-center justify-center">
      <div
        className=" flex flex-col items-center justify-center md:w-[60%] w-[90%] mx-auto text-center text-theWhite"
        data-aos="flip-left"
      >
        <p className=" md:text-[100px] text-[70px] font-extrabold">{title}</p>
        <p>{details}</p>
      </div>
    </div>
  );
};

export default Showcase;
