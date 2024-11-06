import { cn } from "@/utils/util";
import React, { forwardRef, type InputHTMLAttributes } from "react";

interface SliderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  value: number;
  min?: number;
  max?: number;
  size?: "sm" | "lg";
  sliderColor?: string;
}

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ value, min = 0, max = 100, size = "sm", sliderColor, ...props }, ref) => {
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
            background: `linear-gradient(to right, ${sliderColor ?? "#3b82f6"} ${progress}%, #d1d5db ${progress}%)`,
          }}
        />
        <style jsx>{`
          .slider {
            -webkit-appearance: none;
            appearance: none;
          }

          .slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 36px;
            height: 24px;
            background-color: ${sliderColor ?? "#3b82f6"};
            border: none;
            border-radius: 9999px;
            cursor: pointer;
          }

          .slider::-webkit-slider-thumb:hover {
            background-color: #285092;
          }

          .slider::-webkit-slider-thumb:active {
            background-color: #356ac3;
            box-shadow: 0px 4px 4.7px 0px #0000002e;
          }

          .slider::-moz-range-thumb {
            width: 50px;
            height: 50px;
            background-color: #000;
            border: none;
            border-radius: 0;
            cursor: pointer;
          }
        `}</style>
      </>
    );
  },
);

Slider.displayName = "Slider";

export default Slider;
