"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import TypingGreeting from "./components/greetings";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.png"
            alt="Hero Image"
            fill
            className="object-contain"
          />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 justify-center">
          {/* Typing Greeting aligned left */}
          <div className="w-full text-left self-start">
            <TypingGreeting />
          </div>

          {/* Description */}
          <p className="md:text-xl text-left">
            Welcome to my digital Canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>

          {/* Buttons */}
          <div className="w-full flex gap-4">
            <Link
              className="p-4 rounded-lg ring-1 ring-black bg-black text-white hover:bg-transparent hover:text-black transition"
              href="/Portfolio"
            >
              Project Gallery
            </Link>
            <Link
              className="p-4 rounded-lg ring-1 ring-black hover:bg-black hover:text-white transition"
              href="/Contact"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
