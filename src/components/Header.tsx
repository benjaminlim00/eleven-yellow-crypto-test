import React from "react";
import { RiBitCoinLine, RiMenu3Line } from "react-icons/ri";
export const Header: React.FunctionComponent = () => {
  return (
    <div className="py-6 px-4 md:px-16 mb-4 flex items-center bg-accent md:bg-white text-white md:text-black justify-between">
      <div className="flex items-center">
        <RiBitCoinLine className="text-3xl lg:text-4xl" />
        <h1 className="ml-1 md:ml-2 uppercase text-lg lg:text-2xl tracking-wide">
          crypto rate checker
        </h1>
      </div>

      {/* mobile only */}
      <div className="md:hidden">
        <RiMenu3Line className="text-3xl lg:text-4xl" />
      </div>

      {/* web only */}
      <div className="hidden md:block md:flex md:items-center">
        <h1 className="text-md lg:text-lg tracking-wide cursor-pointer hover:text-primary transition-colors duration-300 ease-in-out">
          About
        </h1>
        <h1 className="ml-12 text-md lg:text-lg tracking-wide cursor-pointer hover:text-primary transition-colors duration-300 ease-in-out">
          FAQ
        </h1>
        <h1 className="ml-12 px-4 py-1 text-md lg:text-lg tracking-wide cursor-pointer transition-colors duration-300 ease-in-out text-white bg-accent rounded-full hover:bg-secondary hover:text-black">
          Contact
        </h1>
      </div>
    </div>
  );
};
