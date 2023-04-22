import { Icon } from "@phosphor-icons/react";
import { useRouter } from "next/router";

interface ItemsProps {
  Icon: Icon;
  title: string;
  pathName: string;
}

export const Item = ({ Icon, title, pathName }: ItemsProps) => {
  const router = useRouter();

  const handleActive = (url: string) => {
    if (router.pathname === url) {
      return "bg-zinc-800 hover:bg-zinc-700";
    }
  };

  return (
    <a
      title={title}
      href={pathName}
      className={`hover:bg-zinc-800 w-full h-10 px-3 flex items-center rounded-lg ${handleActive(
        pathName
      )}`}
    >
      <Icon
        size={24}
        weight={handleActive(pathName) ? "fill" : "light"}
        color="#FFF"
        className="mr-6 transition-all"
      />

      <span className="text-white text-sm font-medium">{title}</span>
    </a>
  );
};
