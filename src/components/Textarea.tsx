import { cn } from "@/utils/util";
import { cva, type VariantProps } from "class-variance-authority";
import React, {
  forwardRef,
  type ReactNode,
  type TextareaHTMLAttributes,
} from "react";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  disabled?: boolean;
  rows?: number;
  cols?: number;
  children?: ReactNode;
}

const textareaVariants = cva(
  "flex items-center gap-2 font-karla text-sm outline-none rounded-radius-md border py-2 px-4 disabled:opacity-60 disabled:select-none disabled:pointer-events-none w-full",
  {
    variants: {
      variant: {
        default:
          "dark:text-gray-500 dark:bg-gray-900 dark:border-gray-800 dark:hover:text-light dark:hover:bg-gray-800 dark:hover:border-gray-700 dark:focus-within:bg-gray-100 dark:focus-within:border-gray-800 dark:focus-within:hover:bg-gray-700 dark:focus-within:text-dark dark:disabled:bg-gray-700 bg-gray-100 border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-500 hover:bg-gray-300 focus-within:bg-gray-50 focus-within:border-gray-400 focus-within:text-dark focus-within:hover:text-dark focus-within:hover:border-primary-100 focus-within:hover:bg-primary-50 disabled:bg-gray-25 disabled:border-gray-400",
        glass:
          "backdrop-blur-[3.5px] bg-light/10 dark:bg-dark/20 dark:border-gray-800 border-gray-200/50 text-light",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows, cols, variant, disabled, children, ...props }, ref) => {
    return (
      <textarea
        {...props}
        ref={ref}
        disabled={disabled}
        rows={rows}
        cols={cols}
        className={cn(textareaVariants({ variant, className }))}
      >
        {children}
      </textarea>
    );
  },
);

Textarea.displayName = "Textarea";

export default Textarea;
