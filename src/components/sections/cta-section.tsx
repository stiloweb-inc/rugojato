import { Button } from "../ui/button";
import { IconBrandWhatsapp } from "@tabler/icons-react";

export const CtaSection = () => {
  return (
    <div className="grid grid-cols-5 gap-6 w-full h-[24rem] bg-primary bg-[url('/images/cta-image.png')] bg-cover bg-center">
      <div className="col-start-2 col-span-3 flex flex-col items-center justify-center w-full">
        <div className="flex flex-col w-1/3 text-white gap-4">
          <h3 className="text-3xl text-center">
            Faça agora o <br />
            <strong>seu orçamento</strong>!
          </h3>
          <p className="text-md font-normal text-center">
            Para falar conosco preencha o formulário ao lado ou nos chame no
            WhatsApp.
          </p>
          <Button
            size="lg"
            variant="green"
            className="text-sm font-bold uppercase"
          >
            <IconBrandWhatsapp />
            Envie sua mensagem
          </Button>
        </div>
      </div>
    </div>
  );
};
