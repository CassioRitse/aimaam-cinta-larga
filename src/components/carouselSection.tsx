"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/carousel/photo1.jpg",
  "/carousel/photo2.jpg",
  "/carousel/photo3.jpg",
  "/carousel/photo4.jpg",
  "/carousel/photo5.jpg",
  "/carousel/photo6.jpg",
  "/carousel/photo7.jpg",
  "/carousel/photo8.jpg",
];

export const GallerySection = ({ id }: { id: string }) => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <section id={id} aria-labelledby="gallery-title">
        <h2
          id="gallery-title"
          className="text-4xl font-bold text-center mb-10 text-green-950"
        >
          Nossa Galeria
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <motion.figure
              key={index}
              className={`overflow-hidden rounded-lg ${
                index % 5 === 0
                  ? "col-span-2 row-span-2"
                  : index % 3 === 0
                  ? "row-span-2"
                  : ""
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={src}
                width={500}
                height={500}
                alt={`Foto ${index + 1} da galeria - Cultura Cinta Larga`}
                className="w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"} // Melhor performance
                priority={index === 0} // Carrega a primeira imagem primeiro
              />
              <figcaption className="sr-only">
                Imagem {index + 1} da cultura indígena Cinta Larga
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </div>
  );
};
