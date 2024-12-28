"use client";
import Image from "next/image";
import React from "react";
import { CiFacebook } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { Button } from "@nextui-org/react";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";
import Container from "../Container";

const SelfBrandCard = () => {
  return (
    <Container>
      <div className="w-full max-w-[350px] h-auto border-gray-500 rounded-2xl border p-4 lg:p-6 mx-auto">
        <div className="flex flex-col justify-center items-center space-y-4">
          {/* Profile Image */}
          <div className="relative w-full h-auto">
            <Image
              alt="Developer Shadin image"
              width={250}
              height={211}
              className="rounded-full mx-auto"
              src="https://avatars.githubusercontent.com/u/111014373?v=4"
            />
          </div>

          {/* Name & Title */}
          <div className="text-center space-y-2">
            <h2 className="text-lg lg:text-2xl font-semibold">
              Nazmul Hasan Shadin
            </h2>
            <span className="text-sm lg:text-lg font-normal">
              Full Stack Developer
            </span>

            <span className="block text-xs lg:text-sm text-[#999999]">
              2024 Shadin All Rights Reserved
            </span>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 mb-4 justify-center">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#565656] flex items-center justify-center">
              <CiFacebook className="w-5 h-5" />
            </div>
            <Link href="https://github.com/Nazmul-Hasan-Shadin">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#565656] flex items-center justify-center">
                <IoLogoGithub className="w-5 h-5" />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/nazmul-hasan-shadin">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border border-[#565656] flex items-center justify-center">
                <CiLinkedin className="w-5 h-5" />
              </div>
            </Link>
          </div>

          {/* Hire Me Button */}
          <Button className="bg-primaryColor text-black hover:bg-black hover:border hover:text-primaryColor hover:font-bold hover:border-primaryColor w-2/3 md:w-full">
            <IoIosMail className="text-xl mr-2" /> Hire Me
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default SelfBrandCard;
