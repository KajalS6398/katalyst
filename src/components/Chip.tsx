import React, { type HTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/util";

interface ButtonProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  children?: ReactNode;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

const chipVariants = cva("", {
  variants: {
    variant: {
      primary:
        "bg-white text-primary-500 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-600",
      secondary:
        "bg-primary-500 text-white hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-600",
      glass: "text-primary-500",
    },
    size: {
      sm: "text-sm py-1 px-3",
      md: "text-base px-4 py-2",
      lg: "text-lg px-6 py-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

const Chip = ({
  children,
  className,
  variant,
  startIcon,
  endIcon,
  size,
  ...props
}: ButtonProps) => {
  return (
    <div
      className={cn(
        "rounded-radius-xl bg-gradient-to-r w-fit",
        {
          solid: "from-primary-200 to-primary-500",
          primary: "from-primary-200 to-primary-500",
          secondary: "from-primary-200 to-primary-500",
          glass: "border border-primary-500",
        }[variant || "primary"],
        "p-[1px]",
      )}
    >
      <div
        {...props}
        className={cn(
          "flex items-center justify-center gap-2 text-center font-semibold",
          "rounded-radius-xl",
          chipVariants({ variant, size }),
          className,
        )}
      >
        {startIcon}
        {children}
        {endIcon}
      </div>
    </div>
  );
};

export default Chip;
