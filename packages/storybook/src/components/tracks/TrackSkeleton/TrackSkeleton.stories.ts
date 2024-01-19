import type { Meta, StoryObj } from "@storybook/react";

import TrackSkeleton from "./TrackSkeleton";

const meta = {
  title: "Tracks/TrackSkeleton",
  component: TrackSkeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof TrackSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showAlbum: true,
    showDuration: true,
    showIndex: true,
  },
};
