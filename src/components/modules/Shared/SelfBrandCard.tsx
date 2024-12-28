"use client";
import Image from "next/image";
import React from "react";
import { CiFacebook } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { Button } from "@nextui-org/react";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

const SelfBrandCard = () => {
  return (
    <div className="lg:max-w-[350px] h-[606px] lg:h-[660px] border-gray-500 rounded-2xl border ">
      <div className="flex flex-wrap  p-5  justify-between items-center">
        <h1 className="md:text-2xl lg:text-3xl">Shadin</h1>
        <h1 className="text-sm  text-blue-300">
          Developer <br /> & designer
        </h1>
      </div>
      <div className=" lg:p-7 flex flex-col items-center  space-y-4  ">
        <Image
          alt="Developer Shadin images"
          width={250}
          height={211}
          className="rounded-large mx-auto"
          src={
            "https://avatars.githubusercontent.com/u/111014373?…00&u=ba39b33fa6e1dae3e5e46cb00eb9c986b03a1439&v=4"
          }
        />
        <div>
          <h2 className=" text-medium lg:text-xl font-normal  ">
            Nazmul Hasan Shadin
          </h2>
          <span className=" text-[12px] lg:text-xl font-normal inline-block">
            FUll Stack Developers
          </span>

          <span className="block text-sm my-4 text-[#999999]">
            2024 Shadin All Right Reserved
          </span>
        </div>

        {/* =========logo section============= */}

        <div className="logo flex gap-3  mb-4">
          <div className="w-10 h-10 lg:w-12 lg:h-12  rounded-full border border-[#565656] flex items-center justify-center">
            <CiFacebook className=" w-5 h-5" />
          </div>
          <Link href={"https://github.com/Nazmul-Hasan-Shadin"}>
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#565656] flex items-center justify-center">
              <IoLogoGithub className="w-5 h-5" />
            </div>
          </Link>
          <Link href={"https://www.linkedin.com/in/nazmul-hasan-shadin"}>
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#565656] flex items-center justify-center">
              <CiLinkedin className=" w-5 h-5" />
            </div>
          </Link>
        </div>

        <Button className="bg-primaryColor  text-black hover:bg-black hover:border hover:text-primaryColor hover:font-bold hover:border-primaryColor w-2/3 md:w-full    ">
          <IoIosMail className="text-xl" /> Hire Me
        </Button>
      </div>
    </div>
  );
};

export default SelfBrandCard;
