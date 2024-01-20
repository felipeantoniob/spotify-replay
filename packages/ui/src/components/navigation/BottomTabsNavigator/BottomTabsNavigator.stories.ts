import type { Meta, StoryObj } from "@storybook/react";

import { BottomTabsNavigator } from "./BottomTabsNavigator";

const meta = {
  title: "Navigation/BottomTabsNavigator",
  component: BottomTabsNavigator,
  tags: ["autodocs"],
} satisfies Meta<typeof BottomTabsNavigator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pathname: "/genres",
  },
};
