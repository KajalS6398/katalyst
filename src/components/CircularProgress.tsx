import { cn } from "@/utils/util";
import React from "react";

interface CircularProgressProps {
  strokeWidth?: number;
  size?: number;
  percentage: number;
  text?: string;
  textClassName?: string;
  strokeColor?: string;
  strokeLinecap?: "butt" | "round" | "square";
}

const CircularProgress = ({
  percentage,
  size = 160,
  strokeWidth = 8,
  text,
  textClassName,
  strokeColor = "var(--primary-600)",
  strokeLinecap = "round",
}: CircularProgressProps) => {
  const radius = (size - strokeWidth) / 2;
  const viewBox = `0 0 ${size} ${size}`;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * (percentage || 0)) / 100;

  return (
    <svg width={size} height={size} viewBox={viewBox}>
      <circle
        className="fill-none stroke-gray-200 dark:stroke-gray-900"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        className="fill-none transition-all delay-200 ease-in"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeLinecap={strokeLinecap}
        stroke={strokeColor}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        fill="currentColor"
        className={cn(textClassName)}
      >
        {text}
      </text>
    </svg>
  );
};

export default CircularProgress;
