import { cn } from "@/lib/cn";
import React from "react";

type IconButtonProps = {
  className?: string;
  icon?: JSX.Element;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  IconButtonProps { }

export const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, icon, ...props }, ref) => {
    return (
      <button
        className={cn(
          "w-7 flex items-center justify-center min-w-[auto] h-7 text-[#666] rounded-full dark:hover:text-white hover:text-black",
          className
        )}
        ref={ref}
        {...props}>
        {icon}
      </button>
    );
  }
);
