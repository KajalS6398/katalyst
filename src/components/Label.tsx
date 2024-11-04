import { cn } from "@/utils/util";
import { cva, type VariantProps } from "class-variance-authority";
import React, { type LabelHTMLAttributes, type ReactNode } from "react";

interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof labelVariants> {
  htmlFor?: string;
  children: ReactNode;
  required?: boolean;
  disabled?: boolean;
}

const labelVariants = cva("font-medium text-dark dark:text-light", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const Label = ({
  children,
  htmlFor,
  size,
  required,
  disabled,
  className,
  ...props
}: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "cursor-pointer",
        labelVariants({ className, size }),
        disabled === true ? "opacity-30 select-none" : "opacity-100",
      )}
      {...props}
    >
      {children}
      {required && <span className={"text-error"}>*</span>}
    </label>
  );
};

export default Label;
