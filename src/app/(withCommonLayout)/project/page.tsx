"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Style from "./project.module.css";

import projecimg from "@/src/assests/e-commerce.png";
const ProjectPage = () => {
  return (
    <div>
      <div>
        <h2>Project</h2>

        <div className="flex flex-wrap gap-4">
          <Tabs variant="underlined">
            <Tab key={"react"} title={"React"}></Tab>
            <Tab key={"Next Js"} title={"Next js"}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
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
