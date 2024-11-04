import React, { type ReactNode } from "react";
import { CardTitle, CardDescription } from "./Card";

interface ImageCardProps {
  children?: ReactNode;
  className?: string;
  cardTitle?: string;
  cardDesc?: string;
  cardImg?: string;
}

const ImageCard = ({
  cardTitle,
  cardDesc,
  cardImg,
  children,
  className = "",
}: ImageCardProps) => {
  const backgroundImage = `url('${cardImg}')`;
  return (
    <div
      className={`${className} transition-all duration-300 ease-in-out hover:ring-1 hover:ring-[#4285F4] relative rounded-radius-xl overflow-hidden block z-10 bg-cover bg-no-repeat bg-center`}
      style={{
        backgroundImage,
      }}
    >
      <div className="absolute inset-0 z-[-5] transition-all duration-300 ease-in-out bg-gradient-to-b from-transparent via-black/50 to-black"></div>
      <section className="p-[32px] w-full h-full flex flex-col justify-end font-karla hover:bg-gradient-to-b hover:from-black/60 hover:via-black/70 hover:to-[#070707]">
        <CardTitle className="text-[24px] font-bold text-white mt-4 mb-6">
          {cardTitle}
        </CardTitle>
        <CardDescription className="text-[20px] leading-[25px] text-white">
          {cardDesc}
        </CardDescription>
        <div>{children}</div>
      </section>
    </div>
  );
};

export default ImageCard;
