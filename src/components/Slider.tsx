import { cn } from "@/utils/util";
import React, { forwardRef, type InputHTMLAttributes } from "react";

interface SliderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  value: number;
  min?: number;
  max?: number;
  size?: "sm" | "lg";
}

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ value, min = 0, max = 100, size = "sm", ...props }, ref) => {
    const progress = ((value - min) / (max - min)) * 100;
    return (
      <>
        <input
          ref={ref}
          type="range"
          min={min}
          max={max}
          value={value}
          {...props}
          className={cn(
            "slider w-full rounded-full appearance-none bg-gray-300 h-4 cursor-pointer focus:outline-none",
            size === "sm" ? "h-1.5" : "h-4",
          )}
          style={{
            background: `linear-gradient(to right, var(--primary-500) ${progress}%, #d1d5db ${progress}%)`,
          }}          
        />
      </>
    );
  },
);

Slider.displayName = "Slider";

export default Slider;
