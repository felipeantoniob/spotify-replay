import type { Artist } from "@spotify/web-api-ts-sdk";
import type { Meta, StoryObj } from "@storybook/react";

import { SAMPLE_ARTISTS } from "../../../constants/data";
import { ArtistsGrid } from "./ArtistsGrid";

const meta = {
  title: "Artists/ArtistsGrid",
  component: ArtistsGrid,
  tags: ["autodocs"],
} satisfies Meta<typeof ArtistsGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    artists: SAMPLE_ARTISTS as Artist[],
    isLoading: false,
    limit: 50,
  },
};
