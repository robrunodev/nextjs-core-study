import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href={"/"}>
      <Image
        width={116}
        height={32}
        src="/assets/images/brand-logo.png"
        alt="brand logo"
      />
    </Link>
  );
};
