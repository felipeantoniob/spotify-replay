import { Header } from "@spotify-replay/storybook/src/components/common/Header/Header";
import { GenrePieChart } from "@spotify-replay/storybook/src/components/genres/GenrePieChart/GenrePieChart";
import {
  SAMPLE_ARTISTS,
  SAMPLE_GENRE_CHART_DATA,
} from "@spotify-replay/storybook/src/constants/data";

import NavigationContainer from "../../components/NavigationContainer";

function Genres() {
  return (
    <>
      <main className="md:pl-20">
        <Header title="Your Top Genres" />
        <div className="flex h-screen justify-center pb-16">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <GenrePieChart
              genreChartData={SAMPLE_GENRE_CHART_DATA}
              topArtists={SAMPLE_ARTISTS}
            />
          </div>
        </div>
      </main>
      <NavigationContainer />
    </>
  );
}

export default Genres;
