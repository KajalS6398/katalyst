import { cn } from "@/utils/util";
import { cva, type VariantProps } from "class-variance-authority";
import React, { type InputHTMLAttributes, forwardRef } from "react";

interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof toggleVariants> {
  size?: "sm" | "lg";
  disabled?: boolean;
  children?: never;
}

const toggleVariants = cva(
  "relative bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-brand-300 peer rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute  after:bg-white after:border-gray-300 after:border after:transition-all peer-checked:bg-brand-500",
  {
    variants: {
      size: {
        sm: "w-8 h-[18px] after:w-5 after:h-4 after:top-[1px] after:start-[2px] peer-checked:after:translate-x-2 rounded-radius-lg after:rounded-radius-md",
        lg: "w-[52px] h-[27px] after:w-[34px] after:h-[22px] after:top-[2.5px] after:start-[2px] peer-checked:after:translate-x-3.5 rounded-radius-xl after:rounded-radius-lg",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  },
);

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ size, className, disabled, children, ...props }, ref) => {
    return (
      <label
        className={cn(
          "inline-flex items-center cursor-pointer",
          disabled && "opacity-30 pointer-events-none",
        )}
      >
        <input
          type="checkbox"
          disabled={disabled}
          ref={ref}
          {...props}
          className="sr-only flex justify-center peer"
        />
        <span
          className={cn(
            toggleVariants({
              className,
              size,
            }),
          )}
        >
          {children}
        </span>
      </label>
    );
  },
);

Toggle.displayName = "Toggle";

export default Toggle;
