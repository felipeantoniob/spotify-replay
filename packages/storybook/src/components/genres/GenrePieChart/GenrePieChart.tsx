"use client";

import type { Artist } from "@spotify/web-api-ts-sdk";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

import {
  GENRE_CHART_BACKGROUND_COLOR_ARRAY,
  GENRE_CHART_BORDER_COLOR_ARRAY,
} from "../../../constants/Colors";
import filterArtistsByGenre from "../../../utils/filterArtistsByGenre";

ChartJS.register(ArcElement, Tooltip, Legend);

interface GenreObject {
  genre: string;
  artists: string[];
}

interface GenrePieChartProps {
  genreChartData: GenreObject[];
  topArtists: Artist[];
}

const GenrePieChart = ({ genreChartData, topArtists }: GenrePieChartProps) => {
  const data = {
    labels: genreChartData.map((genreObject) => genreObject.genre),
    datasets: [
      {
        label: "Top Genres",
        data: genreChartData.map((genreObject) => genreObject.artists.length),
        backgroundColor: GENRE_CHART_BACKGROUND_COLOR_ARRAY,
        borderColor: GENRE_CHART_BORDER_COLOR_ARRAY,
        borderWidth: 1,
      },
    ],
  };

  return (
    <Pie
      data={data}
      options={{
        plugins: {
          legend: {
            display: true,
            position: "bottom",
            labels: {
              boxWidth: 20,
              color: "#fff",
              font: {
                size: 12,
                weight: "bold",
              },
            },
          },
          tooltip: {
            callbacks: {
              label: (context) => {
                return `${context.label}: ${filterArtistsByGenre(
                  topArtists,
                  context.label,
                ).join(", ")}`;
              },
            },
            bodyFont: { size: 12 },
          },
        },
      }}
    />
  );
};

export default GenrePieChart;
