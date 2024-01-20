import type { Meta, StoryObj } from "@storybook/react";

import { SAMPLE_TRACKS } from "../../../constants/data";
import { TracksCarousel } from "./TracksCarousel";

const meta = {
  title: "Profile/TracksCarousel",
  component: TracksCarousel,
  tags: ["autodocs"],
} satisfies Meta<typeof TracksCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tracks: SAMPLE_TRACKS,
  },
};
