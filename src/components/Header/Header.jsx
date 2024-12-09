import * as React from "react";
import ImageList from "./../Imagelist/Imagelist";
import { ReactTyped } from "react-typed";
export default function Hero() {
  return (
    <div className="bg-white ">
      <div className="flex md:gap-6 gap-2 md:text-7xl text-4xl font-bold justify-center py-8 text-red-500">
        <p>We </p>
        <ReactTyped
          strings={["simplify", "teach", "make it easy!"]}
          typeSpeed={100}
          backSpeed={100}
        />
      </div>
      <p className="md:text-3xl text-xl text-center text-[#AFAFAF]">
        We provide curriculum aligned activities to engage young students with{" "}
        <br />
        hands on robotics and real world problem solving
      </p>

      <div className="flex py-8 justify-center">
        <button className="bg-[#7060EC] text-2xl py-4 px-20 text-white font-semibold rounded-lg">
          Purchase now
        </button>
      </div>
      <ImageList />
    </div>
  );
}
