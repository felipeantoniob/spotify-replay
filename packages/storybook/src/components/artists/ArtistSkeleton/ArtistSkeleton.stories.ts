import type { Meta, StoryObj } from "@storybook/react";

import { ArtistSkeleton } from "./ArtistSkeleton";

const meta = {
  title: "Artists/ArtistSkeleton",
  component: ArtistSkeleton,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ArtistSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
