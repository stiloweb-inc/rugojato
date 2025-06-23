"use client";

import { motion } from "motion/react";

export const AboutSection = () => {
  return (
    <div className="flex items-center justify-center gap-12 w-full h-[24rem]">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
        }}
      >
        <div className="bg-[url('/images/about.png')] bg-center bg-cover w-[32rem] h-[18rem] border border-primary rounded-bl-4xl rounded-tr-4xl shadow-[-8px_8px_0px_-1px_#eb1b2b] transform hover:scale-105 transition duration-300"></div>
      </motion.div>
      <div className="flex flex-col items-center justify-center w-1/3 gap-4">
        <div className="flex flex-col items-start justify-center gap-6">
          <motion.span
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="text-4xl font-semibold text-primary transform hover:scale-105 transition duration-300"
          >
            Sobre nós
          </motion.span>
          <div className="flex flex-col text-md text-secondary gap-4">
            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="transform hover:scale-103 transition duration-300"
            >
              <p>
                Somos uma empresa idealizada com o propósito de oferecer ao
                cliente um <strong>trabalho técnico</strong> e de
                <strong>excelência</strong> no ramo de pintura e revestimentos.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                delay: 0.4,
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="transform hover:scale-103 transition duration-300"
            >
              <p>
                Nossa equipe é composta por profissionais com mais de{" "}
                <strong>20 anos de experiência no ramo</strong>, com diversas
                capacitações no segmento.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};
