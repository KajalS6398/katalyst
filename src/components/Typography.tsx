import { cn } from "@/utils/util";
import { cva, type VariantProps } from "class-variance-authority";
import React, {
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";

interface TypographyProps
  extends
    HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariant> {
  as?: ElementType;
  children: ReactNode;
}

const typographyVariant = cva("text-dark dark:text-light font-bold", {
  variants: {
    variant: {
      h1: "xl:text-8xl xl:leading-[144px] lg:text-7xl lg:leading-[90px] md:text-6xl md:leading-[72px] sm:text-5xl sm:leading-[48px] text-4xl leading-9",
      h2: "xl:text-7xl xl:leading-[90px] lg:text-6xl lg:leading-[72px] md:text-5xl md:leading-[48px] sm:text-4xl sm:leading-9 text-3xl leading-7",
      h3: "xl:text-5xl xl:leading-[72px] lg:text-4xl lg:leading-9 md:text-3xl md:leading-7 sm:text-2xl text-xl leading-[30px]",
      h4: "md:text-[32px] md:leading-[48px] sm:text-xl sm:leading-[30px] text-xl",
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
