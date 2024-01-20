import type { Meta, StoryObj } from "@storybook/react";

import { ArtistsCarouselSkeleton } from "./ArtistsCarouselSkeleton";

const meta = {
  title: "Profile/ArtistsCarouselSkeleton",
  component: ArtistsCarouselSkeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof ArtistsCarouselSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
