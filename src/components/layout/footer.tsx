import { IconMessages, IconMapPinFilled } from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="flex flex-col justify-between w-full h-[18rem] bg-[#0a263a]">
      <div className="grid grid-cols-5 w-full">
        <div className="col-start-3 flex flex-col items-center w-full pt-12">
          <div className="flex flex-col w-full items-start gap-2">
            <div className="flex items-center gap-2">
              <IconMapPinFilled className="text-white size-4" />
              <h1 className="text-white font-semibold">Endereço</h1>
            </div>
            <p className="text-white text-sm">
              R. Vc 26, 38 - Conj. Vera Cruz <br /> Goiânia - GO, 74493-440
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full items-center pt-12">
          <div className="flex flex-col w-full items-start gap-2">
            <div className="flex items-center gap-2">
              <IconMessages className="text-white size-4" />
              <h1 className="text-white font-semibold">Contato</h1>
            </div>
            <div className="flex flex-col">
              <p className="text-white text-sm">
                <strong>Email:</strong> lidio@rugojato.com.br
              </p>
              <p className="text-white text-sm">
                <strong>Telefone:</strong> 62 99984-4762
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 h-12 bg-[#04111a] text-white">
        <div className="grid grid-cols-3 w-full">
          <span className="text-sm col-start-2 text-center">
            2025 © Todos os direitos reservados a Rugojato
          </span>
          <div className="flex items-center justify-center -mb-1">
            <img src="/sw.png" alt="sw" className="w-20" />
          </div>
        </div>
      </div>
    </footer>
  );
};
