import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ActiveLink } from "../activeLink";

export const Header: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 text-white border-b border-white/10 bg-black/95 backdrop-blur supports-[backdrop-filters]:bg-black/60 py-6">
      <div className="flex justify-between mx-auto max-w-7xl px-16 sm:px-6 lg:px-8">
        <div>
          <Image
            width={116}
            height={32}
            src="/assets/images/brand-logo.png"
            alt="brand logo"
          />
        </div>
        <nav className="flex gap-2 items-center">
          <ActiveLink href={"/"}>Home</ActiveLink>
          <ActiveLink href={"/blog"}>Blog</ActiveLink>
          <Button variant={"secondary"} asChild>
            <Link href={"/blog/comments"}>Começar</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};
