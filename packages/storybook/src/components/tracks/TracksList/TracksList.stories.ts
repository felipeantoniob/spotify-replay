import type { Meta, StoryObj } from "@storybook/react";

import { SAMPLE_TRACKS } from "../../../constants/data";
import TracksList from "./TracksList";

const meta = {
  title: "Tracks/TracksList",
  component: TracksList,
  tags: ["autodocs"],
} satisfies Meta<typeof TracksList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: false,
    limit: 50,
    tracks: SAMPLE_TRACKS,
  },
};
