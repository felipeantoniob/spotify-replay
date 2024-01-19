"use client";

import Link from "next/link";

import { NavigationButton } from "../NavigationButton/NavigationButton";

const TABS = [
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
] as const;

interface BottomTabsNavigatorProps {
  pathname: string;
}

const BottomTabsNavigator = ({ pathname }: BottomTabsNavigatorProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-10 flex h-20 flex-row bg-background">
      {TABS.map((tab, index) => (
        <div
          key={index}
          className="flex h-full flex-1 flex-col items-center justify-center"
        >
          <Link href={tab.pathname} className="flex cursor-pointer">
            <NavigationButton {...tab} isSelected={tab.pathname === pathname} />
          </Link>
        </div>
      ))}
    </nav>
  );
};

export { BottomTabsNavigator };
