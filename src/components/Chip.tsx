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
        "bg-white text-brand-500 hover:text-white hover:bg-gradient-to-r hover:from-[#4285F4] hover:to-[#264D8E]",
      secondary:
        "bg-brand-500 text-white hover:text-white hover:bg-gradient-to-r hover:from-[#4285F4] hover:to-[#285092]",
      glass: "text-brand-500",
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
        "rounded-radius-xl bg-gradient-to-r",
        {
          solid: "from-[#B3CEFB] to-[#4285F4]",
          primary: "from-[#B3CEFB] to-[#4285F4]",
          secondary: "from-[#B3CEFB] to-[#4285F4]",
          glass: "border border-[#4285F4]",
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
