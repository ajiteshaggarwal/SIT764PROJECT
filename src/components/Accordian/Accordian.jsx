import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const Accordian = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-left text-2xl bg-white ">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className=" justify-between border rounded-lg border-black items-center px-6 hover:bg-[#C3DFC4]"
      >
        <div className="flex items-center justify-between">
          <h1 className="font-semibold p-2">{question}</h1>
          <IoIosArrowForward
            className={`${
              isOpen ? "rotate-90" : "rotate-0"
            } transition-all duration-500`}
          />
        </div>

        <div
          className={` overflow-hidden  transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <p className="p-2 overflow-hidden">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
