import {
  House,
  MonitorPlay,
  Cardholder,
  ClockCounterClockwise,
  Clock,
  ThumbsUp,
  Queue,
  PlayCircle,
  Fire,
  MusicNote,
  FilmSlate,
  Broadcast,
  GameController,
  NewspaperClipping,
  Trophy,
  Lightbulb,
  Gear,
  Flag,
  Question,
  Chat,
} from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { Item } from "./components/Item";
import { Divider } from "../Divider";

export const SideBar = () => {
  const router = useRouter();

  const handleActive = (url: string) => {
    if (router.pathname === url) {
      return "bg-zinc-800 hover:bg-zinc-700";
    }
  };

  return (
    <aside
      style={{ height: "calc(100% - 3.5rem)" }}
      className="w-60 h-full fixed mt-14 overflow-hidden hover:overflow-auto"
    >
      <div className="flex flex-col">
        <div className="flex flex-col p-3">
          <Item Icon={House} pathName="/" title="House" />
          <Item Icon={MonitorPlay} pathName="/shorts" title="Shorts" />
          <Item
            Icon={Cardholder}
            pathName="/subscriptions"
            title="Subscriptions"
          />

          <Divider />

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

          <Divider />

          <h1 className="text-white ml-3 mb-1 font-semibold">Explore</h1>
          <Item Icon={Fire} pathName="/trending" title="Trending" />
          <Item Icon={MusicNote} pathName="/music" title="Music" />
          <Item Icon={FilmSlate} pathName="/movies" title="Movies" />
          <Item Icon={Broadcast} pathName="/live" title="Live" />
          <Item Icon={GameController} pathName="/gaming" title="Gaming" />
          <Item Icon={NewspaperClipping} pathName="/news" title="News" />
          <Item Icon={Trophy} pathName="/sports" title="Sports" />
          <Item Icon={Lightbulb} pathName="/learning" title="Learning" />

          <Divider />

          <Item Icon={Gear} pathName="/settings" title="Settings" />
          <Item Icon={Flag} pathName="/report-history" title="Report history" />
          <Item Icon={Question} pathName="/help" title="Help" />
          <Item Icon={Chat} pathName="/send-feedback" title="Send feedback" />

          <Divider />

          <span className="text-zinc-400 text-xs px-4 font-semibold">
            About Press Copyright
          </span>
          <span className="text-zinc-400 text-xs px-4 font-semibold">
            Contact us Creators Advertise
          </span>
          <span className="text-zinc-400 text-xs px-4 font-semibold mb-3">
            Developers
          </span>

          <span className="text-zinc-400 text-xs px-4 font-semibold">
            Terms Privacy Policy & Safety
          </span>
          <span className="text-zinc-400 text-xs px-4 font-semibold">
            How YouTube works
          </span>
          <span className="text-zinc-400 text-xs px-4 font-semibold mb-3">
            Test new features
          </span>

          <span className="text-zinc-500 text-xs px-4 font-semibold mb-3">
            © 2023 Google LLC
          </span>
        </div>
      </div>
    </aside>
  );
};
