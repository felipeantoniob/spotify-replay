import type { Meta, StoryObj } from "@storybook/react";

import { TrackCountSelector } from "./TrackCountSelector";

const meta = {
  title: "Common/TrackCountSelector",
  component: TrackCountSelector,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TrackCountSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
