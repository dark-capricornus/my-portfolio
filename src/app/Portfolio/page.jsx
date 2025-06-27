"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import data from "@/app/Data/data.json"; 

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Scrollable section */}
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-5xl md:text-7xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {data.projects.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-5xl px-4 text-white">
                  <div className="relative w-64 h-40 md:w-96 md:h-64 lg:w-[400px] lg:h-[280px] xl:w-[500px] xl:h-[350px] rounded-xl overflow-hidden shadow-lg border-4 border-white/20 flex-shrink-0">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-6 items-center md:items-start w-full max-w-xl">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-left drop-shadow-md">
                      {item.title}
                    </h1>
                    <p className="w-full text-base md:text-lg text-white/90 text-center md:text-left">
                      {item.desc}
                    </p>
                    <div className="flex gap-4 justify-center md:justify-start w-full">
                      <Link href={item.link}>
                        <button className="flex items-center gap-2 px-6 py-2 text-base md:px-8 md:py-3 md:text-lg bg-white text-gray-700 font-semibold rounded-lg shadow hover:bg-gray-100 transition-colors">
                          <Image
                            src="/github.png"
                            alt=""
                            width={24}
                            height={24}
                          />
                          View Repository
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-12 items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
          Do you have a project?
        </h1>
        <div className="relative flex items-center justify-center">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-48 h-48 md:w-[400px] md:h-[400px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#222">
              <textPath xlinkHref="#circlePath" className="text-lg md:text-2xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/Contact"
            className="w-14 h-14 md:w-24 md:h-24 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center text-lg md:text-2xl font-bold shadow-lg hover:bg-gray-800 transition-colors"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
