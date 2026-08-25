import { PT_Sans_Caption } from "next/font/google";

interface PTSansCaptionProps {
  weight: "400" | "700" | Array<"400" | "700">;
  subsets?: Array<"cyrillic" | "cyrillic-ext" | "latin" | "latin-ext">;
}

export const PTSansCaption = ({
  weight = "700",
  subsets = ["latin"],
}: PTSansCaptionProps) =>
  PT_Sans_Caption({
    weight: weight,
    subsets: subsets,
  });
