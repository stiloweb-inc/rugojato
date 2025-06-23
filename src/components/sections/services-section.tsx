"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Button } from "../ui/button";

export const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Pintura P.U.",
      description:
        "A tinta PU é uma tinta à base de resinas poliuretano, bicomponente. A tinta poliuretano possui ótima resistência a intempéries, boa dureza e flexibilidade e é indicada para pintura em ambientes externos sujeitos à ação solar, pois ela possui alta resistencia aos raios solares.",
    },
    {
      id: 2,
      title: "Inspeções Técnicas",
      description:
        "A inspeção visual de pintura busca manter a boa condição da pintura industrial. O processo analisa se todas as exigências técnicas das normas de pintura foram executadas com sucesso.",
    },
    {
      id: 3,
      title: "Jateamento abrasivo",
      description:
        "Muito utilizado no setor industrial, no preparo de superfícies metálicas que vão receber pintura, o jateamento é um processo abrasivo de alta pressão e velocidade, que confere o tratamento superficial de peças metálicas e uniformização de rugosidades.",
    },
    {
      id: 4,
      title: "Impermeabilização",
      description:
        "Aplicamos os melhores produtos do mercado para impermeabilização de tanques de contenção, reservatórios de água, E.T.E, E.T.A, tratamento em telhados.",
    },
    {
      id: 5,
      title: "Revestimento de pisos industriais",
      description:
        "O revestimento tinta epóxi possibilita um piso com alta resistência química, abrasiva e mecânica, além das elevadas propriedades mecânicas (compressão, tração, flexão, impacto e abrasão) e a resistência a choques térmicos.",
    },
    {
      id: 6,
      title: "Pintura epóxi",
      description:
        "Técnica amplamente utilizada na construção civil e é responsável por dar acabamento a pisos de garagens, quadras poliesportivas, salas de cirurgia, clínicas hospitalares e indústria alimentícia.",
    },
    {
      id: 7,
      title: "Hidrojateamento de baixa pressão",
      description:
        "O hidrojateamento de baixa pressão é indicado para limpeza e desentupimento de estruturas frágeis, evitando que eles se quebrem ou trinquem. O de alta pressão, é muito utilizado após reformas e construções, já que a pressão da água facilita remoção de resíduos.",
    },
    {
      id: 8,
      title: "Gerenciamento de pintura industrial",
      description:
        "A tinta PU é uma tinta à base de resinas poliuretano, bicomponente. A tinta poliuretano possui ótima resistência a intempéries, boa dureza e flexibilidade e é indicada para pintura em ambientes externos sujeitos à ação solar, pois ela possui alta resistência aos raios solares.",
    },
  ];

  return (
    <div className="grid grid-cols-5 gap-6 w-full bg-[#010C14] py-8">
      <div className="col-start-2 col-span-3 flex flex-col gap-8 w-full items-center justify-center">
        <div className="flex gap-4 w-full items-center justify-center">
          {services
            .filter((item) => item.id <= 3)
            .map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                <ServiceItem
                  title={item.title}
                  description={item.description}
                />
              </motion.span>
            ))}
        </div>
        <div className="flex gap-4 w-full items-center justify-center">
          {services
            .filter((item) => item.id <= 6 && item.id >= 4)
            .map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                <ServiceItem
                  color="red"
                  title={item.title}
                  description={item.description}
                />
              </motion.span>
            ))}
        </div>
        <div className="flex gap-4 w-full items-center justify-center">
          {services
            .filter((item) => item.id <= 8 && item.id >= 7)
            .map((item, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                <ServiceItem
                  title={item.title}
                  description={item.description}
                />
              </motion.span>
            ))}
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({
  title,
  description,
  color = "blue",
}: {
  title: string;
  description: string;
  color?: "blue" | "red";
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          color === "blue" && "border border-secondary",
          color === "red" && "border border-primary/70",
          "flex flex-col w-[24rem] h-[32rem] rounded-2xl overflow-hidden"
        )}
      >
        <div
          className={cn(
            color === "blue" &&
              "bg-[url('/images/service-image-1.png')] bg-cover bg-center opacity-70 bg-[#0a263a] border border-secondary/40",
            color === "red" &&
              "bg-[url('/images/service-image-2.png')] bg-cover bg-center opacity-70 bg-[#3a0a0a] border border-primary/40",
            "flex flex-col items-center justify-center w-full h-[18rem] rounded-b-3xl text-white"
          )}
        >
          <h3 className="text-3xl font-semibold text-white text-center w-3/4">
            {title}
          </h3>
        </div>
        <div className="p-4">
          <p className="text-md text-white">{description}</p>
        </div>
      </div>
      <Button
        variant="white"
        className="uppercase font-bold -mt-5 transform hover:-translate-y-1 transition duration-400"
      >
        Solicite uma cotação
      </Button>
    </div>
  );
};
