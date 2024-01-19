import type { PropsWithChildren } from "react";
import { forwardRef } from "react";

import { Badge } from "../../ui/Badge/Badge";
import { Button } from "../../ui/Button/Button";

interface TimeRangeButtonProps {
  isSelected: boolean;
  onClick: () => void;
}

const TimeRangeButton = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<TimeRangeButtonProps>
>(({ children, isSelected, onClick }, ref) => {
  return (
    <Button
      ref={ref}
      onClick={onClick}
      variant="ghost"
      className="h-[35px] rounded-full p-0 hover:bg-transparent hover:opacity-80"
    >
      <Badge variant={isSelected ? "secondary" : "outline"}>{children}</Badge>
    </Button>
  );
});

export { TimeRangeButton };
