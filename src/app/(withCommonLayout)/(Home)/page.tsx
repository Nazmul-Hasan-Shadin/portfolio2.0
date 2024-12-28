"use client";
import Container from "@/src/components/modules/Container";
import React, { useState, useEffect } from "react";

export default function Home() {
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
      </div>
    </Container>
  );
}
