import type { Meta, StoryObj } from "@storybook/react";

import { NavigationButton } from "./NavigationButton";

const meta = {
  title: "Navigation/NavigationButton",
  component: NavigationButton,
  tags: ["autodocs"],
  parameters: {
    backgrounds: {
      default: "navigation-rail-background",
      values: [
        {
          name: "navigation-rail-background",
          value: "#fff",
        },
      ],
    },
  },
} satisfies Meta<typeof NavigationButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Profile",
    iconId: "profile",
    iconWidth: 20,
    iconHeight: 20,
    isSelected: false,
  },
};
