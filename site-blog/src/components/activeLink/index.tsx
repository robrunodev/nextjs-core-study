import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
  const { asPath } = useRouter();
  const isCurrentPath =
    asPath === href || asPath === rest.as || asPath.startsWith(String(rest.as));

  const activeClassName = (isActive: boolean = false) => {
    return cn(
      "text-sm font-medium transition-colors hover:text-blue-500 text-muted-foreground",
      {
        "text-blue-500": isActive,
      },
    );
  };

  return (
    <Link className={activeClassName(isCurrentPath)} href={href}>
      {children}
    </Link>
  );
};
