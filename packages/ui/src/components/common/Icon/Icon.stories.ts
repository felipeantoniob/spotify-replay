import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./Icon";

const meta = {
  title: "Common/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "replay",
  },
};
