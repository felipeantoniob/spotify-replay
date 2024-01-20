import type { Meta, StoryObj } from "@storybook/react";

import { SAMPLE_TRACK } from "../../../constants/data";
import Track from "./Track";

const meta = {
  title: "Tracks/Track",
  component: Track,
  tags: ["autodocs"],
} satisfies Meta<typeof Track>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    index: 1,
    showAlbum: true,
    showDuration: true,
    showIndex: true,
    track: SAMPLE_TRACK,
    useNextImage: false,
  },
};
