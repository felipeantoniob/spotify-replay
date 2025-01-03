import { Icon } from "../Icon/Icon";

interface FloatingActionButtonProps {
  buttonText: string;
  description: string;
  handleClick: () => void;
  icon: JSX.Element;
  isDisabled: boolean;
  isExpanded: boolean;
  toggleButton: () => void;
}

const FloatingActionButton = ({
  buttonText,
  description,
  handleClick,
  icon,
  isDisabled,
  isExpanded,
  toggleButton,
}: FloatingActionButtonProps) => {
  return (
    <div className="mx-auto mb-2 md:max-w-4xl">
      <div className="mx-2 ml-auto flex w-fit flex-row items-center gap-2 rounded-2xl bg-tertiary-container px-3 py-3 drop-shadow-xl transition">
        {isExpanded && (
          <>
            <p className="w-40 px-1 text-left text-xs text-on-tertiary-container">
              {description}
            </p>
            <div className="flex flex-row items-center">
              <button
                onClick={handleClick}
                disabled={isDisabled}
                className="p-2"
              >
                <p className="text-sm font-bold text-on-tertiary-container transition-all hover:opacity-75">
                  {buttonText}
                </p>
              </button>
              <button className="p-2" onClick={toggleButton}>
                <Icon id="close" width="17" height="18" />
              </button>
            </div>
          </>
        )}
        {!isExpanded && (
          <button className="p-2" onClick={toggleButton}>
            {icon}
          </button>
        )}
      </div>
    </div>
  );
};

export { FloatingActionButton };
