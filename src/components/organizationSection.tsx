"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const OrganizationSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Não dispara apenas uma vez
    threshold: 0.65, // Ativa quando 65% da seção estiver visível
  });

  return (
    <div ref={ref} className="w-full py-20 bg-gray-100 text-center">
      <section className="max-w-6xl gap-2 mx-auto px-6 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
        <div className="w-full md:w-1/2">
          <div className="relative py-20 px-6 w-full">
            <h2 className="text-4xl font-bold mb-4 text-start">
              Sobre a Aldeia
            </h2>
            <p className="text-lg leading-relaxed text-justify">
              Nossa tribo preserva tradições ancestrais, conectando-se com a
              natureza e transmitindo sabedoria de geração em geração. Aqui,
              cada ritual e canto carrega a história do nosso povo, e cada
              amanhecer traz novas esperanças para o futuro.
            </p>
          </div>
          <Image
            className="w-full"
            src={"/carousel/photo1.jpg"}
            width={500}
            height={500}
            alt="texto"
          />
        </div>

        {/* Seção Organização Mantenedora */}
        <motion.div
          className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">Organização Mantenedora</h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Somos uma organização dedicada a preservar as tradições, a cultura e
            o bem-estar da tribo. Trabalhamos em conjunto com diversas
            instituições para garantir o crescimento e a sustentabilidade da
            aldeia.
          </p>
          <div className="flex flex-col space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-2">Contato</h4>
              <ul className="text-gray-600">
                <li>
                  📞{" "}
                  <a href="tel:+550000000000" className="text-blue-600">
                    +55 (00) 0000-0000
                  </a>
                </li>
                <li>
                  📧{" "}
                  <a href="mailto:contato@tribo.org" className="text-blue-600">
                    contato@tribo.org
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-2">Localização</h4>
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=...suaURLDoGoogleMaps..."
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
