import { Icon } from "../Icon/Icon";
import { TimeRangeButtonsGroup } from "../TimeRangeButtonsGroup/TimeRangeButtonsGroup";
import { TrackCountSelector } from "../TrackCountSelector/TrackCountSelector";

interface HeaderProps {
  isTimeRangeButtonsGroupVisible?: boolean;
  isTrackCountSelectorVisible?: boolean;
  title: string;
}

const Header = ({
  isTimeRangeButtonsGroupVisible,
  isTrackCountSelectorVisible,
  title,
}: HeaderProps) => {
  return (
    <div className="items-left mx-4 mb-8 flex flex-col justify-between pt-8">
      <Icon id="replay" width="70" height="24" />
      <h1 className="mt-4 font-sans text-lg font-bold text-white">{title}</h1>
      <div className="mt-4 flex flex-row items-center">
        {isTimeRangeButtonsGroupVisible && <TimeRangeButtonsGroup />}
        {isTrackCountSelectorVisible && (
          <div className="ml-auto">
            <TrackCountSelector />
          </div>
        )}
      </div>
    </div>
  );
};

export { Header };
