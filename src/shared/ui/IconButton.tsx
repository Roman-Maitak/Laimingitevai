import React from "react";
import { cn } from "../utils";
type IconButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  //   [x: string]: any;
} & React.ComponentPropsWithoutRef<"button">;
const IconButton = ({
  children,
  onClick,
  className,
  ...props
}: IconButtonProps) => {
  return (
    <button
      className={cn(`w-[28px] h-[28px] cursor-pointer`, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default IconButton;
