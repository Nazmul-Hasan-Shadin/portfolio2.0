"use client";
import Container from "@/src/components/modules/Container";
import Image from "next/image";

import Style from "./project.module.css";

import projecimg from "@/src/assests/e-commerce.png";
import { useEffect, useState } from "react";
import { Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";
import PForm from "@/src/components/ui/Form/PForm";
import PInput from "@/src/components/ui/Form/PInput";
import PTextArea from "@/src/components/ui/Form/PTextArea";

import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";

type Project = {
  id: string;
  name: string;
  description: string;
  images?: string;
  projectLink: string;
  type?: string;
};
interface Skill {
  name: string;
  image: string;
}

export default function Home() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-with-prisma.vercel.app/api/v1/skill"
        );
        const data = await response.json();
        setSkills(data?.data || []);
      } catch (error) {
        console.error("Error fetching skills:", error);
        setError("Failed to load skills. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);
  const designation = [
    "Full Stack Developer",
    "Mern Stack Developer",
    "React Developer",
    "JavaScript Developer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    const currentText = designation[currentIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayedText.length < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
        setSpeed(100);
      }, speed);
    } else if (isDeleting && displayedText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
        setSpeed(50);
      }, speed);
    } else if (!isDeleting && displayedText.length === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % designation.length);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, designation, currentIndex, speed]);

  // project fetch data

  const [projectData, setProjectData] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-with-prisma.vercel.app/api/v1"
        );
        const result = await response.json();
        setProjectData(result.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // ==========contact form handler

  const onSubmit: SubmitHandler<any> = (data) => {};

  return (
    <Container>
      <div className="pt-16">
        <h2 className="text-xl">Introduction</h2>

        <div className="flex flex-col justify-center items-center h-80">
          <h2 className="text-xl md:text-3xl lg:text-4xl">
            Nazmul Hasan Shadin
          </h2>

          <h1 className="lg:text-2xl text-blue-500 mt-4">
            I am <span className="font-bold">{displayedText}</span>
            <span className="blinking-cursor">|</span>
          </h1>
        </div>

        <style>{`
        .blinking-cursor {
          display: inline-block;
          width: 2px;
          background-color: black;
          margin-left: 2px;
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
      `}</style>

        {/* About Section */}
        <section className="mb-12">
          <h1 className="text-xl md:text-2xl font-bold mb-4">About Me</h1>
          <p className="text-xs md:text-lg text-gray-500 leading-7">
            Hello! I am{" "}
            <span className="font-semibold">Nazmul Hasan Shadin</span>, a
            passionate Full Stack Developer. I specialize in creating scalable
            and efficient web applications using modern technologies. With a
            strong foundation in both frontend and backend development, I strive
            to deliver high-quality solutions that meet user needs and business
            goals.
          </p>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold mb-8">My Skills</h2>

          {/* Error & Loading State */}
          {loading && <p>Loading skills...</p>}
          {error && <p className="text-red-500">{error}</p>}

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.length > 0 ? (
              skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center bg-white border shadow-md p-4 rounded-lg hover:shadow-lg transition duration-300"
                >
                  <Image
                    src={skill.image || "/images/default.png"}
                    alt={skill.name}
                    width={80}
                    height={80}
                    className="mb-3 rounded-lg object-contain"
                    priority
                  />
                  <p className="text-lg font-medium text-gray-800">
                    {skill.name}
                  </p>
                </div>
              ))
            ) : (
              <p>No skills available</p>
            )}
          </div>
        </section>

        {/* project section  */}
        <div>
          <h2>Projects</h2>

          <div className="flex flex-wrap gap-4">
            <Tabs variant="underlined">
              <Tab key={"react"} title={"React"}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">
                  {projectData.map((project) => (
                    <Card key={project.id}>
                      <CardBody>
                        <div
                          style={{
                            backgroundImage: `url(${project.images || projecimg.src})`,
                          }}
                          className={`${Style.projectImage} `}
                        ></div>
                        <div className="">
                          <h4>{project.name}</h4>
                          <p>{project.description}</p>
                          <small className="my-3">
                            {project.type || "FullStack"}
                          </small>{" "}
                        </div>
                        <Button
                          className=" mt-3 border border-primaryColor  bg-black text-primaryColor"
                          as="a"
                          href={project.projectLink}
                          target="_blank"
                          color="primary"
                        >
                          View Live
                        </Button>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </Tab>

              <Tab key={"Next Js"} title={"Next.js"}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">
                  {projectData.map((project) => (
                    <Card key={project.id}>
                      <CardBody>
                        <div
                          style={{
                            backgroundImage: `url(${project.images || projecimg.src})`,
                          }}
                          className={`${Style.projectImage}`}
                        ></div>
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                        <small className="my-3">
                          {project.type || "FullStack"}
                        </small>
                        <Button
                          className="  border border-primaryColor  bg-black text-primaryColor"
                          as="a"
                          href={project.projectLink}
                          target="_blank"
                          color="primary"
                        >
                          View Live
                        </Button>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </Tab>

              <Tab key={"Js"} title={"JavaScript"}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-2">
                  {projectData.map((project) => (
                    <Card key={project.id}>
                      <CardBody>
                        <div
                          style={{
                            backgroundImage: `url(${project.images || projecimg.src})`,
                          }}
                          className={`${Style.projectImage}`}
                        ></div>
                        <h4>{project.name}</h4>
                        <p>{project.description}</p>
                        <small className="my-3">
                          {project.type || "FullStack"}
                        </small>
                        <Button
                          className="  border border-primaryColor  bg-black text-primaryColor"
                          as="a"
                          href={project.projectLink}
                          target="_blank"
                          color="primary"
                        >
                          View Live
                        </Button>
                      </CardBody>
                    </Card>
                  ))}
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>

        {/*================== contact fomr =============== */}
        <div className="grid justify-items-center content-center h-screen">
          <h2 className="text-primaryColor">Lets Send Email </h2>
          <PForm onSubmit={onSubmit}>
            <div className="grid grid-cols-2  gap-4 ">
              <PInput label="First Name" name="firstName" />

              <PInput label="Last Name" name="lastName" />

              <div className="col-span-2">
                <PInput label="Email" name="email" />
              </div>

              <div className="col-span-2">
                <PTextArea label="Message" name="message" />
              </div>
            </div>

            <Button
              type="submit"
              className="bg-primaryColor mt-8 text-black w-full"
            >
              Send Mail
            </Button>
          </PForm>
        </div>
      </div>
    </Container>
  );
}
