"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  image: string;
}

const AboutPage = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-with-prisma.vercel.app/api/v1/skill"
        );
        const data = await response.json();
        setSkills(data.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div className="container mx-auto px-6 py-16">
      {/* About Section */}
      <section className="mb-12">
        <h1 className="text-xl md:text-2xl font-bold mb-4">About Me</h1>
        <p className="text-medium md:text-lg text-gray-700 leading-7">
          Hello! I am <span className="font-semibold">Nazmul Hasan Shadin</span>
          , a passionate Full Stack Developer. I specialize in creating scalable
          and efficient web applications using modern technologies. With a
          strong foundation in both frontend and backend development, I strive
          to deliver high-quality solutions that meet user needs and business
          goals.
        </p>
      </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-xl md:text-2xl lg:text-2xxl font-bold  mb-8">
          My Skills
        </h2>
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
                  className="mb-3"
                />
                <p className="text-lg font-medium text-gray-800">
                  {skill.name}
                </p>
              </div>
            ))
          ) : (
            <p>Loading skills...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
