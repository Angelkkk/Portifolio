
import React from "react";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import Image from "next/image";
import Particles from "../components/particles";

export default async function ProjectsPage() {

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
        <Particles
        className="absolute inset-0 -z-50"
        quantity={2000}
        />
        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 align-center">
          <Card>
              <Image
                src="/604.png"
                width={600}
                height={600}
               alt=""
              />
          </Card>
          <Card>
              <Image
                src="/castração.png"
                width={600}
                height={600}
               alt=""
              />
          </Card>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-600" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <Image
                src="/Energia.png"
                width={600}
                height={600}
               alt=""
              />
          </Card>
          </div>
          <div className="grid grid-cols-1 gap-4">
          <Card>
              <Image
                src="/sorvete.png"
                width={600}
                height={600}
               alt=""
              />
          </Card>
          </div>
          <div className="grid grid-cols-1 gap-4">
          <Card>
              <Image
                src="/dia-dos-pais.png"
                width={600}
                height={600}
               alt=""
              />
          </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
