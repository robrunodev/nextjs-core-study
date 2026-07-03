import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const FeatureCard = ({
  tagText,
  title,
}: {
  tagText: string;
  title: string;
}) => {
  return (
    <div className="flex flex-col gap-2 rounded-lg md:p-12 bg-gray-900">
      <span className="text-body-tag text-blue-200 bg-blue-700 px-2 py-1 w-fit uppercase">
        {tagText}
      </span>
      <h1 className="text-gray-100 text-3xl font-bold">{title}</h1>
    </div>
  );
};

export const FeatureSection = () => {
  return (
    <section className="container grid gap-6 md:grid-cols-2 pb-8 pt-8 md:py-10">
      <FeatureCard
        tagText="Simples"
        title="Crie um catálogo de produtos online em poucos minutos"
      />
      <FeatureCard
        tagText="Prático"
        title="Venda para seu público através de uma plataforma única"
      />

      <div className="col-span-full grid grid-cols-2 gap-6 bg-gray-900 md:p-12">
        <div className="flex flex-col gap-2 justify-between">
          <div className="flex flex-col gap-2 rounded-lg">
            <span className="text-body-tag text-blue-200 bg-blue-700 px-2 py-1 w-fit uppercase">
              Personalizável
            </span>
            <h1 className="text-gray-100 text-3xl font-bold">
              Tenha uma loja online personalizada com a cara da sua marca
            </h1>
          </div>
          <Button className="rounded-full bg-blue-300 w-fit">
            Criar loja grátis
            <ArrowRight />
          </Button>
        </div>
        <div className="mx-auto">
          <Image
            src="/assets/images/feature-section.svg"
            alt="ilustração de uma loja online com produtos e ícones de tag, sacola e store"
            width={440}
            height={327}
          />
        </div>
      </div>
    </section>
  );
};
