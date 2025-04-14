import { FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Informações de Contato */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Contato do Organizador</h2>
          <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
            <FaWhatsapp className="text-green-500 text-xl" />
            <a
              href="https://wa.me/5569992214253"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition"
            >
              +55 69 99221-4253 - Dionatan
            </a>
          </div>
        </div>

        {/* Links úteis */}
        <nav>
          <ul className="flex flex-col md:flex-row gap-4 text-sm">
            <li>
              <a
                href="#hero"
                className="hover:text-green-400 transition"
                aria-label="Ir para o início"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#organization"
                className="hover:text-green-400 transition"
                aria-label="Saber mais sobre nós"
              >
                Organização
              </a>
            </li>
            <li>
              <a
                href="#galery"
                className="hover:text-green-400 transition"
                aria-label="Ver galeria de fotos"
              >
                Galeria
              </a>
            </li>
            <li>
              <a
                href="#info"
                className="hover:text-green-400 transition"
                aria-label="Ver a história"
              >
                Povos Cinta Larga
              </a>
            </li>
          </ul>
        </nav>

        {/* Copyright */}
        <div className="text-sm text-gray-400 text-center md:text-right">
          <p>
            &copy; {new Date().getFullYear()} AIMAAM Cinta Larga. Todos os
            direitos reservados.
          </p>

          <p>
            Desenvolvido por:{" "}
            <a
              href="https://www.linkedin.com/in/c%C3%A1ssioritse/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 underline"
            >
              Cássio Ritse
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
