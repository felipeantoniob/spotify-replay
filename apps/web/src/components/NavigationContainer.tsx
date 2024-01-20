"use client";

import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

import { BottomTabsNavigator } from "@spotify-replay/storybook/src/components/navigation/BottomTabsNavigator/BottomTabsNavigator";
import { NavigationRail } from "@spotify-replay/storybook/src/components/navigation/NavigationRail/NavigationRail";

const NavigationContainer = () => {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 right-0">
      <div className="hidden md:flex">
        <NavigationRail pathname={pathname} handleSignOut={signOut} />
      </div>
      <div className="flex md:hidden">
        <BottomTabsNavigator pathname={pathname} />
      </div>
    </div>
  );
};

export default NavigationContainer;
