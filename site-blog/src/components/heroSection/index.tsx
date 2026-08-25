import { ArrowRight, Clock, Store } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import { HeroSectionIconText } from "./components/heroSectionIconText";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[20rem] md:h-[36rem] items-center container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-center gap-8 md:items-start lg:items-start">
          <h1 className="sm:text-5xl font-bold text-gray-100">
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-2 md:items-start lg:items-start">
            <HeroSectionIconText
              text="Crie o seu site em menos de 5 minutos"
              headerIcon={Clock}
            />
            <HeroSectionIconText
              text="Acompanhe e otimize seu negócio online"
              headerIcon={Store}
            />
          </div>
          <div className="text-white flex flex-col gap-4 mt-5 md:items-start lg:items-start items-center">
            <Button variant={"primary"} asChild>
              <Link href="/criar-loja" className="w-full">
                Criar loja grátis
                <ArrowRight />
              </Link>
            </Button>
            <p className="text-gray-300 text-xs">
              Não precisa de cartão de crédito
            </p>
          </div>
        </div>

        <div className="relative h-[20rem] hidden md:h-full order-first md:order-last items-center justify-center md:flex lg:flex">
          <Image
            src="/assets/images/hero-section.svg"
            alt="Ilustração com ícones de store, tag e sacola"
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
