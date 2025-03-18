export const AboutSection = () => {
  return (
    <section
      className="relative w-full bg-fixed bg-center bg-cover py-20 text-black"
      style={{ backgroundImage: "url('/images/aldeia.jpg')" }}
    >
      <div className="absolute inset-0 bg-white "></div>

      <div className="relative max-w-4xl mx-auto text-center px-6 ">
        <h2 className="text-4xl font-bold mb-4">Sobre a Aldeia</h2>
        <p className="text-lg leading-relaxed">
          Nossa tribo preserva tradições ancestrais, conectando-se com a
          natureza e transmitindo sabedoria de geração em geração. Aqui, cada
          ritual e canto carrega a história do nosso povo, e cada amanhecer traz
          novas esperanças para o futuro.
        </p>
      </div>
    </section>
  );
};
