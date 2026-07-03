import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type HeroSectionIconTextProps = {
  text: string;
  headerIcon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
};

export const HeroSectionIconText: React.FC<HeroSectionIconTextProps> = ({
  text = "",
  headerIcon: HeaderIcon,
}) => {
  return (
    <div className="flex items-center gap-2 flex-row">
      <HeaderIcon className="text-cyan-100 w-4 h-4" />
      <span className="text-gray-200">{text}</span>
    </div>
  );
};
