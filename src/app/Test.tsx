"use client";
import { Caption, Paragraph, Textarea, Typography } from "@/components";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Label from "@/components/Label";
import Toggle from "@/components/Toggle";
import { useTheme } from "@/context/ThemeContext";
import React, { useState } from "react";
import { RiAddCircleLine, RiCheckLine, RiCloseLine } from "react-icons/ri";

const Test = () => {
  const { theme, switchDark, switchLight } = useTheme();

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="p-4 bg-light dark:bg-dark min-h-screen">
      <header className="p-4 transition-colors duration-300 flex justify-between items-center sticky top-4 backdrop-blur-md mx-4 rounded-full z-[1000000]">
        <Typography variant={"h6"}>Katalyst:</Typography>
        <Paragraph variant={"b2"}>Current theme: {theme}</Paragraph>
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
      <main className="space-y-5">
        <section className="space-y-3">
          <Typography variant="h6">Typography</Typography>
          <Typography variant="h1">H1 Headline</Typography>
          <Typography variant="h2">H2 Headline</Typography>
          <Typography variant="h3">H3 Headline</Typography>
          <Typography variant="h4">H4 Headline</Typography>
          <Typography variant="h5">H5 Headline</Typography>
          <Typography variant="h6">H6 Headline</Typography>
        </section>
        <section className="space-y-3">
          <Typography variant="h6">Paragraph</Typography>
          <Paragraph>The quick brown fox jumps over the lazy dog</Paragraph>
          <Paragraph variant="b2">
            The quick brown fox jumps over the lazy dog
          </Paragraph>
          <Paragraph variant="b3">
            The quick brown fox jumps over the lazy dog
          </Paragraph>
          <Paragraph variant="b4">
            The quick brown fox jumps over the lazy dog
          </Paragraph>
        </section>
        <section className="space-y-3">
          <Typography variant="h6">Caption</Typography>
          <br />
          <Caption variant="md">
            The quick brown fox jumps over the lazy dog
          </Caption>
          <br />
          <Caption>The quick brown fox jumps over the lazy dog</Caption>
        </section>
        <section className="space-y-3">
          <Typography variant="h6">Label</Typography>
          <Label size={"sm"}>This is a Label</Label>
          <br />
          <Label size={"md"}>This is a Label</Label>
          <br />
          <Label size={"lg"} required>
            This is a Label
          </Label>
        </section>
        <section className="space-y-5 min-h-[200px]">
          <Typography variant="h6">Input</Typography>
          <Input
            type="text"
            startIcon={<RiAddCircleLine />}
            placeholder="Enter your text here"
            endIcon={<RiAddCircleLine />}
          />
          <Input
            type="text"
            disabled
            placeholder="Enter your text here"
            startIcon={<RiAddCircleLine />}
            endIcon={<RiAddCircleLine />}
          />
          <Textarea
            placeholder="Enter your text here"
            className="resize-none"
            rows={4}
          />
          <Textarea
            disabled
            placeholder="Enter your text here"
            className="resize-none"
            rows={4}
          />
          <div className="space-y-5 min-h-[200px] p-10 div-glass">
            <Input
              type="text"
              variant={"glass"}
              startIcon={<RiAddCircleLine />}
              placeholder="Enter your text here"
              endIcon={<RiAddCircleLine />}
            />
            <Input
              type="text"
              variant={"glass"}
              disabled
              startIcon={<RiAddCircleLine />}
              placeholder="Enter your text here"
              endIcon={<RiAddCircleLine />}
            />
            <Textarea
              variant={"glass"}
              placeholder="Enter your text here"
              className="resize-none"
              rows={4}
            />
            <Textarea
              variant={"glass"}
              disabled
              placeholder="Enter your text here"
              className="resize-none"
              rows={4}
            />
          </div>
        </section>
        <section className="space-y-5">
          <Typography variant="h6">Checkbox</Typography>
          <div className="flex items-center gap-2">
            <Checkbox id="check1" />
            <Label size={"md"} htmlFor="check1">
              This is a default state
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox checked readOnly id="check2" />
            <Label size={"md"} htmlFor="check2">
              This is a checked state
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox checked readOnly disabled id="check3" />
            <Label size={"md"} htmlFor="check3" disabled>
              This is a disabled state
            </Label>
          </div>
        </section>
        <section className="space-y-5">
          <Typography variant="h6">Toggle</Typography>
          <div className="flex items-center gap-2">
            <Toggle id="check1" size="sm" />
            <Label size={"md"} htmlFor="check1">
              Small Toggle
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Toggle id="check2" size="lg" />
            <Label size={"md"} htmlFor="check2">
              Large Toggle
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Toggle checked readOnly />
            <Label size={"md"}>This is a checked state</Label>
          </div>
          <div className="flex items-center gap-2">
            <Toggle disabled readOnly />
            <Label size={"md"} disabled>
              This is a OFF disabled state
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Toggle checked readOnly disabled />
            <Label size={"md"} disabled>
              This is a ON disabled state
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Toggle
              readOnly
              id="icon"
              icon={<RiCheckLine className="text-brand-400" />}
            />
            <Label size={"md"} htmlFor="icon">
              Toggle With Icon
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Toggle
              id="icon2"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              icon={isChecked ? <RiCheckLine /> : <RiCloseLine />}
            />
            <Label size={"md"} htmlFor="icon2">
              Toggle With Icon
            </Label>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Test;
