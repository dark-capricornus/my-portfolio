"use client";
import { useEffect, useState } from "react";
import greetings from "@/app/Data/greetings.json";

const TypingGreeting = () => {
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [blinking, setBlinking] = useState(true);

  const fullSentence = greetings[sentenceIndex].sentence;

  // Typing logic
  useEffect(() => {
    if (charIndex <= fullSentence.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullSentence.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const hold = setTimeout(() => {
        setCharIndex(0);
        setDisplayText("");
        setSentenceIndex((prev) => (prev + 1) % greetings.length);
      }, 2000);
      return () => clearTimeout(hold);
    }
  }, [charIndex, fullSentence]);

  // Cursor blinking logic
  useEffect(() => {
    const blink = setInterval(() => {
      setBlinking((prev) => !prev);
    }, 500);
    return () => clearInterval(blink);
  }, []);

  return (
    <h1 className="text-2xl md:text-4xl font-bold font-mono text-center px-4">
      {displayText}
      <span
        className={`${
          blinking ? "opacity-100" : "opacity-0"
        } inline-block w-[1ch] transition-opacity duration-300`}
      >
        |
      </span>
    </h1>
  );
};

export default TypingGreeting;
