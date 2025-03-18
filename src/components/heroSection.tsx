"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export const HeroSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Não dispara apenas uma vez
    threshold: 0.65, // Ativa quando 50% da seção estiver visível
  });

  return (
    <section
      ref={ref}
      className="relative w-full h-screen flex items-center justify-center text-white"
    >
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video> */}

      <Image
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={"/background.jpg"}
        width={800}
        height={800}
        alt={`Foto de cima aldeia`}
      />

      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }} // Inicialmente invisível e abaixo
          animate={{
            opacity: inView ? 1 : 0, // Aparece quando estiver na tela
            y: inView ? 0 : 50, // Se move para a posição original
          }}
          transition={{ duration: 0.8 }} // Duração da animação
        >
          AIMMAA Cinta Larga
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : 50,
          }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Bem-vindo à nossa cultura e tradições. Os indígenas Cinta Larga são um
          povo originário da Amazônia, mais especificamente da região de
          Rondônia, Brasil. Este povo faz parte do grupo linguístico Aruak e
          habita a Reserva Indígena Cinta Larga, localizada principalmente no
          município de Ariquemes, no estado de Rondônia, Brasil
        </motion.p>
      </motion.div>
    </section>
  );
};
