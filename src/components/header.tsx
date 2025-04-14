export function Header() {
  return (
    <header className="bg-green-950 opacity-70 hover:opacity-100 text-gray-50 p-4 fixed w-full top-0 shadow-md z-50">
      <nav className="max-w-4xl mx-auto flex flex-col sm:flex-row sm:gap-4 justify-between items-center">
        <h1 className="text-sm md:text-xl font-bold">AIMAAM Cinta Larga</h1>
        <ul className="text-xs md:text-lg flex space-x-6 sm:space-x-8">
          <li>
            <a
              href="#hero"
              className="hover:text-white"
              aria-label="Ir para o início"
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#organization"
              className="hover:text-white"
              aria-label="Ir para a seção Organização"
            >
              Organização
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className="hover:text-white"
              aria-label="Ir para a Galeria"
            >
              Galeria
            </a>
          </li>
          <li>
            <a
              href="#info"
              className="hover:text-white"
              aria-label="Ir para as historia dos Povos Cinta Larga"
            >
              Povos Cinta Larga
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
