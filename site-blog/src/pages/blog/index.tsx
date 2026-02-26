import { Header } from "@/src/components/header";
import Image from "next/image";

export default function Blog() {
  return (
    <div>
      <Header />
      <h1>Blog</h1>
      <Image
        src="/assets/images/unsplash.jpg"
        alt="Blog pumpkin"
        width={100}
        height={100}
      />
    </div>
  );
}
