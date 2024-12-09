import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import LoginOption from "../components/LoginOption/LoginOption";

const logoSize = 30;

const options = [
  {
    optionName: "Facebook",
    logo: <FaFacebook size={logoSize} color="#1877F2" />,
    handleClick: () => console.log(`logging in with Facebook`),
    // implement firebase login logic
  },
  {
    optionName: "Google",
    logo: <FcGoogle size={logoSize} />,
  },
  {
    optionName: "Apple",
    logo: (
      <div className="rounded-full p-[4px] flex justify-center items-center bg-black  w-8 aspect-square">
        <FaApple size={20} color="white" />
      </div>
    ),
  },
  {
    optionName: "Twitter",
    logo: <FaTwitter size={logoSize} color="#1DA1F2" />,
  },
  {
    optionName: "Email",
    logo: <MdEmail size={logoSize} />,
  },
  {
    optionName: "Phone",
    logo: <IoIosPhonePortrait size={logoSize} />,
  },
];

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center md:p-36 bg-gray-800 min-h-screen bg-gradient-to-b to-[#c03338] from-[#ff5412]">
      <div className="flex flex-col border items-center justify-center px-12 py-8 gap-4 bg-white  w-screen h-screen md:w-[500px] md:h-auto md:rounded-md">
        <img className="w-48" src="/bugbox.svg" alt="bugbox logo" />
        <h1 className="text-4xl font-semibold text-center">
          Log in or sign up
        </h1>
        <p className="text-gray-500 text-center">
          Use your email or other service to continue with us
        </p>
        {/* login options */}
        <div className="space-y-3 my-2 w-full text-lg">
          {options.map((option, index) => (
            <LoginOption
              key={index}
              logo={option.logo}
              optionName={option.optionName}
              handleClick={option.handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
