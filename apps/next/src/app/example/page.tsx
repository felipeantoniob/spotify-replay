import { auth, signIn, signOut } from "@spotify-replay/auth";
import { Icon } from "@spotify-replay/ui/src/components/common/Icon/Icon";
import { Button } from "@spotify-replay/ui/src/components/ui/Button/Button";

import SpotifySearch from "./SpotifySearch";

export default async function Home() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div>
        <h1>Spotify Web API Typescript SDK in Next.js</h1>
        <form
          action={async () => {
            "use server";
            await signIn("spotify", { redirectTo: "/profile" });
          }}
        >
          <Button
            size="xl"
            className="mt-8 flex flex-row gap-2 rounded-full bg-black text-sm"
          >
            <Icon id="spotify" width="22" height="22" />
            Log in with Spotify
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <p>Logged in as {session.user.name}</p>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button>Sign out</button>
      </form>
      <SpotifySearch />
    </div>
  );
}
