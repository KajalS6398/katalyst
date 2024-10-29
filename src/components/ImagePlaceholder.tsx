import { cn } from '@/utils/util';
import { cva, VariantProps } from 'class-variance-authority';
import Image, { ImageProps } from 'next/image';
import React, { HTMLAttributes, ReactNode } from 'react';

interface ImagePlaceholderProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof imageVariant> {
  children?: ReactNode;
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean; // Add fill prop to the interface
}

const imageVariant = cva('', {
  variants: {
    size: {
      sm: 'w-[210px] h-[140px] rounded-lg',
      md: 'w-[351px] h-[233px] rounded-2xl',
      lg: 'w-[499px] h-[331px] rounded-[32px]',
    },
  },
});

const ImagePlaceholder = ({
  children,
  className,
  size = 'sm',
  src,
  alt,
  width,
  height,
  fill = false, // Default to false for fill
  ...props
}: ImagePlaceholderProps) => {
  return (
    <div
      className={cn(
        'flex items-center text-center justify-center gap-2',
        imageVariant({ size }),
        className
      )}
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        {...(fill ? { fill: true } : {})} // Apply fill only if true
        {...(!fill && width ? { width } : {})} // Conditionally spread width if not using fill
        {...(!fill && height ? { height } : {})} // Conditionally spread height if not using fill
        className="w-full"
      />
      {children}
    </div>
  );
};

export default ImagePlaceholder;
