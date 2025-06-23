import { cn } from "@/lib/utils";
import { IconDiamond, IconEye, IconTargetArrow } from "@tabler/icons-react";

export const GrowingSection = () => {
  return (
    <div className="grid grid-cols-5 w-full h-[36rem] bg-primary">
      <div className="col-start-2 col-span-3 flex flex-col w-full items-center justify-center">
        <GrowingSectionItem
          icon={<IconTargetArrow className="text-white size-8" />}
          title="Missão"
          description="Agregar valor ao negócio de nossos clientes, levando o melhor custo benefício sem agredir o meio ambiente."
        />
        <GrowingSectionItem
          icon={<IconEye className="text-white size-8" />}
          title="Visão"
          description="Ser referência nacional no segmento de pinturas e revestimentos."
          position="right"
        />
        <GrowingSectionItem
          icon={<IconDiamond className="text-white size-8" />}
          title="Valores"
          description="Ética, pontualidade, e transparência são os nossos valores, bem como a valorização de nossos colaboradores."
        />
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
        {icon}
        <h3 className="text-3xl font-semibold text-white">{title}</h3>
      </div>
      <div className="flex flex-col p-6 rounded-2xl rounded-tl-none bg-white w-2/3">
        <span className="text-primary font-medium">{description}</span>
      </div>
    </div>
  );
};
