import Image from 'next/image';
import type { ReactNode } from 'react';

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
  <div className={`${className}`}>
    {children}
  </div>
);

export const CardIcon = ({ children, className }: CardProps) => (
  <span className={`${className}`}>
    {children}
  </span>
);

export const CardHeader = ({ children, className }: CardProps) => (
  <div className={`${className}`}>{children}</div>
);

export const CardBg = ({
  children,
  className,
  src,
  alt = 'Card',
  width = 300,
  height = 200,
}: CardBgProps) => (
  <div className={`relative ${className}`}>
    {src && ( // Only render the image if `src` is provided
      <Image src={src} alt={alt} width={width} height={height} layout="responsive" />
    )}
    <div className="absolute inset-0">{children}</div>
  </div>
);

export const CardTitle = ({ children, className }: CardProps) => (
  <h2 className={`font-montserrat ${className}`}>{children}</h2>
);

export const CardDescription = ({ children, className }: CardProps) => (
  <p className={`font-karla leading-[38px] text-white ${className}`}>{children}</p>
);

export const CardContent = ({ children, className }: CardProps) => (
  <div className={`font-karla text-white ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className }: CardProps) => (
  <div className={`font-karla text-white ${className}`}>{children}</div>
);
