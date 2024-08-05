import Link from "next/link";
import React from "react";
import Image from 'next/image';

const navigation = [
  { name: "Projetos", href: "/projects" },
  { name: "Contato", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-[#0D1B2A] via-[#1B263B]/45 to-[#0D1B2A]">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-20">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl duration-500 text-[#778DA9]/40 hover:text-[#778DA9]"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="py-3.5 px-0.5 z-10 text-3xl text-transparent duration-1000 bg-[#E0E1DD] cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text">
        Farsax
      </h1>
      <h1 className="pb-8 px-0.5 z-10 text-xl text-transparent duration-1000 bg-[#778DA9] cursor-default animate-title font-display sm:text-4xl md:text-4xl whitespace-nowrap bg-clip-text">
        designer gráfico
      </h1>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Image
        className="animate-fade-in py-0 px-0.5 z-10"
        src="/Logo.png"
        width={300}
        height={300}
        alt="Picture of the author"
      />
      <div className="my-16 text-justify animate-fade-in w-6/12">
        <p className="text-xm text-zinc-400">
          Olá! Me chamo Israel Felipe Ribeiro do Prado, criador do perfil Farsax e tenho 20 anos. Comecei minha jornada no design 2 anos atrás e desde então venho trabalhando nisso, desenvolvendo minhas habilidades e criando projetos que vinculam criatividade e profissionalismo.
          Acredito que o design é uma poderosa forma de comunicação. sinta-se à vontade para explorar meu portfólio e entrar em contato.
        </p>
      </div>
    </div>
  );
}
