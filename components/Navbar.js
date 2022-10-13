import React from "react";
import Image from "next/image";
import Link from "next/link";
import googleLogo from "../public/googlelogo.png";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { RiMoonClearFill } from "react-icons/ri";
import { BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const Navbar = (props) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () =>
    theme == "light" ? setTheme("dark") : setTheme("light");


  return (
    <div className="h-24 flex items-center shadow-sm dark:bg-[#202124]">
      <div className="logo ml-16">
        <Link href={"/"}>
          <Image src={googleLogo} width={90} height={30} className={`${theme == "light" && "brightness-0"}`} />
        </Link>
      </div>
      <div className="input ml-14 relative">
        <input
          type="text"
          className=" w-[540px] h-12 indent-5 rounded-full shadow-lg"
          placeholder="Search"
          ref={props.inputRef}
        />
        <AiOutlineClose className="absolute top-4 right-20 text-xl fill-[#757b80]" onClick={props.handleCloseClick} />
        <div className="line w-[1px] h-6 bg-[#757b80] absolute top-3 right-16"></div>
        <AiOutlineSearch
          className="absolute top-4 right-7 text-xl fill-[#8ab4f8]"
          onClick={props.handleSearchClick}
        />
      </div>
      <div className="rightPart absolute right-7 flex items-center space-x-8">
        <div className="toggleBtn mr-10" onClick={toggleTheme}>
          <RiMoonClearFill className="text-2xl fill-white hidden dark:block" />
          <BsFillSunFill className="text-2xl fill-[#8ab4f8] block dark:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
