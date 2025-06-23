"use client";

import { Button } from "../ui/button";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { motion } from "motion/react";

export const CtaSection = () => {
  return (
    <div className="grid grid-cols-5 gap-6 w-full h-[24rem] bg-primary bg-[url('/images/cta-image.png')] bg-cover bg-center">
      <div className="col-start-2 col-span-3 flex flex-col items-center justify-center w-full">
        <div className="flex flex-col w-1/3 items-center text-white gap-4">
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="text-3xl text-center transform hover:scale-103 transition duration-300"
            >
              Faça agora o
            </motion.span>
            <motion.span
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="text-3xl text-center font-bold transform hover:scale-103 transition duration-300"
            >
              seu orçamento!
            </motion.span>
          </div>
          <div className="flex flex-col items-center transform hover:scale-103 transition duration-300">
            <div>
              {"Para falar conosco preencha o formulário"
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.1,
                      ease: "easeInOut",
                    }}
                    className="mr-2 inline-block text-md font-normal text-center"
                  >
                    {word}
                  </motion.span>
                ))}
            </div>
            <div>
              {"ao lado ou nos chame no WhatsApp."
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: index === 0 ? 0.5 : index * 0.1 + 0.5,
                      ease: "easeInOut",
                    }}
                    className="mr-2 inline-block text-md font-normal text-center"
                  >
                    {word}
                  </motion.span>
                ))}
            </div>
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
              variant="green"
              className="text-sm font-bold uppercase transform hover:scale-110 transition duration-400"
            >
              <IconBrandWhatsapp />
              Envie sua mensagem
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
