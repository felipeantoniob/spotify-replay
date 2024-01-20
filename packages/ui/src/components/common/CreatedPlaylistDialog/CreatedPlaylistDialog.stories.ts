import type { Meta, StoryObj } from "@storybook/react";

import { CreatedPlaylistDialog } from "./CreatedPlaylistDialog";

const meta = {
  title: "Common/CreatedPlaylistDialog",
  component: CreatedPlaylistDialog,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof CreatedPlaylistDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
