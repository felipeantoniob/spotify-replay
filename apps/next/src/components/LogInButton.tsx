"use client";

import { signIn } from "next-auth/react";

import { Icon } from "@spotify-replay/ui/src/components/common/Icon/Icon";
import { Button } from "@spotify-replay/ui/src/components/ui/Button/Button";

const LogInButton = () => {
  return (
    <Button
      size="xl"
      className="mt-8 flex flex-row gap-2 rounded-full bg-black text-sm"
      onClick={() => signIn("spotify", { callbackUrl: "/profile" })}
    >
      <Icon id="spotify" width="22" height="22" />
      Log in with Spotify
    </Button>
  );
};

export default LogInButton;
