import type { Meta, StoryObj } from "@storybook/react";

import { TracksCarouselSkeleton } from "./TracksCarouselSkeleton";

const meta = {
  title: "Profile/TracksCarouselSkeleton",
  component: TracksCarouselSkeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof TracksCarouselSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
