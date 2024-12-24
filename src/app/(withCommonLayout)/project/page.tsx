"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Style from "./project.module.css";

import projecimg from "@/src/assests/e-commerce.png";
const ProjectPage = () => {
  const variants = ["solid", "underlined", "bordered", "light"];
  return (
    <div>
      <div>
        <h2>Project</h2>

        <div className="flex flex-wrap gap-4">
          <Tabs variant="underlined">
            <Tab key={"react"} title={"React"}></Tab>
            <Tab key={"Next Js"} title={"Next js"}>
              <div className="flex gap-5 ">
                <Card>
                  <CardBody>
                    <div
                      style={{ backgroundImage: `url(${projecimg.src})` }}
                      className={`${Style.projectImage}`}
                    ></div>
                  </CardBody>
                </Card>

                <Card>
                  <CardBody>
                    <div
                      style={{ backgroundImage: `url(${projecimg.src})` }}
                      className={`${Style.projectImage}`}
                    ></div>
                  </CardBody>
                </Card>
              </div>
            </Tab>
            <Tab key={"Js"} title={"Javascript"}></Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
