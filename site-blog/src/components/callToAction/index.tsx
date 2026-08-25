import { PTSansCaption } from "@/lib/fonts";
import { ArrowRightIcon, Store } from "lucide-react";
import { PT_Sans_Caption } from "next/font/google";
import Link from "next/link";
import { Button } from "../ui/button";

const ptSansCaption = PT_Sans_Caption({
  weight: "700",
  subsets: ["latin"],
});

export const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-cyan-950/20 to-gray-700">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-6 text-center">
        <div className="p-4 bg-cyan-950 w-fit rounded-full">
          <Store className="text-cyan-100" />
        </div>
        <h2
          className={`${ptSansCaption.className} text-gray-100 text-balance text-3xl`}>
          Crie uma loja online e inicie suas vendas ainda hoje
        </h2>
        <Button variant={"primary"} asChild>
          <Link href="/criar-loja" className="w-fit mt-4">
            Criar loja grátis
            <ArrowRightIcon />
          </Link>
        </Button>
      </div>
    </section>
  );
};
