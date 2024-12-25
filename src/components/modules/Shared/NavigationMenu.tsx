import Link from "next/link";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { BiFoodMenu } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { FaRegPenToSquare } from "react-icons/fa6";
import { IoTerminal } from "react-icons/io5";
const NavigationMenu = () => {
  return (
    <div className="flex-col  border p-1 md:p-2 lg:p-5 rounded-md md:rounded-2xl">
      <ul className=" flex flex-col gap-16 justify-between  lg:flex-col   md:gap-16 lg:gap-16 text-xl">
        <Link href={"/"}>
          <li>
            <IoMdHome />{" "}
          </li>
        </Link>
        <Link href={"/about"}>
          <li title="About">
            <FaRegUser />{" "}
          </li>
        </Link>
        <Link href={"/project"}>
          <li>
            <IoTerminal />{" "}
          </li>
        </Link>
        <Link href={"/blog"}>
          <li>
            <FaRegPenToSquare />
          </li>
        </Link>
        <Link href={"/"}>
          <li>
            <MdMessage />{" "}
          </li>
        </Link>
        <Link href={"/contact"}>
          <li>
            <MdMessage />{" "}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavigationMenu;
