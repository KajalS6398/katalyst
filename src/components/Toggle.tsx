import { cn } from "@/utils/util";
import { cva, type VariantProps } from "class-variance-authority";
import React, { forwardRef, type InputHTMLAttributes } from "react";

interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof toggleVariants> {
  icon?: JSX.Element;
  children?: never;
  size?: "sm" | "lg";
  disabled?: boolean;
}

const toggleVariants = cva(
  "rounded-radius-xl bg-gray-300 transition-colors peer-checked:bg-primary-500 peer-active:ring-2 peer-active:ring-primary-300",
  {
    variants: {
      size: {
        sm: "w-8 h-[18px]",
        lg: "w-[52px] h-[27px]",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  },
);

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ icon, children, disabled, size = "lg", ...props }, ref) => {
    return (
      <label
        className={cn(
          "flex cursor-pointer select-none items-center",
          disabled && "opacity-50 pointer-events-none",
        )}
      >
        <div className="relative">
          <input
            type="checkbox"
            disabled={disabled}
            ref={ref}
            {...props}
            className="sr-only peer"
          />
          <div className={cn(toggleVariants({ size }))}></div>
          <div
            className={cn(
              "absolute  flex items-center justify-center bg-white transition-transform",
              size === "sm"
                ? "peer-checked:translate-x-2 top-[1px] left-[2px] w-5 h-4 rounded-radius-md"
                : "peer-checked:translate-x-3 top-[2.5px] left-1 h-[22px] w-[34px] rounded-radius-lg",
            )}
          >
            <span className="flex items-center justify-center">{icon}</span>
            {children}
          </div>
        </div>
      </label>
    );
  },
);

Toggle.displayName = "Toggle";

export default Toggle;
