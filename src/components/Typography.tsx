import { cn } from "@/utils/util";
import { cva, VariantProps } from "class-variance-authority";
import React, { ElementType, HTMLAttributes, ReactNode } from "react";

interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariant> {
  as?: ElementType;
  children: ReactNode;
}

const typographyVariant = cva("text-dark dark:text-light font-bold", {
  variants: {
    variant: {
      h1: "text-8xl leading-[144px]",
      h2: "text-7xl leading-[90px]",
      h3: "text-5xl leading-[72px]",
      h4: "text-[32px] leading-[48px]",
      h5: "text-2xl leading-9",
      h6: "text-xl font-semibold leading-[30px]",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

const Typography = ({
  as,
  variant = "h1",
  children,
  className,
  ...props
}: TypographyProps) => {
  const Component = as || (variant as ElementType);
  return (
    <Component
      className={cn(typographyVariant({ variant, className }))}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
