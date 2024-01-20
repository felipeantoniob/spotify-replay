import type { Meta, StoryObj } from "@storybook/react";

import { SAMPLE_ARTISTS } from "../../../constants/data";
import { ArtistsCarousel } from "./ArtistsCarousel";

const meta = {
  title: "Profile/ArtistsCarousel",
  component: ArtistsCarousel,
  tags: ["autodocs"],
} satisfies Meta<typeof ArtistsCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    artists: SAMPLE_ARTISTS,
  },
};
