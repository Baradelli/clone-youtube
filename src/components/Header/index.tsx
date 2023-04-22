import {
  List,
  MagnifyingGlass,
  Microphone,
  UploadSimple,
  Bell,
} from "@phosphor-icons/react";

import { LogoYoutube } from "./components/Logo";
import { Avatar } from "./components/Avatar";

export const Header = () => {
  return (
    <header className="w-screen h-14 flex flex-row justify-between items-center px-4 fixed">
      <div className="flex items-center">
        <List
          size={40}
          weight="light"
          color="#FFF"
          className="hover:bg-zinc-800 cursor-pointer rounded-full p-2 transition-all"
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

        <div className="bg-zinc-900 hover:bg-zinc-800 cursor-pointer rounded-full w-10 h-10 flex items-center justify-center ml-2">
          <Microphone size={24} weight="fill" color="#FFF" />
        </div>

        {/* <Microphone
        size={40}
        weight="light"
        color="#FFF"
        className="hover:bg-zinc-800 bg-zinc-900 cursor-pointer rounded-full p-2 transition-all"
      /> */}
      </div>

      <div className="flex flex-row gap-2 items-center justify-center">
        <UploadSimple
          size={40}
          weight="light"
          color="#FFF"
          className="hover:bg-zinc-800 cursor-pointer rounded-full p-2 transition-all"
        />
        <Bell
          size={40}
          weight="light"
          color="#FFF"
          className="hover:bg-zinc-800 cursor-pointer rounded-full p-2 transition-all"
        />
        <Avatar
          url="https://avatars.githubusercontent.com/u/94546015?v=4"
          fallback="VT"
        />
      </div>
    </header>
  );
};
