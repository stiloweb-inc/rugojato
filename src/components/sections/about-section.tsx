export const AboutSection = () => {
  return (
    <div className="flex items-center justify-center gap-6 w-full h-[24rem]">
      <div className="bg-[url('/images/about.png')] bg-center bg-cover w-[32rem] h-[18rem] rounded-bl-4xl rounded-tr-4xl"></div>
      <div className="flex flex-col items-center justify-center w-1/3 gap-4">
        <div className="flex flex-col items-start justify-center gap-6">
          <h1 className="text-4xl font-semibold text-primary">Sobre nós</h1>
          <div className="flex flex-col text-md text-secondary gap-4">
            <p>
              Somos uma empresa idealizada com o propósito de oferecer ao
              cliente um <strong>trabalho técnico</strong> e de
              <strong>excelência</strong> no ramo de pintura e revestimentos.
            </p>
            <p>
              Nossa equipe é composta por profissionais com mais de{" "}
              <strong>20 anos de experiência no ramo</strong>, com diversas
              capacitações no segmento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
