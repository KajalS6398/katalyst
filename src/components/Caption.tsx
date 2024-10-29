import { cn } from "@/utils/util";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes, ReactNode } from "react";

interface CaptionProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof captionVariants> {
  children: ReactNode;
}

const captionVariants = cva("font-bold font-karla text-dark dark:text-light", {
  variants: {
    variant: {
      sm: "text-[10px] leading-[15px]",
      md: "text-sm leading-[18px]",
    },
  },
  defaultVariants: {
    variant: "sm",
  },
});

const Caption = ({ children, variant, className, ...props }: CaptionProps) => {
  return (
    <span className={cn(captionVariants({ variant, className }))} {...props}>
      {children}
    </span>
  );
};

export default Caption;
