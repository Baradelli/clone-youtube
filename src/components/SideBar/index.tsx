import {
  House,
  MonitorPlay,
  Cardholder,
  ClockCounterClockwise,
  Clock,
  ThumbsUp,
  Queue,
  PlayCircle,
} from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { Item } from "./components/Item";

export const SideBar = () => {
  const router = useRouter();

  const handleActive = (url: string) => {
    if (router.pathname === url) {
      return "bg-zinc-800 hover:bg-zinc-700";
    }
  };

  console.log(router.pathname);

  return (
    <aside className="w-60 h-full fixed mt-14">
      <div className="flex flex-col">
        <div className="flex flex-col p-3">
          <Item Icon={House} pathName="/" title="House" />
          <Item Icon={MonitorPlay} pathName="/shorts" title="Shorts" />
          <Item
            Icon={Cardholder}
            pathName="/subscriptions"
            title="Subscriptions"
          />

          <div className="w-full border-t border-zinc-700 my-3" />

          <Item Icon={PlayCircle} pathName="/library" title="Library" />
          <Item
            Icon={ClockCounterClockwise}
            pathName="/history"
            title="History"
          />
          <Item Icon={Clock} pathName="/watch-later" title="Watch later" />
          <Item Icon={ThumbsUp} pathName="/liked-videos" title="Liked videos" />
          <Item
            Icon={Queue}
            pathName="/ver-main-tarde"
            title="Ver mais tarde"
          />
        </div>
      </div>
    </aside>
  );
};
