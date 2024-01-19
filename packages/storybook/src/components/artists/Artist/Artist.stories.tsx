import type { Artist } from "@spotify/web-api-ts-sdk";
import type { Meta, StoryObj } from "@storybook/react";

import { Artist as ArtistComponent } from "./Artist";

const meta = {
  title: "Artists/Artist",
  component: ArtistComponent,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ArtistComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    artist: {
      images: [{ url: "https://placehold.co/192", width: 192, height: 192 }],
      name: "Feid",
    } as Artist,
  },
};
