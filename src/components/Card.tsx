import Image from "next/image";
import type { ReactNode } from "react";
import Typography from "./Typography";
import Paragraph from "./Paragraph";
import { cn } from "@/utils/util";

interface CardProps {
  children?: ReactNode;
  className?: string;
}

interface CardBgProps extends CardProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
}

export const Card = ({ children, className }: CardProps) => (
  <article className={className}>{children}</article>
);

export const CardIcon = ({ children, className }: CardProps) => (
  <span className={`${className}`}>{children}</span>
);

export const CardHeader = ({ children, className }: CardProps) => (
  <div className={`${className}`}>{children}</div>
);

export const CardBg = ({
  children,
  className,
  src,
  alt = "Card",
  width = 300,
  height = 200,
}: CardBgProps) => (
  <div className={`relative ${className}`}>
    {src && (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout="responsive"
      />
    )}
    <div className="absolute inset-0">{children}</div>
  </div>
);

export const CardTitle = ({ children, className }: CardProps) => (
  <Typography variant="h4" className={className}>
    {children}
  </Typography>
);

export const CardDescription = ({ children, className }: CardProps) => (
  <Paragraph variant="b1" className={cn("text-light", className)}>
    {children}
  </Paragraph>
);

export const CardContent = ({ children, className }: CardProps) => (
  <div className={`font-karla text-white ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className }: CardProps) => (
  <div className={`font-karla text-white ${className}`}>{children}</div>
);
