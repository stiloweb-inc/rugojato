import { Button } from "../ui/button";

export const HeroSection = () => {
  return (
    <div className="grid grid-cols-2 w-full h-[36rem] bg-[#085E9B] bg-[url('/images/hero.png')] bg-center bg-cover">
      <div className="flex flex-col items-center justify-center w-full gap-4">
        <div className="flex flex-col items-start justify-center w-2/3 gap-2">
          <div className="flex flex-col text-3xl text-white font-light">
            <p>Um novo conceito em</p>
            <p>
              <strong className="font-semibold">pinturas industriais</strong> e{" "}
              <br />
              <strong className="font-semibold">
                revestimentos epóxi em pisos
              </strong>
            </p>
          </div>
          <Button size="lg" className="uppercase font-bold">
            Solicite uma cotação
          </Button>
        </div>
      </div>
    </div>
  );
};
