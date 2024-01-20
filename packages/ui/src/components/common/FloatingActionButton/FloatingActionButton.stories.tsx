import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "../Icon/Icon";
import { FloatingActionButton } from "./FloatingActionButton";

const meta = {
  title: "Common/FloatingActionButton",
  component: FloatingActionButton,
  tags: ["autodocs"],
} satisfies Meta<typeof FloatingActionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    description: "Create a playlist of your top artists?",
    buttonText: "Create",
    isDisabled: false,
    handleClick: () => null,
    icon: (
      <Icon
        id="playlist"
        width="19"
        height="14"
        className="text-on-tertiary-container"
      />
    ),
  },
};
