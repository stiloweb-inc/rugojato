"use client";

import { generateWhatsAppLink } from "@/utils/generate-whatsapp-link";
import { Button } from "../ui/button";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { motion } from "motion/react";
import Link from "next/link";

export const CtaSection = () => {
  const sendMessageLink = generateWhatsAppLink(
    "Olá, gostaria de saber mais sobre os serviços da RugoJato."
  );

  return (
    <div className="grid grid-cols-5 gap-6 w-full h-[48rem] bg-primary bg-[url('/images/cta-image.png')] bg-cover bg-center">
      <div className="col-start-2 col-span-3 flex flex-col items-center justify-center w-full">
        <div className="flex flex-col w-2/3 items-center text-white gap-4">
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
            <div className="w-4/5">
              <motion.span
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.5,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block text-md font-normal text-center"
              >
                Trabalhamos para entregar aos nossos clientes o mais alto padrão
                de satisfação, comodidade e segurança em nossos contratos de
                prestação de serviços.
              </motion.span>
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
              asChild
              size="lg"
              variant="green"
              className="text-sm font-bold uppercase transform hover:scale-110 transition duration-400"
            >
              <Link target="_blank" href={sendMessageLink}>
                <IconBrandWhatsapp />
                Envie sua mensagem
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
