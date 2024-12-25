"use client";
import { Card, CardBody } from "@nextui-org/react";
import React from "react";
import { VscFileSymlinkDirectory } from "react-icons/vsc";
import { FaRegCalendarAlt } from "react-icons/fa";
import Image from "next/image";
import educatioImage from "@/src/assests/education.png";
import { useRouter } from "next/router";
import Link from "next/link";

const BlogCard = () => {
  return (
    <Link href={`/blog/34`}>
      <Card isPressable className="p-3">
        <CardBody className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Text Section */}
          <div className="lg:col-span-8 order-2 lg:order-1">
            <h2 className="text-md lg:text-xl">
              Take IELTS Preparation from home without any hassle Free PDF book
            </h2>
            <p className="text-sm text-gray-500">
              IELTS nia gatagit korte agelea sob tehke a js omossp s
            </p>

            <div className="flex items-center gap-7 mt-5">
              <div className="flex gap-2 text-gray-500 items-center text-sm">
                <FaRegCalendarAlt /> Jun 1-10, 2023
              </div>

              <div className="flex gap-2 text-gray-500 items-center text-sm">
                <VscFileSymlinkDirectory /> Academic
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:col-span-4 order-1 lg:order-2">
            <Image
              width={308}
              alt="education image"
              height={180}
              src={educatioImage}
              className="object-cover w-full"
            />
          </div>
        </CardBody>
      </Card>
    </Link>
  );
};

export default BlogCard;
