import { cn } from "@/utils/util";
import React from "react";

export type ProgressProps = {
  progress: number;
  progressText?: string;
  progressColor: string;
  progressTextPosition?: "top" | "bottom" | "left" | "right";
  rounded?: boolean;
  height?: string;
};

const Progress = ({
  progress,
  progressText = "",
  progressColor,
  progressTextPosition,
  rounded,
  height = "3px",
}: ProgressProps) => {
  const _progress = Math?.min(Math?.max(0, progress), 100);
  return (
    <div
      className={cn(
        progressTextPosition === "right"
          ? "flex items-center gap-1"
          : progressTextPosition === "left"
            ? "flex items-center gap-1"
            : "",
      )}
    >
      <span
        className={cn(
          "text-dark dark:text-light text-sm",
          progressTextPosition === "left"
            ? "inline-block"
            : progressTextPosition === "top"
              ? "flex justify-end"
              : "hidden",
        )}
      >
        {progressText}
      </span>
      <div
        className={cn(
          "w-full h-1 bg-gray-200 dark:bg-gray-800",
          rounded && "rounded",
        )}
        style={{ height }}
        role="progressbar"
        aria-valuenow={_progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className={`${progressColor} h-full transition-all delay-100 duration-300 ease-in ${rounded && "rounded"}`}
          style={{ width: `${_progress}%` }}
        ></div>
      </div>
      <span
        className={cn(
          "text-dark dark:text-light text-sm",
          progressTextPosition === "bottom"
            ? "flex justify-end"
            : progressTextPosition === "top"
              ? "hidden"
              : progressTextPosition === "right"
                ? "flex justify-end"
                : "hidden",
        )}
      >
        {progressText}
      </span>
    </div>
  );
};

export default Progress;
