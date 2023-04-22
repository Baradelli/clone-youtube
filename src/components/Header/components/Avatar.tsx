import { Root, Fallback, Image } from "@radix-ui/react-avatar";

interface AvatarProps {
  url: string;
  fallback: string;
}

export const Avatar = ({ url, fallback }: AvatarProps) => {
  return (
    <Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-8 h-8 rounded-full bg-black cursor-pointer">
      <Image
        className="w-full h-full object-cover"
        src={url}
        alt="Avatar image"
      />
      <Fallback className="w-full h-full flex justify-center items-center bg-white text-violet-500 text-sm font-medium">
        {fallback}
      </Fallback>
    </Root>
  );
};
