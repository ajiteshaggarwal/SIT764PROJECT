import { Link } from "react-router-dom";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

function Navbar() {
  const navOptions = [
    {
      to: "/",
      title: "Home",
      colour: "#BBF5F8",
    },
    {
      to: "/about",
      title: "About",
      colour: "#F1EEB6",
    },
    {
      to: "/contact",
      title: "Contact",
      colour: "#CDC8F6",
    },
    {
      to: "/login",
      title: "Login",
      colour: "#FF5412",
    },
    {
      to: "/blogs", // New Blogs button
      title: "Blogs",
      colour: "#FFD700",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex p-4 items-center bg-black justify-between ">
        <img src="/bugbox.svg" alt="Bugbox logo" className="w-36" />

        {menuOpen ? (
          <RxCross2
            onClick={handleMenuOpen}
            size={36}
            className="md:hidden text-white"
          />
        ) : (
          <IoIosMenu
            onClick={handleMenuOpen}
            size={36}
            className="md:hidden text-white"
          />
        )}

        {/* larger screens nav options */}
        <div className="ml-auto hidden  md:flex gap-8 text-lg font-semibold">
          {navOptions.map((option, index) => (
            <Link key={index} to={option.to}>
              <p style={{ color: `${option.colour}` }}>{option.title}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* mobile nav options */}
      <div
        className={`md:hidden font-semibold text-lg absolute bg-black transition-all duration-500 flex flex-col w-full gap-8 min-h-screen z-50 py-8 ${
          menuOpen ? "left-0" : "-left-[1200px]"
        }`}
      >
        {navOptions.map((option, index) => (
          <Link key={index} to={option.to}>
            <p style={{ color: `${option.colour}` }}>{option.title}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Navbar;
