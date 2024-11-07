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
            background: `linear-gradient(to right, ${sliderColor ?? "#8EB6F8"} ${progress}%, #d1d5db ${progress}%)`,
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
            background-color: ${sliderColor ?? "#4285F4"};
            border-radius: 9999px;
            outline: 3px solid #B3CEFB
            cursor: pointer;
          }

          .slider::-webkit-slider-thumb:hover {
            background-color: #285092;
            outline: 3px solid #B3CEFB
          }

          .slider::-webkit-slider-thumb:active {
            background-color: #356ac3;
            outline: 3px solid #B3CEFB
            box-shadow: 0px 4px 4.7px 0px #0000002e;
          }

          .slider::-moz-range-thumb {
            width: 50px;
            outline: 3px solid #B3CEFB
            height: 50px;
            background-color: #000;
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
