import { cn } from "@/utils/util";
import { cva, type VariantProps } from "class-variance-authority";
import React, { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  disabled?: boolean;
  type: "text" | "url" | "email" | "password" | "number" | "tel" | "search";
}

const inputVariants = cva(
  "flex items-center text-sm gap-2 py-2 px-4 rounded-radius-md border font-karla has-[:disabled]:opacity-30 has-[:disabled]:select-none has-[:disabled]:pointer-events-none",
  {
    variants: {
      variant: {
        default:
          "dark:text-gray-500 dark:bg-gray-900 dark:border-gray-800 dark:hover:text-light dark:hover:bg-gray-800 dark:hover:border-gray-700 dark:focus-within:bg-gray-100 dark:focus-within:border-gray-800 dark:focus-within:hover:bg-gray-700 dark:focus-within:text-dark dark:has-[:disabled]:bg-gray-700 bg-gray-100 border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-500 hover:bg-gray-300 focus-within:bg-gray-50 focus-within:border-gray-400 focus-within:text-dark focus-within:hover:text-dark focus-within:hover:border-primary-100 focus-within:hover:bg-primary-50 has-[:disabled]:bg-gray-25 has-[:disabled]:border-gray-400",
        glass:
          "backdrop-blur-[3.5px] bg-light/10 dark:bg-dark/20 dark:border-gray-800 border-gray-200/50 text-light",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { startIcon, endIcon, className, variant, type, disabled, ...props },
    ref,
  ) => {
    return (
      <div className={cn(inputVariants({ variant, className }))}>
        {startIcon}
        <input
          {...props}
          ref={ref}
          disabled={disabled}
          type={type}
          className="w-full bg-none bg-transparent outline-none"
        />
        {endIcon}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
