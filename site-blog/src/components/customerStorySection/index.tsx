import { PT_Sans_Caption } from "next/font/google";
import Image from "next/image";

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
});

const customerStories = [
  {
    id: Math.random().toString(36).substring(2, 15),
    author: {
      name: "Annette Bones",
      role: "CEO na Anne Corp",
      avatar: "/assets/images/customer-01.png",
    },
    content:
      "Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.",
  },
  {
    id: Math.random().toString(36).substring(2, 15),
    author: {
      name: "Jacob Jones",
      role: "CEO na JJ Org",
      avatar: "/assets/images/customer-02.png",
    },
    content:
      "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
  },
];

export const CustomerStorySection = () => {
  return (
    <section className="mx-auto p-4 max-w-7xl container py-8 md:py-10">
      <div className="flex flex-col justify-center items-center gap-12">
        <h2 className={`${ptSansCaption.className} text-2xl text-gray-100`}>
          Quem utiliza, aprova!
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {customerStories.length > 0 &&
            customerStories.map((story, index) => {
              return (
                <div
                  key={`${story.id}-${index}`}
                  className="p-6 bg-gray-900 rounded-lg md:p-12">
                  <p className="italic text-gray-100">{story.content}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <Image
                      src={story.author.avatar}
                      alt={story.author.name!!}
                      width={36}
                      height={36}
                    />
                    <div className="flex flex-col">
                      <p className="text-gray-100 text-sm">
                        {story.author.name}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {story.author.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};
