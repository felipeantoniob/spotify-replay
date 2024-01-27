import type { Meta, StoryObj } from "@storybook/react";

import { ReplayLogo } from "./ReplayLogo";

const meta = {
  title: "Common/ReplayLogo",
  component: ReplayLogo,
  tags: ["autodocs"],
} satisfies Meta<typeof ReplayLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
