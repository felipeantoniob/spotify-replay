import type { Meta, StoryObj } from "@storybook/react";

import { NavigationRail } from "./NavigationRail";

const meta = {
  title: "Navigation/NavigationRail",
  component: NavigationRail,
  tags: ["autodocs"],
} satisfies Meta<typeof NavigationRail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    handleSignOut: async () => {
      await new Promise((resolve) => setTimeout(resolve, 100));
      return undefined;
    },
    pathname: "/genres",
  },
};
