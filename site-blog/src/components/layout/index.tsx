import { Footer } from "@/src/components/footer";
import { Header } from "@/src/components/header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative flex min-h-screen flex-col dark bg-gray-950">
      <Header />
      <main className="flex-1 flex-col mb-12">{children}</main>
      <Footer />
    </div>
  );
};
