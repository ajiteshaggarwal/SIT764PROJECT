import React from "react";

const Card = ({ img, title, content, grade }) => {
  return (
    <div className=" bg-[#CDC8F6] rounded-lg shadow-lg flex">
      <div className="p-4 flex  gap-4 flex-col">
        <p
          className="text-justify"
          style={{ color: "MenuText", fontWeight: 700 }}
        >
          {content}
        </p>
        <div className="mt-auto text-center">
          <p className="text-2xl  font-bold text-[#e45f14]">{title}</p>
          <p className="text-lg">{grade}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
