"use client";
import { Tabs, Tab, Card, CardBody, Button } from "@nextui-org/react";
import Image from "next/image";
import Style from "./project.module.css";

import projecimg from "@/src/assests/e-commerce.png";
import { useEffect, useState } from "react";

type Project = {
  id: string;
  name: string;
  description: string;
  image?: string;
  projectLink: string;
  type?: string;
};

const ProjectPage = () => {
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

  return (
    <div>
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
                          backgroundImage: `url(${project.image || projecimg.src})`,
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
                          backgroundImage: `url(${project.image || projecimg.src})`,
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
                          backgroundImage: `url(${project.image || projecimg.src})`,
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
    </div>
  );
};

export default ProjectPage;
