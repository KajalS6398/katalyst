"use client";

import {
  Card,
  CardBg,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import Chip from "@/components/Chip";
import ImageCard from "@/components/ImageCard";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { LuAngry, LuAnnoyed, LuHeart } from "react-icons/lu";

const Test = () => {
  const { theme, switchDark, switchLight } = useTheme();

  return (
    <div className="p-4 bg-light dark:bg-black h-full">
      <header className="p-4 transition-colors duration-300 flex justify-between items-center">
        <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-25">
          Katalyst:
        </h2>
        <p className="mb-4 dark:text-gray-25 text-gray-900">
          Current theme: {theme}
        </p>
        <div className="space-x-2">
          <button
            onClick={switchLight}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Light Mode
          </button>
          <button
            onClick={switchDark}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 focus:outline-none"
          >
            Dark Mode
          </button>
        </div>
      </header>

      {/* <div className="bg-gradient-to-r from-green-400 to-blue-500 p-4">
        <div className="bg-white p-4">asdfghjk</div>
      </div> */}

      <div className="flex gap-4 items-center my-4">
        <h1 className="dark:text-gray-25 text-gray-900">Variants - </h1>
        <Chip
          startIcon={<LuAnnoyed />}
          endIcon={<LuAngry />}
          variant="primary"
          size="md"
        >
          Primary
        </Chip>
        <Chip variant="secondary" size="md">
          Secondary
        </Chip>
        <Chip variant="glass" size="md">
          Glass
        </Chip>
      </div>

      <div className="flex gap-4 items-center my-4">
        <h1 className="dark:text-gray-25 text-gray-900">Sizes - </h1>
        <Chip endIcon={<LuHeart />} variant="primary" size="sm">
          Solid
        </Chip>
        <Chip variant="primary" size="md">
          Primary
        </Chip>
        <Chip variant="primary" size="lg">
          Secondary
        </Chip>
      </div>

      <div>
        <h1 className="dark:text-gray-25 text-gray-900">Cards: </h1>
        <div className="my-5">
          <h1>Card Large</h1>
          <Card className="w-[70%] rounded-radius-lg px-[64px] py-[32px] gradientOne border-2 border-[#0707071F] hover:border-2 hover:border-brand-500">
            <CardHeader>
              <CardTitle className="text-[32px] font-bold leading-[48px] text-white">
                Modal Card Title
              </CardTitle>
              <CardDescription className="my-4 text-[24px]">
                Lorem ipsum dolor sit amet consectetur. Accumsan habitant eu
                volutpat amet neque netus sem. Massa non massa a feugiat.
                Ultrices sit sit sagittis urna phasellus volutpat nulla justo
                morbi. In aliquet in tincidunt ac euismod dictum urna neque
                lectus.
              </CardDescription>
            </CardHeader>
            <CardBg
              src="/ImgPlaceholder.svg"
              alt="image placeholder"
              className="rounded-lg"
            ></CardBg>
            <CardContent className="my-3">
              <p>Get started by clicking the button below.</p>
            </CardContent>
            <CardFooter>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
                Get Started
              </button>
            </CardFooter>
          </Card>
        </div>
        <div className="my-5">
          <h1 className="dark:text-gray-25 text-gray-900">Card Small</h1>
          <Card className="w-[711px] rounded-radius-lg p-[32px] gradientOne border-2 border-[#0707071F] hover:border-2 hover:border-brand-500">
            <CardHeader>
              <CardTitle className="text-[24px] font-bold leading-[36px] text-white">
                Modal Card Title
              </CardTitle>
              <CardDescription className="my-4 text-[20px] leading-[30px]">
                Lorem ipsum dolor sit amet consectetur. Accumsan habitant eu
                volutpat amet neque netus sem. Massa non massa a feugiat.
                Ultrices sit sit sagittis urna phasellus volutpat nulla justo
                morbi. In aliquet in tincidunt ac euismod dictum urna neque
                lectus.
              </CardDescription>
            </CardHeader>
            <CardBg src="/ImgPlaceholder.svg" className="rounded-lg"></CardBg>
            <CardContent className="my-3">
              <p>Get started by clicking the button below.</p>
            </CardContent>
            <CardFooter>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
                Get Started
              </button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="my-5">
        <ImageCard
          cardTitle="Modal Card Title"
          cardDesc="Lorem ipsum dolor sit amet consectetur. Accumsan."
          className="w-[466px] h-[406px] bg-brand-100"
        >
          <div className="my-2 w-[50%]">
            <Chip endIcon={<LuHeart />} variant="primary">
              Learn More
            </Chip>
          </div>
        </ImageCard>
      </div>

      <div className="my-5">
        <ImageCard
          cardTitle="Modal Card Title"
          cardDesc="Lorem ipsum dolor sit amet consectetur. Accumsan."
          className="w-[500px] h-[700px]"
          cardImg="https://images.unsplash.com/photo-1588534331122-77ac46322dd2?q=80&w=2779&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <div className="my-2 w-[50%]">
            <Chip endIcon={<LuHeart />} variant="primary">
              Learn More
            </Chip>
          </div>
        </ImageCard>
      </div>
    </div>
  );
};

export default Test;
