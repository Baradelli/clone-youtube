import { LogoYoutube } from "@/components/Logo";
import { List, MagnifyingGlass, Microphone } from "@phosphor-icons/react";
import Image from "next/image";

export default function Home() {
  return (
    <header className="w-screen h-14 flex flex-row content-between items-center px-4">
      <div className="flex items-center">
        <List
          size={40}
          weight="light"
          color="#FFF"
          className="hover:bg-zinc-800 cursor-pointer rounded-full p-2"
        />
        <LogoYoutube />
      </div>

      <div className="flex items-center w-6/12 mr-1">
        <div className="h-10 flex items-center justify-center rounded-l-3xl border-zinc-800 border-2 bg-custom-default pl-4 pr-1 w-full">
          <input
            type="text"
            className="bg-custom-default outline-none text-white h-7 w-full"
            placeholder="Search"
          />
        </div>
        <button className="h-10 w-16 bg-zinc-800 rounded-r-3xl flex items-center justify-center before:">
          <MagnifyingGlass size={24} color="#FFF" />
        </button>
      </div>

      <div className="bg-zinc-900 hover:bg-zinc-800 cursor-pointer rounded-full w-10 h-10 flex items-center justify-center">
        <Microphone size={24} weight="fill" color="#FFF" />
      </div>
    </header>
  );
}

{
  /* <Image
  className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
  src="/next.svg"
  alt="Next.js Logo"
  width={180}
  height={37}
  priority
/> */
}
