"use client";

import { cn } from "@/lib/utils";
import { IconDiamond, IconEye, IconTargetArrow } from "@tabler/icons-react";
import { motion } from "motion/react";

export const GrowingSection = () => {
  return (
    <div className="grid grid-cols-5 w-full h-[36rem] bg-primary">
      <div className="col-start-2 col-span-3 flex flex-col w-full items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="flex items-center justify-start w-full"
        >
          <GrowingSectionItem
            icon={<IconTargetArrow className="text-white size-8" />}
            title="Missão"
            description="Agregar valor ao negócio de nossos clientes, levando o melhor custo benefício sem agredir o meio ambiente."
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="flex items-center justify-end w-full"
        >
          <GrowingSectionItem
            icon={<IconEye className="text-white size-8" />}
            title="Visão"
            description="Ser referência nacional no segmento de pinturas e revestimentos."
            position="right"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: "easeInOut",
          }}
          className="flex items-center justify-start w-full"
        >
          <GrowingSectionItem
            icon={<IconDiamond className="text-white size-8" />}
            title="Valores"
            description="Ética, pontualidade, e transparência são os nossos valores, bem como a valorização de nossos colaboradores."
          />
        </motion.div>
      </div>
    </div>
  );
};

const GrowingSectionItem = ({
  icon,
  title,
  description,
  position = "left",
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
  position?: "right" | "left";
}) => {
  return (
    <div
      className={cn(
        position === "left" && "items-start",
        position === "right" && "items-end",
        "flex flex-col w-full gap-4"
      )}
    >
      <div className="flex items-center gap-2">
        <motion.span
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            ease: "easeInOut",
          }}
        >
          {icon}
        </motion.span>
        <motion.span
          initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.3,
            ease: "easeInOut",
          }}
          className="mr-2 inline-block text-3xl font-semibold text-white"
        >
          {title}
        </motion.span>
      </div>
      <div className="flex items-center p-6 rounded-2xl rounded-tl-none bg-white ">
        {`${description}`.split(" ").map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: index * 0.1,
              ease: "easeInOut",
            }}
            className="mr-1 inline-block text-primary font-medium"
          >
            {word}
          </motion.span>
        ))}
      </div>
    </div>
  );
};
