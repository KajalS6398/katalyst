import React, { type ReactNode } from "react";
import Card, { CardDescription, CardTitle } from "./Card";
import { cn } from "@/utils/util";

interface StatsCardProps {
  children?: ReactNode;
  cardIcon?: ReactNode;
  className?: string;
  statTitle?: string;
  statDesc?: string;
}

const StatsCard = ({
  statTitle,
  statDesc,
  className,
  cardIcon,
}: StatsCardProps) => {
  return (
    <Card
      className={cn(
        "border border-gray-200 hover:border-primary-500 rounded-radius-xl bg-[#FFFFFFE5] bg-gradient-to-b bg-[#fff] hover:from-primary-300 hover:to-primary-600 dark:from-primary-800 dark:to-primary-700 dark:hover:from-primary-800 dark:hover:to-primary-900 backdrop-blur-sm px-[32px] py-[64px] group",
        className,
      )}
    >
      <span className="group-hover:text-white text-dark dark:text-white">
        {cardIcon}
      </span>
      <CardTitle className="group-hover:text-white text-[48px] font-bold text-primary-500 dark:text-white my-4">
        {statTitle}
      </CardTitle>
      <CardDescription className="group-hover:text-white text-[24px] hover:text-white text-dark leading-[25px]">
        {statDesc}
      </CardDescription>
    </Card>
  );
};

export default StatsCard;
