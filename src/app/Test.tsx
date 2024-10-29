"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/Card";
import Chip from "@/components/Chip";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { LuAlertCircle, LuAngry, LuAnnoyed } from "react-icons/lu";

const Test = () => {
  const { theme, switchDark, switchLight } = useTheme();

  return (
    <div className="p-4 bg-light dark:bg-black h-[100vh]">
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
        <Chip variant="primary" size="sm">
          Solid
        </Chip>
        <Chip variant="primary" size="md">
          Primary
        </Chip>
        <Chip variant="primary" size="lg">
          Secondary
        </Chip>
      </div>

      <div className="">
        <h1>Cards: </h1>
        <div>
          <Card className="w-[350px] bg-gradient-to-r from-[#4285F4] to-[#285092]">
            <CardHeader>
              <CardTitle className="h-[100px]">Create project</CardTitle>
              <CardDescription>
                Deploy your new project in one-click.
              </CardDescription>
            </CardHeader>
            <CardContent>
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
    </div>
  );
};

export default Test;
