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
        "border border-[#eee] hover:border-primary-500 rounded-radius-xl bg-[#FFFFFFE5] bg-gradient-to-b bg-[#fff] hover:from-[#8EB6F8D9] hover:to-[#356AC3D9] dark:from-[#252525D9] dark:to-[#070707D9] dark:hover:from-[#1A3562D9] dark:hover:to-[#070707D9] backdrop-blur-sm px-[32px] py-[64px] group",
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
