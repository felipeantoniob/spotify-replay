import type { Meta, StoryObj } from "@storybook/react";

import {
  SAMPLE_ARTISTS,
  SAMPLE_GENRE_CHART_DATA,
} from "../../../constants/data";
import { GenrePieChart } from "./GenrePieChart";

const meta = {
  title: "Genres/GenrePieChart",
  component: GenrePieChart,
  tags: ["autodocs"],
} satisfies Meta<typeof GenrePieChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    genreChartData: SAMPLE_GENRE_CHART_DATA,
    topArtists: SAMPLE_ARTISTS,
  },
};
