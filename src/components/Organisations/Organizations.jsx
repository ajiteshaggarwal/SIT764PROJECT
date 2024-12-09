import React from "react";
import image1 from "./../../images/Laverton_college.jpeg";
import image2 from "./../../images/Lawrence_school.webp";
import image3 from "./../../images/st_mary.webp";
import image4 from "./../../images/tech_school.svg";
const Organizations = () => {
  return (
    <div className="bg-white">
      <div className="text-3xl text-center bg-black p-4 text-[#CDC8F6] font-bold">
        Partner Organizations
      </div>

      <div className="flex gap-8 justify-evenly p-4">
        <img className="min-w-24 max-w-36" src={image1} />

        <img className="min-w-24 max-w-36" src={image2} />

        <img className="min-w-24 max-w-36" src={image3} />

        <img className="min-w-24 max-w-36" src={image4} />
      </div>
    </div>
  );
};

export default Organizations;
