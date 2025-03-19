"use client";
import Image from "next/image";

export const OrganizationSection = () => {
  // const { ref, inView } = useInView({
  //   triggerOnce: false, // Não dispara apenas uma vez
  //   threshold: 0.65, // Ativa quando 65% da seção estiver visível
  // });

  return (
    <div className="w-full py-20 bg-green-950 text-center text-white">
      <section className="max-w-6xl gap-2 mx-auto px-6 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
        <div className="w-full md:w-1/2">
          <div className="relative py-20 px-6 w-full text-justify">
            <h2 className="text-4xl font-bold mb-4 text-start ">
              Sobre a Aldeia
            </h2>
            <p className="text-lg">
              Tamanho da área : 2,700.00 hectares{" "}
              <span className="text-sm italic">
                (dois milhões e setecentos mil hectares)
              </span>
            </p>
            <p className="text-lg">População total em Rondônia : 1756</p>
            <br />
            <p className="text-xl font-semibold"> Vegetação</p>
            <p className="text-sm">
              Ypê, camaru, cedro-rosa, tauari, cerejeira, mogno, freijó, libra,
              maracatiara, pinho, caxeta, Angeli, margoso, cajueiro, pariri,
              castanheira, cacaueira, pama, peroba, jequitibá, seringueira
              <br />
              Plantas medicinais, frutas nativas, animais silvestres e rios: Rio
              Roosevelt, Rio Capitão Cardoso, Rio Tenente Marques, Rio Eugênio,
              Rio das dúvidas, Rio 11 de maio
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
        <div
          className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-8"
          // initial={{ opacity: 0, x: 50 }}
          // animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
          // transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-green-950">
            AIMAAM - ASSOCIAÇÃO INDÍGENA CINTA LARGA
          </h2>
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
                <li>CNPJ: 37.574.307/0001-06</li>
                {/* <li>
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
                </li> */}
              </ul>
            </div>

            <div className="text-black">
              <h4 className="text-lg font-medium mb-2">Localização</h4>
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000319.3158008147!2d-60.53624472580773!3d-11.659124393993928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93b7530feb4472bf%3A0x539e2834b07654c7!2sParque%20do%20Aripuan%C3%A3%2C%20Brasil!5e0!3m2!1spt-BR!2spt!4v1742331663474!5m2!1spt-BR!2spt"
                allowFullScreen
                loading="eager"
              ></iframe>
              <br />
              <p>
                Sede Administrativa Reserva Roosevelt - Aldeia do Piu, Setor
                Kernit, casa nº 306, município de Espigão do Oeste, Rondônia,
                Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
