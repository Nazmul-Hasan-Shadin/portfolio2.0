import Link from "next/link";
import React from "react";
import { IoMdHome } from "react-icons/io";
import { BiFoodMenu } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
const NavigationMenu = () => {
  return (
    <div className="flex-col  border p-5 rounded-2xl">
      <ul className=" flex flex-col  gap-16 text-xl">
        <Link href={"/"}>
          <li>
            <IoMdHome />{" "}
          </li>
        </Link>
        <Link href={"/"}>
          <li>
            <FaRegUser />{" "}
          </li>
        </Link>
        <Link href={"/"}>
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
