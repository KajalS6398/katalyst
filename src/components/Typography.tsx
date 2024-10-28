import { cn } from "@/utils/util";
import { cva, VariantProps } from "class-variance-authority";
import React, { ElementType, HTMLAttributes, ReactNode } from "react";

interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariant> {
  as?: ElementType;
  children: ReactNode;
}

const typographyVariant = cva("text-dark font-bold", {
  variants: {
    variant: {
      h1: "text-8xl",
      h2: "text-7xl",
      h3: "text-5xl",
      h4: "text-[32px]",
      h5: "text-2xl",
      h6: "text-xl font-semibold",
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
      className={cn(typographyVariant({ variant }), className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
