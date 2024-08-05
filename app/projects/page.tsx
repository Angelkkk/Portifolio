import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projetos
          </h2>
          <p className="mt-4 text-zinc-400">
            Alguns dos meus projetos pessoais...
          </p>
        </div>
        <div className="w-full h-px bg-zinc-600" />
        
        {/* First grid section */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 mx-auto">
          <Card>
            <Image
              src="/604.png"
              layout="responsive"
              width={600}
              height={600}
              alt="Projeto 1"
              className="object-cover"
            />
          </Card>
          <Card>
            <Image
              src="/castraçã.png"
              layout="responsive"
              width={600}
              height={600}
              alt="Projeto 2"
              className="object-cover"
            />
          </Card>
        </div>

        {/* Second grid section */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-3 lg:gap-16 mx-auto">
          <Card>
            <Image
              src="/Energia.png"
              layout="responsive"
              width={600}
              height={600}
              alt="Projeto 3"
              className="object-cover"
            />
          </Card>
          <Card>
            <Image
              src="/sorvete.png"
              layout="responsive"
              width={600}
              height={600}
              alt="Projeto 4"
              className="object-cover"
            />
          </Card>
          <Card>
            <Image
              src="/dia-dos-pais.png"
              layout="responsive"
              width={600}
              height={600}
              alt="Projeto 5"
              className="object-cover"
            />
          </Card>
        </div>

        {/* Third grid section */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 mx-auto">
          <Card>
            <Image
              src="/DIA-DAS-CRIANÇAS.png"
              layout="responsive"
              width={500}
              height={500}
              alt="Projeto 6"
              className="object-cover"
            />
          </Card>
          <Card>
            <Image
              src="/acem.png"
              layout="responsive"
              width={500}
              height={500}
              alt="Projeto 13"
              className="object-cover"
            />
          </Card>
        </div>

        {/* Fourth grid section */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-3 lg:gap-16 mx-auto">
          <Card>
            <Image
              src="/DIA-DA-MULHER.png"
              layout="responsive"
              width={500}
              height={500}
              alt="Projeto 9"
              className="object-cover"
            />
          </Card>
          <Card>
            <Image
              src="/Natal.png"
              layout="responsive"
              width={500}
              height={500}
              alt="Projeto 10"
              className="object-cover"
            />
          </Card>
          <Card>
            <Image
              src="/ROSA.png"
              layout="responsive"
              width={500}
              height={500}
              alt="Projeto 11"
              className="object-cover"
            />
          </Card>
        </div>

        {/* Fifth grid section */}
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-3 lg:gap-16 mx-auto">
          <Card>
            <Image
              src="/ANO-NOVO.png"
              layout="responsive"
              width={500}
              height={500}
              alt="Projeto 12"
              className="object-cover"
            />
          </Card>
          <Card>
              <Image
                src="/lanche.png"
                layout="responsive"
                width={500}
                height={500}
                alt="Projeto 7"
                className="object-cover"
              />
            </Card>
            <Card>
              <Image
                src="/azul.png"
                layout="responsive"
                width={500}
                height={500}
                alt="Projeto 8"
                className="object-cover"
              />
            </Card>
        </div>

        <div className="hidden w-full h-px md:block bg-zinc-600" />
      </div>
    </div>
  );
}
