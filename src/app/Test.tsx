"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";
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
import StatsCard from "@/components/StatsCard";
import { LuAngry, LuAnnoyed, LuHeart } from "react-icons/lu";
import { Caption, Paragraph, Textarea, Typography } from "@/components";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import Label from "@/components/Label";
import { useTheme } from "@/context/ThemeContext";
import React from "react";
import { RiAddCircleLine } from "react-icons/ri";

const Test = () => {
  const { theme, switchDark, switchLight } = useTheme();

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

      <div className="my-5">
        <section>
          <h1 className="dark:text-gray-25 text-gray-900">Default</h1>
          <StatsCard
            className="w-[400px] h-[400px]"
            statTitle="Number"
            statDesc="Value Descritpion and other data Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quos?"
            cardIcon={<LuAngry size={40} />}
          />
        </section>
        <section>
          <h1 className="dark:text-gray-25 text-gray-900">Customise</h1>
          <StatsCard
            className="w-[400px] h-[400px] bg-gradient-to-b from-indigo-500 dark:from-cyan-500 dark:to-blue-500"
            statTitle="Number"
            statDesc="Value Descritpion and other data Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quos?"
            cardIcon={<LuAngry size={40} />}
          />
        </section>
      </div>

      {/* accordion */}
      <div className="my-5">
        <h1 className="dark:text-gray-25 text-gray-900">Accordion Single</h1>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is your favorite template from BRIX Templates?
            </AccordionTrigger>
            <AccordionContent>
             {` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
             {` Yes. It comes with default styles that match the other components'
              aesthetic.`}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
             {` Yes. It's animated by default, but you can disable it if you
              prefer.`}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="my-5">
        <h1 className="dark:text-gray-25 text-gray-900">Accordion Multiple</h1>
        <Accordion type="multiple" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is your favorite template from BRIX Templates?
            </AccordionTrigger>
            <AccordionContent>
             {` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.`}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" disabled>
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
             {` Yes. It comes with default styles that match the other components'
              aesthetic.`}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
             {` Yes. It's animated by default, but you can disable it if you
              prefer.`}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
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
      </main>
    </div>
  );
};

export default Test;
