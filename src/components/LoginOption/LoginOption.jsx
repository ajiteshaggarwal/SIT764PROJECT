import React from "react";

const LoginOption = ({ logo, optionName, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="rounded-full px-4 py-4 border border-black flex items-center  gap-2 cursor-pointer"
    >
      {logo}
      <p className="text-center w-full relative right-4">
        Continue with {optionName}
      </p>
    </div>
  );
};

export default LoginOption;
