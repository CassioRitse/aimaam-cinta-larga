"use client";
import { FaWhatsapp } from "react-icons/fa";

export const OrganizationSection = ({ id }: { id: string }) => {
  return (
    <div className="w-full py-20 bg-green-950 text-center text-white">
      <section
        id={id}
        className="max-w-6xl gap-2 mx-auto px-6 flex flex-col md:flex-row justify-between space-y-10 md:space-y-0"
      >
        {/* Seção Sobre */}
        <div className="w-full md:w-1/2">
          <div className="relative py-20 px-6 w-full text-justify">
            <h2 className="text-4xl font-bold mb-4 text-start">Sobre</h2>
            <p>
              A Reserva Roosevelt possui uma extensão de aproximadamente 2,7
              milhões de hectares de floresta preservada. Seu território é
              atravessado por diversos rios, incluindo o Rio Roosevelt, Rio
              Tenente Marques, Rio Capitão Cardoso, Rio Juína e Rio Aripuanã. O
              povo Cinta Larga pertence ao grupo linguístico Tupi, mais
              especificamente ao ramo Tupinambá. Seu primeiro contato com a
              sociedade não indígena ocorreu na década de 1960.
            </p>
            <p className="my-4">População total em Rondônia: 1756</p>
            <p className="text-xl font-semibold">Vegetação</p>
            <p className="text-sm">
              Ypê, camaru, cedro-rosa, tauari, cerejeira, mogno, freijó, libra,
              maracatiara, pinho, caxeta, Angeli, margoso, cajueiro, pariri,
              castanheira, cacaueira, pama, peroba, jequitibá, seringueira
              <br />
              Plantas medicinais, frutas nativas, animais silvestres e rios: Rio
              Roosevelt, Rio Capitão Cardoso, Rio Tenente Marques, Rio Eugênio,
              Rio das Dúvidas, Rio 11 de Maio.
            </p>
          </div>
          {/* Vídeo Responsivo */}
          <video className="w-full" width={500} height={500} controls>
            <source src="/video_about.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>

        {/* Seção Organização Mantenedora */}
        <div className="w-full md:w-1/2 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-4xl font-bold mb-2 text-green-950">
            AIMAAM - ASSOCIAÇÃO INDÍGENA CINTA LARGA
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6">
            Somos uma organização dedicada a preservar as tradições, a cultura e
            o bem-estar da tribo. Trabalhamos em conjunto com diversas
            instituições para garantir o crescimento e a sustentabilidade da
            aldeia.
          </p>
          <div className="flex flex-col space-y-4">
            <div>
              <h4 className="text-lg font-medium mb-2">Contato</h4>
              <ul className="text-gray-600">
                <li>CNPJ: 37.574.307/0001-06</li>
                <li className="bg-green-950 py-2 mt-1 rounded-full text-white">
                  <div className="flex justify-center items-center gap-2">
                    <FaWhatsapp />
                    <p>+55 69 99221-4253</p>
                  </div>
                  <p>Dionatan - Presidente da Associação</p>
                </li>
              </ul>
            </div>

            <div className="text-black">
              <h4 className="text-lg font-medium mb-2">Localização</h4>
              <iframe
                className="w-full h-64 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000319.3158008147!2d-60.53624472580773!3d-11.659124393993928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93b7530feb4472bf%3A0x539e2834b07654c7!2sParque%20do%20Aripuan%C3%A3%2C%20Brasil!5e0!3m2!1spt-BR!2spt!4v1742331663474!5m2!1spt-BR!2spt"
                title="Localização da Associação Indígena Cinta Larga"
                allowFullScreen
                loading="lazy"
              ></iframe>
              <p className="mt-8">
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
