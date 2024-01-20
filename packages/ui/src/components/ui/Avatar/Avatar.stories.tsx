import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

const meta = {
  title: "UI/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />,
    className: "h-16 w-16",
  },
};

export const Fallback: Story = {
  args: {
    children: <AvatarFallback>CN</AvatarFallback>,
    className: "h-16 w-16",
  },
};
