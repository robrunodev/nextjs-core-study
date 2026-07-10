import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface SupportCardProps {
  title: string;
  description: string;
  cardIcon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  bgColor?: string;
}

export const SupportCard: React.FC<SupportCardProps> = ({
  title,
  description,
  cardIcon: CardIcon,
  bgColor = "bg-blue-900",
}) => {
  const splittedBgColor = bgColor.split("-");
  const colorNumber = Number(splittedBgColor[splittedBgColor.length - 1]) - 200;
  const lightedColor = [
    splittedBgColor[0],
    splittedBgColor[1],
    colorNumber,
  ].join("-");

  return (
    <div className={`${bgColor} rounded-lg p-6`}>
      <div
        className={`rounded-lg ${lightedColor} p-2 w-fit mb-4 text-gray-100`}>
        <CardIcon />
      </div>
      <h2 className="text-gray-100 text-xl font-bold mb-2">{title}</h2>
      <span className="text-gray-300">{description}</span>
    </div>
  );
};
