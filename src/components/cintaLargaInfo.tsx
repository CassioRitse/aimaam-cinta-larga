export default function CintaLargaInfo({ id }: { id: string }) {
  return (
    <div className="w-full bg-green-950 text-white">
      <section id={id} className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Título Principal */}
        <header className="text-center">
          <h1
            className="text-3xl font-bold text-green-950 uppercase bg-white py-4 px-4 rounded-xl"
            id="cinta-larga-title"
          >
            Povos Cinta Larga
          </h1>
        </header>

        {/* Seções Informativas */}
        {sections.map(({ id, title, content }) => (
          <article
            key={id}
            id={id}
            className="bg-white text-black shadow-md rounded-lg p-6 space-y-4 text-justify"
            aria-labelledby={`${id}-title`}
          >
            <h2 className="text-2xl font-semibold" id={`${id}-title`}>
              {title}
            </h2>
            {content}
          </article>
        ))}
      </section>
    </div>
  );
}

const sections = [
  {
    id: "povo-cinta-larga",
    title: "1. Povo Cinta Larga",
    content: (
      <>
        <p>
          Os Cinta Larga são um dos povos indígenas mais conhecidos da região de
          Rondônia. Seu nome, “Cinta Larga”, vem de uma característica cultural
          distintiva: o uso de uma espécie de cinturão feito de entrecasca de
          árvore, utilizado como parte do traje tradicional. Sua subsistência se
          baseia principalmente na caça e na agricultura de tubérculos e milho.
        </p>
        <p>
          Historicamente, os Cinta Larga tiveram um contato tardio com a
          sociedade não-indígena, enfrentando ciclos de conflito com fazendeiros
          e exploradores que ameaçaram sua cultura e território.
        </p>
      </>
    ),
  },
  {
    id: "cultura-cinta-larga",
    title: "2. Cultura Cinta Larga",
    content: (
      <>
        <h3 className="text-xl font-medium">Língua</h3>
        <p>
          O povo Cinta Larga pertence ao grupo linguístico Tupi, mais
          especificamente ao ramo Tupinambá. Muitos também falam português, em
          especial os mais jovens e aqueles com maior contato com a sociedade
          externa.
        </p>

        <h3 className="text-xl font-medium">Tradições e Rituais</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>Rituais de iniciação:</strong> Os jovens passam por
            cerimônias marcantes, incluindo tatuagens tradicionais, como símbolo
            de transição para a vida adulta.
          </li>
          <li>
            <strong>Espiritualidade:</strong> A crença é profundamente ligada à
            natureza, considerando que todos os seres vivos possuem um espírito.
          </li>
        </ul>

        <h3 className="text-xl font-medium">Arte e Artesanato</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Arcos e flechas usados para caça e cerimônias.</li>
          <li>Cintas de couro e cestarias feitas com fibras naturais.</li>
        </ul>
      </>
    ),
  },
  {
    id: "reserva-roosevelt",
    title: "3. A Reserva Roosevelt",
    content: (
      <>
        <p>
          Localizada em Rondônia, a Reserva Roosevelt cobre aproximadamente 2,7
          milhões de hectares de floresta preservada, sendo atravessada por
          diversos rios como o Rio Roosevelt e o Rio Aripuanã.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Situada no município de Espigão D’Oeste/RO e áreas vizinhas.</li>
          <li>Rica em biodiversidade, com ampla fauna e flora amazônica.</li>
        </ul>

        <h3 className="text-xl font-medium">Desafios</h3>
        <ul className="list-disc ml-6 space-y-2">
          <li>Conflitos territoriais e ambientais.</li>
          <li>Preservação da biodiversidade e combate à mineração ilegal.</li>
        </ul>
      </>
    ),
  },
  {
    id: "situacao-atual",
    title: "4. Atualidade e Situação Atual",
    content: (
      <>
        <p>
          Os Cinta Larga enfrentam desafios como a preservação cultural e a
          defesa de seus direitos territoriais. Porém, há um aumento na sua
          participação política e social, com representantes ativos na defesa
          dos direitos indígenas.
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Defesa dos direitos territoriais.</li>
          <li>Acesso à saúde e educação.</li>
          <li>Preservação cultural e participação política.</li>
        </ul>
      </>
    ),
  },
];
