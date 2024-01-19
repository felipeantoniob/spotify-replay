import type { Meta, StoryObj } from "@storybook/react";

import { TimeRangeButton } from "./TimeRangeButton";

const meta = {
  title: "Common/TimeRangeButton",
  component: TimeRangeButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TimeRangeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isSelected: true,
    onClick: () => null,
    children: "All Time",
  },
};
