import { cn } from "@/utils/util";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes, ReactNode } from "react";

interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  children: ReactNode;
}

const paragraphVariants = cva(
  "font-karla font-normal text-dark dark:text-light",
  {
    variants: {
      variant: {
        b1: "text-2xl leading-[38px]",
        b2: "text-xl leading-[30px]",
        b3: "text-base",
        b4: "text-sm leading-[21px]",
      },
    },
    defaultVariants: {
      variant: "b1",
    },
  },
);

const Paragraph = ({
  children,
  className,
  variant,
  ...props
}: ParagraphProps) => {
  return (
    <p className={cn(paragraphVariants({ variant, className }))} {...props}>
      {children}
    </p>
  );
};

export default Paragraph;
