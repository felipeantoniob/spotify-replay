import type { Meta, StoryObj } from "@storybook/react";

import { TimeRangeButtonsGroup } from "./TimeRangeButtonsGroup";

const meta = {
  title: "Common/TimeRangeButtonsGroup",
  component: TimeRangeButtonsGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TimeRangeButtonsGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    setTimeRange: () => null,
    selectedTimeRange: "long_term",
  },
};
