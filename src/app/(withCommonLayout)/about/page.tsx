import Image from "next/image";
import React from "react";

const AboutPage = () => {
  const skills = [
    { name: "HTML", image: "/images/html.png" },
    { name: "CSS", image: "/images/css.png" },
    { name: "JavaScript", image: "/images/javascript.png" },
    { name: "React", image: "/images/react.png" },
    { name: "Next.js", image: "/images/nextjs.png" },
    { name: "Node.js", image: "/images/nodejs.png" },
    { name: "Tailwind CSS", image: "/images/tailwind.png" },
    { name: "MongoDB", image: "/images/mongodb.png" },
  ];

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
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center bg-white border shadow-md p-4 rounded-lg hover:shadow-lg transition duration-300"
            >
              <Image
                src={skill.image}
                alt={skill.name}
                width={80}
                height={80}
                className="mb-3"
              />
              <p className="text-lg font-medium text-gray-800">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
