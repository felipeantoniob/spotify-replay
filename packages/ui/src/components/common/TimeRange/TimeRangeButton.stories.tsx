import type { Meta, StoryObj } from "@storybook/react";

import { TIME_RANGE_OPTIONS } from "./constants";
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
    timeRangeOption: TIME_RANGE_OPTIONS[0],
    setTimeRange: () => null,
  },
};
