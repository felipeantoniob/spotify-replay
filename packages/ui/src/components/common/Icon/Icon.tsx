import type { SVGProps } from "react";

const ICONS_IDS = [
  "artists",
  "close",
  "explicit",
  "genres",
  "log-out",
  "play",
  "playing",
  "playlist",
  "profile",
  "replay",
  "spotify",
  "tracks",
  "three-dots-vertical",
] as const;

type IconId = (typeof ICONS_IDS)[number];

type IconProps = { id: IconId } & SVGProps<SVGSVGElement>;

const Icon = ({ id, ...props }: IconProps) => (
  <svg {...props}>
    <use href={`/sprite.svg#${id}`} />
  </svg>
);

export { Icon, type IconId };
