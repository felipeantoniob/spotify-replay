"use client";

import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

import { BottomTabsNavigator } from "@spotify-replay/ui/src/components/navigation/BottomTabsNavigator/BottomTabsNavigator";
import { NavigationRail } from "@spotify-replay/ui/src/components/navigation/NavigationRail/NavigationRail";

import FloatingActionButtonContainer from "./FloatingActionButtonContainer";
import Player from "./Player";

const ROUTES_WITH_FAB = ["/artists", "/tracks"];

const NavigationContainer = () => {
  const pathname = usePathname();

  if (pathname === "/") return null;

  return (
    <div className="fixed inset-x-0 bottom-0">
      <div className="hidden md:flex">
        <NavigationRail pathname={pathname} handleSignOut={signOut} />
      </div>
      <div className="flex md:hidden">
        <BottomTabsNavigator pathname={pathname} />
      </div>
      {ROUTES_WITH_FAB.includes(pathname) && <FloatingActionButtonContainer />}
      <Player />
    </div>
  );
};

export default NavigationContainer;
