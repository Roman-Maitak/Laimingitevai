import React from "react";
import { useTheme } from "../../../features/theme-toggle/model/themeContext";
import { Theme } from "../../../features/theme-toggle/model/types";
import { cn } from "../../utils";

export type TabProps = {
  name: string;
  onClick: () => void;
  isActive: boolean;
  className?: string;
  TabIcon: JSX.Element;
};

export const Tab = ({
  onClick,
  isActive,
  name,
  className,
  TabIcon,
}: TabProps) => {
  const [theme] = useTheme();

  const iconColor = theme === Theme.DARK ? "black" : "white";
  return (
    <button
      className={cn(
        className,
        `px-4 py-2 w-full text-left rounded-lg h-20`,
        `${isActive ? "bg-primary" : "bg-secondary hover:bg-primary"}`,
        `hover:text-text`
      )}
      onClick={onClick}
    >
      <span className="flex align-middle items-center h-15">
        <div className="w-15 h-15 items-center justify-center ">
          {!!TabIcon &&
            React.cloneElement(TabIcon, {
              color: `${isActive ? iconColor : "black"}`,
            })}
        </div>
        <div className={cn(`${isActive ? "text-white" : "text-text"}`, "ml-2")}>
          {name}
        </div>
      </span>
    </button>
  );
};
