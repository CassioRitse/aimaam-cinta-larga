export const AboutSection = () => {
  return (
    <section
      className="relative w-full bg-fixed bg-center bg-cover py-20 text-black"
      style={{
        backgroundImage: "url('/images/aldeia.jpg')",
        backgroundSize: "cover",
      }}
      aria-label="Imagem de fundo representando a aldeia"
    >
      {/* Camada de sobreposição para melhor contraste */}
      <div className="absolute inset-0 bg-white bg-opacity-70"></div>

      {/* Conteúdo */}
      <div className="relative max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4 text-green-900">
          Sobre a Aldeia
        </h2>
        <p className="text-lg leading-relaxed text-gray-800">
          A Aldeia Piu, localizada na <strong>Reserva Roosevelt</strong>, abriga
          a cultura do povo Cinta Larga. Nossa tribo preserva{" "}
          <strong>tradições ancestrais</strong>, mantendo uma forte conexão com
          a natureza. Cada ritual e canto carrega a{" "}
          <strong>história do nosso povo</strong>, transmitindo sabedoria de
          geração em geração.
        </p>
      </div>
    </section>
  );
};
