import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";
import { PT_Sans_Caption } from "next/font/google";
import { SupportCard } from "./components/supportCard";

const PTSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: ["700"],
});

export const SupportSection = () => {
  return (
    <section className="w-full pb-8 md:py-10 bg-gray-900">
      <div className="container mx-auto max-w-7xl p-4">
        <h2
          className={`${PTSansCaption.className} text-balance text-gray-100 text-center text-3xl font-bold mb-6`}>
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <SupportCard
            cardIcon={PaintbrushVertical}
            title="Personalize seu site"
            description="Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara."
            bgColor="bg-blue-900"
          />
          <SupportCard
            cardIcon={Store}
            title="Venda de qualquer loja"
            description="Não importa a loja, o Site.Set permite que você insera qualquer link de afiliado."
            bgColor="bg-cyan-800"
          />
          <SupportCard
            cardIcon={HeartHandshake}
            title="Receba suporte amigável"
            description="Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso."
            bgColor="bg-blue-900"
          />
        </div>
      </div>
    </section>
  );
};
