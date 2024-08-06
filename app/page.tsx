import Link from "next/link";
import React from "react";
import Image from 'next/image';
import Particles from "./components/particles";

const navigation = [
  { name: "Projetos", href: "/projects" },
  { name: "Contato", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-[#0D1B2A] via-[#1B263B]/45 to-[#0D1B2A] p-4 md:p-0">
      <div className="scale-85 flex flex-col items-center justify-center">
        <nav className="my-8 md:my-16 animate-fade-in">
          <ul className="flex flex-wrap items-center justify-center gap-8 md:gap-20">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base md:text-xl duration-500 text-[#778DA9]/40 hover:text-[#778DA9]"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        {/* Removendo a classe hidden para garantir que a linha esteja visível em dispositivos móveis */}
        <div className="w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <h1 className="py-3.5 px-0.5 z-10 text-7xl md:text-3xl text-transparent duration-1000 bg-[#E0E1DD] cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
          Farsax
        </h1>
        <h1 className="pb-8 px-0.5 z-10 text-xl md:text-3xl text-transparent duration-1000 bg-[#778DA9] cursor-default animate-title font-display sm:text-4xl md:text-4xl whitespace-nowrap bg-clip-text">
          designer gráfico
        </h1>
        {/* Removendo a classe hidden para garantir que a linha esteja visível em dispositivos móveis */}
        <div className="w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Image
          className="animate-fade-in py-0 px-0.5 z-10"
          src="/Logo.png"
          width={300}
          height={300}
          alt="Picture of the author"
        />
        <div className="my-8 md:my-16 animate-fade-in w-full md:w-6/12 px-4 md:px-0">
          <p className="text-sm md:text-base text-zinc-400">
          Olá! Me chamo Israel Felipe Ribeiro do Prado, criador do perfil Farsax e tenho 20 anos. Comecei minha jornada no design, fazendo uso do pacote Adobe, há 2 anos atrás. Desde então venho trabalhando, desenvolvendo minhas habilidades e criando projetos que vinculam criatividade e profissionalismo. Sinta-se à vontade para explorar meu portfólio e entrar em contato.
          </p>
        </div>
      </div>
    </div>
  );
}
