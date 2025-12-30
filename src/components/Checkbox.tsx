import React, { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils/util";

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  disabled?: boolean;
  checked?: boolean;
  readOnly?: boolean;
  children?: never;
  square?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { disabled, checked, className, children, readOnly, square, ...props },
    ref,
  ) => {
    return (
      <div
        className={cn(
          square ? "rounded-sm" : "rounded-full",
          "group inline-flex relative items-center  border-2 border-transparent hover:border-primary-300",
          disabled && "border-none",
        )}
      >
        <input
          type="checkbox"
          ref={ref}
          {...props}
          disabled={disabled}
          readOnly={readOnly}
          checked={checked}
          className={cn(
            square ? "rounded-sm" : "rounded-full",
            "peer relative h-5 w-5 cursor-pointer appearance-none border-2 border-gray-300 transition-all checked:border-primary-500 hover:border-primary-500 hover:bg-primary-25/25 disabled:opacity-30 disabled:pointer-events-none disabled:border-gray-400",
            className,
          )}
        />
        <span
          className={cn(
            "absolute text-primary-600 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100",
            disabled && "text-gray-300",
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.3"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        {children}
      </div>
    );
  },
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
