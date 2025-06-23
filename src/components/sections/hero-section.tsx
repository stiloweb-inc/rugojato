"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { motion } from "motion/react";

export const HeroSection = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <div className="grid grid-cols-2 w-full h-dvh bg-[#085E9B] bg-[url('/images/hero.png')] bg-center bg-cover pt-[6rem]">
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <div className="flex flex-col items-start justify-center w-2/3 gap-2">
          <div className="flex flex-col text-white font-light">
            <h1 className="relative z-10 mx-auto text-3xl font-light w-full text-white">
              {"Um novo conceito em".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <h1 className="relative z-10 mx-auto text-3xl font-semibold w-full text-white">
              {"pinturas industriais e".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  onViewportEnter={() => {
                    if (!isVisible) {
                      setTimeout(() => setVisible(true), 1000);
                    }
                  }}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index === 0 ? 0.5 : index * 0.1 + 0.5,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <h1 className="relative z-10 mx-auto text-3xl font-semibold w-full text-white">
              {"revestimentos epóxi em pisos".split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index === 0 ? 0.8 : index * 0.1 + 0.8,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block "
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: 1,
              ease: "easeInOut",
            }}
          >
            <Button
              size="lg"
              className="uppercase font-bold transform hover:scale-110 transition duration-400"
            >
              Solicite uma cotação
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
