"use client";

import Link from "next/link";

import { NavigationButton } from "../NavigationButton/NavigationButton";

const BUTTONS = [
  {
    label: "Profile",
    pathname: "/profile",
    iconId: "profile",
    iconWidth: 20,
    iconHeight: 20,
  },
  {
    label: "Tracks",
    pathname: "/tracks",
    iconId: "tracks",
    iconWidth: 13,
    iconHeight: 18,
  },
  {
    label: "Artists",
    pathname: "/artists",
    iconId: "artists",
    iconWidth: 20,
    iconHeight: 20,
  },
  {
    label: "Genres",
    pathname: "/genres",
    iconId: "genres",
    iconWidth: 23,
    iconHeight: 20,
  },
  {
    label: "Log Out",
    pathname: "/",
    iconId: "log-out",
    iconWidth: 18,
    iconHeight: 18,
  },
] as const;

interface NavigationRailProps {
  handleSignOut: () => Promise<undefined>;
  pathname: string;
}

const NavigationRail = ({ handleSignOut, pathname }: NavigationRailProps) => {
  return (
    <nav className="fixed bottom-0 left-0  flex h-full w-20 flex-col items-center overflow-y-auto overflow-x-hidden rounded-r-2xl bg-background">
      <Link href={BUTTONS[0].pathname} className="mt-16">
        <NavigationButton
          {...BUTTONS[0]}
          isSelected={BUTTONS[0].pathname === pathname}
        />
      </Link>
      <div className="mt-14 flex flex-col gap-4">
        <Link href={BUTTONS[1].pathname}>
          <NavigationButton
            {...BUTTONS[1]}
            isSelected={BUTTONS[1].pathname === pathname}
          />
        </Link>
        <Link href={BUTTONS[2].pathname}>
          <NavigationButton
            {...BUTTONS[2]}
            isSelected={BUTTONS[2].pathname === pathname}
          />
        </Link>
        <Link href={BUTTONS[3].pathname}>
          <NavigationButton
            {...BUTTONS[3]}
            isSelected={BUTTONS[3].pathname === pathname}
          />
        </Link>
      </div>
      <div className="mt-auto flex flex-1 flex-col items-center justify-center pt-4">
        <div className=" rounded-2xl px-2 py-1" onClick={handleSignOut}>
          <NavigationButton {...BUTTONS[4]} isSelected={false} />
        </div>
      </div>
    </nav>
  );
};

export { NavigationRail };
