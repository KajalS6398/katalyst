import { cn } from "@/utils/util";
import React from "react";

type Props = {
  label: string;
  icon?: React.ElementType;
  fillColor: string;
  textHoverColor: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const FillButton: React.FC<Props> = ({
  label,
  icon: Icon,
  fillColor = "bg-white",
  textHoverColor = "group-hover:text-primary-900",
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "relative overflow-hidden group px-6 py-4 rounded-full flex text-dark dark:text-light items-center gap-2 w-full justify-between border dark:border-gray-400 transition-colors",
        className,
      )}
    >
      {/* Expanding background */}
      <span
        className={cn(
          "absolute inset-0 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100",
          fillColor,
        )}
      />

      {/* Label */}
      <span className={cn("relative z-10 transition-colors", textHoverColor)}>
        {label}
      </span>

      {/* Icon */}
      {Icon && (
        <Icon
          size={18}
          className={cn("relative z-10 transition-colors", textHoverColor)}
        />
      )}
    </button>
  );
};

export default FillButton;
