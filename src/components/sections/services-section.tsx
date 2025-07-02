"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { db } from "@/database";
import { useServiceParams } from "@/hooks/use-service-params";

export const ServicesSection = () => {
  const services = db.services;

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
                  id={item.id.toString()}
                  title={item.name}
                  image={item.image}
                  description={item.call}
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
                  id={item.id.toString()}
                  color="red"
                  title={item.name}
                  image={item.image}
                  description={item.call}
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
                  id={item.id.toString()}
                  title={item.name}
                  image={item.image}
                  description={item.call}
                />
              </motion.span>
            ))}
        </div>
      </div>
    </div>
  );
};

const ServiceItem = ({
  id,
  title,
  image,
  description,
  color = "blue",
}: {
  id: string;
  title: string;
  image: string;
  description: string;
  color?: "blue" | "red";
}) => {
  const { setParam } = useServiceParams();

  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: 0.3,
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className={cn(
          color === "blue" && "border border-secondary",
          color === "red" && "border border-primary/70",
          "flex flex-col w-[24rem] h-[26rem] rounded-2xl overflow-hidden"
        )}
      >
        <div
          className={cn(
            "relative flex flex-col items-center justify-center w-full h-auto aspect-4/3 overflow-hidden rounded-b-3xl text-white"
          )}
        >
          <div
            className={cn("absolute inset-0 z-0")}
            style={backgroundImageStyle}
          ></div>
          <div
            className={cn(
              "absolute inset-0 z-0",
              color === "blue" && "bg-secondary",
              color === "red" && "bg-primary",
              "mix-blend-color opacity-70"
            )}
          ></div>
          <div className="relative z-10 flex items-center justify-center h-full w-full">
            <h3 className="text-3xl font-semibold text-white text-center w-3/4">
              {title}
            </h3>
          </div>
        </div>
        <div className="p-4">
          <p className="text-md text-white">{description}</p>
        </div>
      </div>
      <Button
        type="button"
        variant="white"
        className="uppercase font-bold -mt-5 transform hover:-translate-y-1 transition duration-400"
        onClick={() => setParam({ serviceId: id })}
      >
        Ver detalhes
      </Button>
    </div>
  );
};
