import Link from "next/link";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { BiFoodMenu } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
const NavigationMenu = () => {
  return (
    <div className="flex-col  border p-3 lg:p-5 rounded-2xl">
      <ul className=" flex flex-row lg:flex-col  gap-12 md:gap-16 lg:gap-16 text-xl">
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
            <FaRegUser />{" "}
          </li>
        </Link>
        <Link href={"/"}>
          <li>
            <MdMessage />{" "}
          </li>
        </Link>
        <Link href={"/"}>
          <li>
            <MdMessage />{" "}
          </li>
        </Link>
        <Link href={"/"}>
          <li>
            <MdMessage />{" "}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavigationMenu;
