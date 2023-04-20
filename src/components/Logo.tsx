import { YoutubeLogo } from "@phosphor-icons/react";

export const LogoYoutube = () => {
  return (
    <div className="flex row relative px-4 cursor-pointer" title="YouTube Home">
      <div className="relative">
        <div className="bg-white w-3 h-3 absolute z-0 left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2" />
        <YoutubeLogo
          size={32}
          weight="fill"
          color="#F00"
          className="z-10"
          style={{ position: "inherit" }}
        />
      </div>
      <span className="text-white font-bold text-lg">YouTube</span>
    </div>
  );
};
