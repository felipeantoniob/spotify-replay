import { twMerge } from "tailwind-merge";

import type { IconId } from "../../common/Icon/Icon";
import { Icon } from "../../common/Icon/Icon";
import { Button } from "../../ui/Button/Button";

interface NavigationButtonProps {
  label: string;
  iconId: IconId;
  iconWidth: number;
  iconHeight: number;
  isSelected: boolean;
}

const NavigationButton = ({
  label,
  iconId,
  iconWidth,
  iconHeight,
  isSelected,
}: NavigationButtonProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1">
      <Button
        variant="ghost"
        size="md"
        className={twMerge(
          "rounded-2xl px-6",
          isSelected && "bg-primary-container",
        )}
      >
        <Icon
          id={iconId}
          width={iconWidth}
          height={iconHeight}
          className={twMerge(
            "group-hover:text-on-primary-container text-primary",
            isSelected && "text-on-primary-container",
          )}
        />
      </Button>
      <span className="text-medium text-sm text-primary">{label}</span>
    </div>
  );
};

export { NavigationButton };
