import { FaWhatsapp } from "react-icons/fa";

export default function CintaLargaInfo() {
  return (
    <div className="w-full bg-green-950">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <section className="text-center">
          <h1 className="text-3xl font-bold text-white">
            História e Cultura do Povo Cinta Larga
          </h1>
        </section>

        <div className="bg-white text-black shadow-md rounded-lg p-6 space-y-4 text-justify">
          <h2 className="text-2xl font-semibold">
            1. História e Origem do Povo Cinta Larga
          </h2>
          <p>
            Os Cinta Larga são um dos povos indígenas mais conhecidos da região
            de Rondônia. Seu nome, “Cinta Larga”, vem de uma característica
            cultural distintiva: o uso de uma cinta de couro larga (ou faixa de
            tecido) que utilizam como parte do seu traje tradicional.
            Historicamente, os Cinta Larga foram conhecidos por sua resistência
            à colonização e pelo seu contato direto com a população não-indígena
            apenas em momentos recentes, até o século XX. Ao longo de sua
            história, os Cinta Larga vivenciaram diferentes ciclos de conflito
            com fazendeiros, exploradores e outras pressões externas que
            afetaram seu modo de vida. Durante as décadas de 1960 e 1970,
            começaram a ser reconhecidos oficialmente pelo governo brasileiro
            como um povo indígena e receberam proteção legal sobre suas terras.
          </p>
        </div>

        <div className="bg-white text-black shadow-md rounded-lg p-6 space-y-4 text-justify">
          <h2 className="text-2xl font-semibold">2. Cultura Cinta Larga</h2>
          <h3 className="text-xl font-medium">Língua</h3>
          <p>
            Os Cinta Larga falam a língua cinta larga, que pertence à família
            linguística Aruak. No entanto, muitos também falam português,
            especialmente os mais jovens e aqueles que têm contato com a
            sociedade não-indígena.
          </p>
          <h3 className="text-xl font-medium">Tradições e Rituais</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Rituais de iniciação:</strong> Um dos aspectos culturais
              mais significativos entre os Cinta Larga é o ritual de passagem
              para a idade adulta, no qual os jovens passam por cerimônias
              marcantes. A principal parte do ritual é as tatuagens, o que é uma
              tradição marcante para o grupo.
            </li>
            <li>
              <strong>Espiritualidade:</strong> A espiritualidade Cinta Larga é
              profundamente ligada à natureza e à crença de que todos os seres
              vivos possuem um espírito. Eles acreditam em um ser superior e
              mantêm uma relação íntima com a terra e com os elementos naturais.
            </li>
          </ul>
          <h3 className="text-xl font-medium">Arte e Artesanato</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Arcos e flechas usados para caça e cerimônias.</li>
            <li>Cintas de couro e cestarias feitas com fibras naturais.</li>
          </ul>
        </div>

        <div className="bg-white text-black shadow-md rounded-lg p-6 space-y-4 text-justify">
          <h2 className="text-2xl font-semibold">
            3. A Reserva Indígena Cinta Larga
          </h2>
          <p>
            A Reserva Indígena Cinta Larga está localizada em Rondônia, na
            região Norte do Brasil, e tem uma área de aproximadamente 1,6 milhão
            de hectares. Essa reserva foi oficialmente reconhecida em 1978, após
            longos períodos de lutas pela preservação da terra e pela garantia
            de direitos territoriais dos Cinta Larga.
          </p>
          <p>
            A reserva abrange uma região central do estado de Rondônia, com
            destaque para os seguintes aspectos geográficos: • Está situada no
            município de Ariquemes, mas se estende por diversas outras áreas
            vizinhas. • A região é rica em biodiversidade, com uma grande
            variedade de fauna e flora amazônica.
          </p>
          <h3 className="text-xl font-medium">Desafios</h3>
          <ul className="list-disc ml-6 space-y-2">
            <li>Conflitos territoriais e ambientais.</li>
            <li>Preservação da biodiversidade e combate à mineração ilegal.</li>
          </ul>
        </div>

        <div className="bg-white text-black shadow-md rounded-lg p-6 space-y-4 text-justify">
          <h2 className="text-2xl font-semibold">
            4. Atualidade e Situação Atual
          </h2>
          <p>
            Hoje, os Cinta Larga seguem enfrentando desafios como a preservação
            cultural, a defesa de seus direitos territoriais e o enfrentamento
            de pressões externas. Contudo, também há uma crescente presença do
            povo Cinta Larga no cenário político e social brasileiro, com
            líderes e representantes participando de eventos e discussões sobre
            os direitos indígenas e a proteção da Amazônia.
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Defesa dos direitos territoriais.</li>
            <li>Acesso à saúde e educação.</li>
            <li>Preservação cultural e participação política.</li>
          </ul>
        </div>

        <footer className="flex items-center justify-between bg-gray-900 text-white p-4 rounded-lg">
          <p className="text-lg">Contato do Organizador</p>
          <div className="flex items-center gap-2">
            <FaWhatsapp></FaWhatsapp>
            <span>+55 69 99221-4253 - Dionatan - Presidente da Associação</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
