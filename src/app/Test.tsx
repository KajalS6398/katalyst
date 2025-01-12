"use client";
import Accordion, {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";
import Card, {
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
import Toggle from "@/components/Toggle";
import { useTheme } from "@/context/ThemeContext";
import React, { useEffect, useState } from "react";

import {
  RiAddCircleLine,
  RiAddLine,
  RiCheckboxCircleFill,
  RiCheckLine,
  RiCloseLine,
  RiFacebookLine,
  RiHexagonLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterLine,
} from "react-icons/ri";
import Button from "@/components/Button";
import Footer, {
  FooterContent,
  FooterHeader,
  FooterIcons,
  FooterList,
} from "@/components/Footer";
import Image from "next/image";
import Dropdown, { MenuItem, MenuSubItem } from "@/components/Dropdown";
import ListItem from "@/components/ListItem";
import Link from "next/link";
import { HiMiniBars3BottomRight, HiXMark } from "react-icons/hi2";
import Slider from "@/components/Slider";

const footerItems = [
  {
    label: "Company Info",
    content: [
      { text: "About Us", link: "/about-us" },
      { text: "Career", link: "/career" },
      { text: "We are hiring", link: "/we-are-hiring" },
      { text: "Blog", link: "/blog" },
    ],
  },
  {
    label: "Features",
    content: [
      { text: "Business Marketing", link: "/business-marketing" },
      { text: "User Analytic", link: "/user-analytic" },
      { text: "Live Chat", link: "/live-chat" },
      { text: "Unlimited Support", link: "/unlimited-support" },
    ],
  },
  {
    label: "Resources",
    content: [
      { text: "Help Center", link: "/help-center" },
      { text: "Community", link: "/community" },
      { text: "Developers", link: "/developers" },
      { text: "Partners", link: "/partners" },
    ],
  },
  {
    label: "Legal",
    content: [
      { text: "Privacy Policy", link: "/privacy-policy" },
      { text: "Terms of Service", link: "/terms-of-service" },
      { text: "Cookie Policy", link: "/cookie-policy" },
      { text: "Security", link: "/security" },
    ],
  },
];

const iconsArray = [
  { icon: <RiTwitterLine />, link: "https://twitter.com" },
  { icon: <RiInstagramLine />, link: "https://instagram.com" },
  { icon: <RiFacebookLine />, link: "https://facebook.com" },
  { icon: <RiLinkedinLine />, link: "https://linkedin.com" },
];

const Test = () => {
  const { switchDark, switchLight } = useTheme();

  // toggle
  const [isChecked, setIsChecked] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  console.log("showMenu", showMenu);
  // slider
  const [sliderValue, setSliderValue] = useState<number>(50);

  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  useEffect(() => {
    // Prevent scrolling on the body when the menu is open
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Clean up to remove overflow lock when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  return (
    <div className="bg-light dark:bg-dark">
      {/* <header className="p-4 transition-colors duration-300 flex justify-between items-center sticky top-4 backdrop-blur-md mx-4 rounded-full z-[1000000]">
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
      </header> */}

      <Typography variant="h6">Top Nav Glass</Typography>
      <div className="px-[30px] mobile:mx-0 tablet:mx-0 rounded-radius-md transition-colors duration-300 sticky top-2 backdrop-blur-md z-[100] border-t border-b border-b-[#0707071F] border-[#FFFFFF29]">
        <header className="w-full p-4 flex justify-between items-center h-[62px] tablet:h-[56px]">
          <Image
            src="/ImgPlaceholder.svg"
            alt="placeholder"
            width={84}
            height={29}
          />
          <nav className="flex items-center gap-[10px] tablet:hidden tablet:justify-end">
            <Dropdown
              width="400px"
              triggerIcon={
                <ListItem
                  as="button"
                  title="Products"
                  className=""
                  icon={<RiAddLine size={20} />}
                />
              }
            >
              <Link
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygULcmljayBuIHJvbGw%3D"
                target="_blank"
              >
                <MenuItem label="Redirect Link" />
              </Link>
              <MenuSubItem
                content={
                  <div>
                    <h6>Cheese & Dairy</h6>
                    <Caption variant="md">
                      Find exotic cheese and fresh milk
                    </Caption>
                  </div>
                }
              >
                <MenuItem
                  label="Cheese"
                  onClick={() => alert("Save Page As clicked")}
                />
                <MenuItem
                  label="Milk"
                  onClick={() => alert("Create Shortcut clicked")}
                />
              </MenuSubItem>
              <MenuSubItem
                content={
                  <div>
                    <h6>Cheese & Dairy</h6>
                    <Caption variant="md">
                      Find exotic cheese and fresh milk
                    </Caption>
                  </div>
                }
                sectionClassName="text-xl text-gray-800 hover:bg-blue-100" 
                subMenuClassName="bg-gray-50 p-4" 
              >
                <MenuItem
                  label="Cheese"
                  onClick={() => alert("Save Page As clicked")}
                  className="hover:bg-yellow-200" 
                />
                <MenuItem
                  label="Milk"
                  onClick={() => alert("Create Shortcut clicked")}
                  className="hover:bg-yellow-200"
                />
              </MenuSubItem>

              <MenuSubItem
                content={
                  <div>
                    <h6>Meat</h6>
                    <Caption variant="md">
                      Discover fresh and exotic meats
                    </Caption>
                  </div>
                }
              >
                <MenuItem
                  label="Cheese"
                  onClick={() => alert("Save Page As clicked")}
                />
                <MenuItem
                  label="Milk"
                  onClick={() => alert("Create Shortcut clicked")}
                />
              </MenuSubItem>
            </Dropdown>
            <ListItem
              as="link"
              title="Resources"
              href="/primitives/docs/overview/introduction"
            />
            <ListItem
              as="link"
              title="Pricing"
              href="/primitives/docs/overview/introduction"
            />
            <ListItem
              as="link"
              title="Solutions"
              href="/primitives/docs/overview/introduction"
            />
          </nav>
          <div className="flex gap-4 items-center">
            <section className="flex gap-1 items-center">
              <Chip
                className="cursor-pointer"
                size="sm"
                variant="primary"
                onClick={switchLight}
              >
                Light Mode
              </Chip>
              <Chip
                className="cursor-pointer"
                variant="glass"
                size="sm"
                onClick={switchDark}
              >
                Dark Mode
              </Chip>
            </section>
            <span
              className="hidden tablet:inline-block  text-dark dark:text-light"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              {!showMenu ? (
                <HiMiniBars3BottomRight size={24} />
              ) : (
                <HiXMark size={24} />
              )}
            </span>
          </div>
        </header>
        <div
          className={`fixed h-[98dvh] z-10 top-[60px] right-0 w-full bg-white text-black dark:bg-dark transition-transform duration-300 transform  ${
            showMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav className="w-full gap-[10px] tablet:justify-end text-dark dark:text-white font-medium h-full">
            <Dropdown
              width="400px"
              triggerIcon={
                <section className="p-4 border-b dark:border-primary-100">
                  <ListItem as="button" title="Products" className="" />
                </section>
              }
            >
              <Link
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygULcmljayBuIHJvbGw%3D"
                target="_blank"
              >
                <MenuItem label="Redirect Link" />
              </Link>
              {/* <MenuSubItem label="More Tools"> */}
              <MenuSubItem content={<div>More Tools</div>}>
                <MenuItem
                  label="Save Page As..."
                  onClick={() => alert("Save Page As clicked")}
                />
                <MenuItem
                  label="Create Shortcut..."
                  onClick={() => alert("Create Shortcut clicked")}
                />
              </MenuSubItem>
            </Dropdown>
            <section className="px-4 py-2 border-b dark:border-gray-600">
              <ListItem
                as="link"
                title="Resources"
                href="/primitives/docs/overview/introduction"
              />
            </section>
            <section className="px-4 py-2 border-b dark:border-gray-600">
              <ListItem
                as="link"
                title="Pricing"
                href="/primitives/docs/overview/introduction"
              />
            </section>
            <section className="px-4 py-2 border-b dark:border-gray-600">
              <ListItem
                as="link"
                title="Solutions"
                href="/primitives/docs/overview/introduction"
              />
            </section>
          </nav>
        </div>
      </div>

      {/* new */}
      {/* <Typography variant="h6">Top Nav Glass</Typography>
      <div className="mx-[30px] tablet:mx-4 rounded-radius-md transition-colors duration-300 sticky top-2 backdrop-blur-md z-[100] border-t border-b border-b-[#0707071F] border-[#FFFFFF29]">
        <header className="w-full p-4 flex justify-between items-center h-[62px] tablet:h-[56px]">
          <Image
            src="/ImgPlaceholder.svg"
            alt="placeholder"
            width={84}
            height={29}
          />
          <nav className="flex items-center gap-[10px] tablet:hidden tablet:justify-end">
            <ListItem
              as="link"
              title="Resources"
              href="/primitives/docs/overview/introduction"
            />
            <ListItem
              as="link"
              title="Pricing"
              href="/primitives/docs/overview/introduction"
            />
            <ListItem
              as="link"
              title="Solutions"
              href="/primitives/docs/overview/introduction"
            />
          </nav>
          <div className="flex gap-4 items-center">
            <section className="flex gap-1 items-center">
              <Chip
                className="cursor-pointer"
                size="sm"
                variant="primary"
                onClick={switchLight}
              >
                Light Mode
              </Chip>
              <Chip
                className="cursor-pointer"
                variant="glass"
                size="sm"
                onClick={switchDark}
              >
                Dark Mode
              </Chip>
            </section>
            <span
              className="hidden tablet:inline-block  text-dark dark:text-light"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              {!showMenu ? (
                <HiMiniBars3BottomRight size={24} />
              ) : (
                <HiXMark size={24} />
              )}
            </span>
          </div>
        </header>
        <section className="w-full h-[98dvh]" >
          <div className={`h-full w-full bg-red-100 dark:bg-dark z-40 transition-all duration-300 transform ${showMenu ? "left-[0px]" : "left-[-100vw]"
            } `}>
            <h1>ashgdk</h1>
            <h2>asdkjhd</h2>
            <h3>kjdhsakd</h3>
            <h4>jkdhasd</h4>
          </div>

        </section>
      </div> */}

      <main className="space-y-5 p-4">
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
        {/* dropdown */}
        <div className="py-32 mb-32 flex gap-10 items-start">
          <section>
            <h1 className="dark:text-gray-25 text-gray-900">
              Dropdown/List Menu
            </h1>
            <Dropdown
              triggerIcon={
                <Chip endIcon={<LuHeart />} variant="primary" size="md">
                  Open Dropdown
                </Chip>
              }
            >
              <Link
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygULcmljayBuIHJvbGw%3D"
                target="_blank"
              >
                <MenuItem label="Redirect Link" />
              </Link>
              <MenuItem
                label="New Tab"
                onClick={() => alert("New Tab clicked")}
              />
              <MenuItem label="New Private Window" disabled />
              <MenuItem
                label="New Private Window"
                onClick={() => alert("sab chal rha hai")}
              >
                <div>
                  <Caption variant="md">User can add anything here</Caption>
                  <Chip size="sm">testing</Chip>
                </div>
              </MenuItem>
              <MenuSubItem content={<div>More Tools</div>}>
                <MenuItem
                  label="Save Page As..."
                  onClick={() => alert("Save Page As clicked")}
                />
                <MenuItem
                  label="Create Shortcut..."
                  onClick={() => alert("Create Shortcut clicked")}
                />
              </MenuSubItem>
              <MenuItem label="Sooraj" />
              <MenuItem label="Katalyst" />
            </Dropdown>
          </section>

          <section>
            <h1 className="dark:text-gray-25 text-gray-900">
              Dropdown/List Menu
            </h1>
            <Dropdown
              triggerIcon={
                <Chip endIcon={<LuHeart />} variant="primary" size="md">
                  Open Dropdown
                </Chip>
              }
            >
              <Link
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygULcmljayBuIHJvbGw%3D"
                target="_blank"
              >
                <MenuItem label="Redirect Link" />
              </Link>
              <MenuItem
                label="New Private Window"
                onClick={() => alert("sab chal rha hai")}
              >
                <div>
                  <Caption variant="md">User can add anything here</Caption>
                  <Chip size="sm">testing</Chip>
                </div>
              </MenuItem>
              <MenuSubItem content={<div>More Tools</div>}>
                <MenuItem label="Sooraj">
                  <div>
                    <Caption variant="md">User can add anything here</Caption>
                    <Chip size="sm">testing</Chip>
                  </div>
                </MenuItem>
                <MenuItem
                  label="Create Shortcut..."
                  onClick={() => alert("Create Shortcut clicked")}
                />
              </MenuSubItem>
              <MenuItem label="Katalyst" />
            </Dropdown>
          </section>
        </div>
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
            <Toggle id="smallToggle" size="sm" />
            <Label size={"md"} htmlFor="smallToggle">
              Small Toggle
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Toggle id="largeToggle" size="lg" />
            <Label size={"md"} htmlFor="largeToggle">
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
              icon={<RiCheckLine className="text-primary-400" />}
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
        <section className="flex gap-4 items-center my-4">
          <Typography variant="h6">Chips Variant</Typography>
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
        </section>
        <section className="flex gap-4 items-center my-4">
          <Typography variant={"h6"}>Sizes - </Typography>
          <Chip endIcon={<LuHeart />} variant="primary" size="sm">
            Solid
          </Chip>
          <Chip variant="primary" size="md">
            Primary
          </Chip>
          <Chip variant="primary" size="lg">
            Secondary
          </Chip>
        </section>
        <section className="space-y-4">
          <Typography variant={"h6"}>Pricing Cards</Typography>
          <div className="flex flex-wrap items-center gap-spacing-lg">
            <Card className="w-full p-spacing-md md:p-spacing-lg max-w-[333px] space-y-spacing-md bg-light border-2 border-primary-200 rounded-radius-xl">
              <CardHeader className="space-y-3.5">
                <div className="flex items-center gap-spacing-md">
                  <p className="bg-primary-400 p-3 rounded-radius-lg">
                    <RiHexagonLine size={60} className="text-light" />
                  </p>
                  <div>
                    <CardTitle className="text-xl font-semibold dark:text-dark">
                      Label
                    </CardTitle>
                    <CardDescription className="text-xl text-gray-800 dark:text-gray-800">
                      Caption for label
                    </CardDescription>
                  </div>
                </div>
                <Paragraph
                  variant={"b3"}
                  className="text-gray-600 dark:text-gray-600"
                >
                  Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                  adipiscing elit.{" "}
                </Paragraph>
              </CardHeader>
              <CardContent className="space-y-spacing-md">
                <div className="flex items-end">
                  <Typography variant={"h3"} className="dark:text-dark">
                    $399
                  </Typography>
                  <Paragraph
                    variant={"b2"}
                    className="text-gray-600 dark:text-gray-600 mb-3"
                  >
                    /monthly
                  </Paragraph>
                </div>
                <div className="space-y-spacing-sm">
                  <Typography
                    variant={"h6"}
                    className="text-gray-800 dark:text-gray-800"
                  >
                    What&apos;s included
                  </Typography>
                  <ul className="text-primary-500">
                    <li className="flex items-start gap-spacing-sm">
                      <RiCheckboxCircleFill size={24} className="mt-1" />
                      <Paragraph
                        variant={"b2"}
                        className="text-gray-800 dark:text-gray-800"
                      >
                        All analytics features
                      </Paragraph>
                    </li>
                    <li className="flex items-start gap-spacing-sm">
                      <RiCheckboxCircleFill size={24} className="mt-1" />
                      <Paragraph
                        variant={"b2"}
                        className="text-gray-800 dark:text-gray-800"
                      >
                        All analytics features
                      </Paragraph>
                    </li>
                    <li className="flex items-start gap-spacing-sm">
                      <RiCheckboxCircleFill size={24} className="mt-1" />
                      <Paragraph
                        variant={"b2"}
                        className="text-gray-800 dark:text-gray-800"
                      >
                        All analytics features
                      </Paragraph>
                    </li>
                    <li className="flex items-start gap-spacing-sm">
                      <RiCheckboxCircleFill size={24} className="mt-1" />
                      <Paragraph
                        variant={"b2"}
                        className="text-gray-800 dark:text-gray-800"
                      >
                        All analytics features
                      </Paragraph>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button fullWidth size={"md"} endIcon={<RiAddLine />}>
                  Button
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-full text-light p-spacing-md md:p-spacing-lg max-w-[333px] space-y-spacing-md border-2 border-primary-200 rounded-radius-xl bg-gradient-to-r from-primary-700 from-[-10.81%] to-primary-900 to-[93.83%]">
              <CardHeader className="space-y-3.5">
                <div className="flex items-center gap-spacing-md">
                  <p className="bg-primary-400 p-3 rounded-radius-lg">
                    <RiHexagonLine size={60} className="text-light" />
                  </p>
                  <div>
                    <CardTitle className="text-xl font-semibold text-light">
                      Label
                    </CardTitle>
                    <CardDescription className="text-xl text-light">
                      Caption for label
                    </CardDescription>
                  </div>
                </div>
                <Paragraph variant={"b3"} className="text-light">
                  Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                  adipiscing elit.{" "}
                </Paragraph>
              </CardHeader>
              <CardContent className="space-y-spacing-md">
                <div className="flex items-end">
                  <Typography variant={"h3"} className="text-light">
                    $399
                  </Typography>
                  <Paragraph variant={"b2"} className="text-gray-400 mb-3">
                    /monthly
                  </Paragraph>
                </div>
                <div className="space-y-spacing-sm">
                  <Typography variant={"h6"} className="text-light">
                    What&apos;s included
                  </Typography>
                  <ul className="text-primary-500">
                    <li className="flex items-start gap-spacing-sm">
                      <RiCheckboxCircleFill size={24} className="mt-1" />
                      <Paragraph variant={"b2"} className="text-light">
                        All analytics features
                      </Paragraph>
                    </li>
                    <li className="flex items-start gap-spacing-sm">
                      <RiCheckboxCircleFill size={24} className="mt-1" />
                      <Paragraph variant={"b2"} className="text-light">
                        All analytics features
                      </Paragraph>
                    </li>
                    <li className="flex items-start gap-spacing-sm">
                      <RiCheckboxCircleFill size={24} className="mt-1" />
                      <Paragraph variant={"b2"} className="text-light">
                        All analytics features
                      </Paragraph>
                    </li>
                    <li className="flex items-start gap-spacing-sm">
                      <RiCheckboxCircleFill size={24} className="mt-1" />
                      <Paragraph variant={"b2"} className="text-light">
                        All analytics features
                      </Paragraph>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  fullWidth
                  size={"md"}
                  variant={"primary-light"}
                  endIcon={<RiAddLine />}
                >
                  Button
                </Button>
              </CardFooter>
            </Card>
            <Card className="w-full p-spacing-md md:p-spacing-lg max-w-[717px] space-y-spacing-md bg-light border-2 border-primary-200 rounded-radius-xl flex md:flex-row flex-col items-center gap-spacing-md">
              <CardHeader className="space-y-3.5 pr-spacing-md md:border-r md:border-gray-400 flex-[0.6]">
                <div className="flex items-center gap-spacing-md">
                  <p className="bg-primary-400 p-3 rounded-radius-lg">
                    <RiHexagonLine size={60} className="text-light" />
                  </p>
                  <div>
                    <CardTitle className="text-xl font-semibold dark:text-dark">
                      Label
                    </CardTitle>
                    <CardDescription className="text-xl text-gray-800 dark:text-gray-800">
                      Caption for label
                    </CardDescription>
                  </div>
                </div>
                <Paragraph
                  variant={"b3"}
                  className="text-gray-600 dark:text-gray-600"
                >
                  Lorem ipsum dolor sit amet doloroli sitiol conse ctetur
                  adipiscing elit.{" "}
                </Paragraph>
                <div className="flex items-end">
                  <Typography variant={"h3"} className="dark:text-dark">
                    $399
                  </Typography>
                  <Paragraph
                    variant={"b2"}
                    className="text-gray-600 dark:text-gray-600 mb-3"
                  >
                    /monthly
                  </Paragraph>
                </div>
                <Button fullWidth size={"md"} endIcon={<RiAddLine />}>
                  Button
                </Button>
              </CardHeader>
              <CardContent className="space-y-spacing-sm w-full flex-[0.4]">
                <Typography
                  variant={"h6"}
                  className="text-gray-800 dark:text-gray-800"
                >
                  What&apos;s included
                </Typography>
                <ul className="text-primary-500 space-y-2.5">
                  <li className="flex items-start gap-spacing-sm">
                    <RiCheckboxCircleFill size={24} className="mt-1" />
                    <Paragraph
                      variant={"b2"}
                      className="text-gray-800 dark:text-gray-800"
                    >
                      All analytics features
                    </Paragraph>
                  </li>
                  <li className="flex items-start gap-spacing-sm">
                    <RiCheckboxCircleFill size={24} className="mt-1" />
                    <Paragraph
                      variant={"b2"}
                      className="text-gray-800 dark:text-gray-800"
                    >
                      All analytics features
                    </Paragraph>
                  </li>
                  <li className="flex items-start gap-spacing-sm">
                    <RiCheckboxCircleFill size={24} className="mt-1" />
                    <Paragraph
                      variant={"b2"}
                      className="text-gray-800 dark:text-gray-800"
                    >
                      All analytics features
                    </Paragraph>
                  </li>
                  <li className="flex items-start gap-spacing-sm">
                    <RiCheckboxCircleFill size={24} className="mt-1" />
                    <Paragraph
                      variant={"b2"}
                      className="text-gray-800 dark:text-gray-800"
                    >
                      All analytics features
                    </Paragraph>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        <section>
          <Typography variant={"h6"}>Cards: </Typography>
          <div className="my-5">
            <h1>Card Large</h1>
            <Card className="w-[70%] rounded-radius-lg px-[64px] py-[32px] gradientOne border-2 border-primary-500 hover:border-2 hover:border-primary-500">
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
            <Card className="w-[711px] rounded-radius-lg p-[32px] gradientOne border-2 border-primary-500 hover:border-2 hover:border-primary-500">
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
        </section>
        <section className="my-5">
          <ImageCard
            cardTitle="Modal Card Title"
            cardDesc="Lorem ipsum dolor sit amet consectetur. Accumsan."
            className="w-[466px] h-[406px] bg-primary-100"
          >
            <div className="my-2 w-[50%]">
              <Chip endIcon={<LuHeart />} variant="primary">
                Learn More
              </Chip>
            </div>
          </ImageCard>
        </section>
        <section className="my-5">
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
        </section>
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
        <section className="my-5">
          <Typography variant={"h6"}>Accordion Single</Typography>
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
        </section>
        <section className="my-5">
          <Typography variant={"h6"}>Accordion Multiple</Typography>
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
        </section>
        <section className="space-y-3">
          <Typography variant="h6">Buttons</Typography>
          <div className="flex items-center gap-3">
            <Paragraph variant="b2">Primary:</Paragraph>
            <Button
              size={"sm"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"md"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"lg"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Paragraph variant="b2">Primary Light:</Paragraph>
            <Button
              size={"sm"}
              variant={"primary-light"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"md"}
              variant={"primary-light"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"lg"}
              variant={"primary-light"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Paragraph variant="b2">Secondary:</Paragraph>
            <Button
              size={"sm"}
              variant={"secondary"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"md"}
              variant={"secondary"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"lg"}
              variant={"secondary"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Paragraph variant="b2">Tertiary:</Paragraph>
            <Button
              size={"sm"}
              variant={"tertiary"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"md"}
              variant={"tertiary"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"lg"}
              variant={"tertiary"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
          </div>
          <div className="flex items-center gap-3 div-glass2 px-4">
            <Paragraph variant="b2" className="text-light">
              Quaternary:
            </Paragraph>
            <Button
              size={"sm"}
              variant={"quaternary"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"md"}
              variant={"quaternary"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"lg"}
              variant={"quaternary"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Paragraph variant="b2">Disabled:</Paragraph>
            <Button
              size={"sm"}
              disabled
              variant={"primary"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"sm"}
              disabled
              variant={"primary-light"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"sm"}
              disabled
              variant={"quaternary"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"sm"}
              disabled
              variant={"secondary"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"sm"}
              disabled
              variant={"tertiary"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
          </div>
          <div className="flex items-center gap-3">
            <Paragraph variant="b2">Rounded:</Paragraph>
            <Button
              size={"sm"}
              rounded
              variant={"primary"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"sm"}
              rounded
              variant={"primary-light"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"sm"}
              rounded
              variant={"secondary"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
            <Button
              size={"sm"}
              rounded
              variant={"tertiary"}
              startIcon={<RiAddLine />}
              endIcon={<RiAddLine />}
            >
              Button
            </Button>
          </div>
        </section>
        <section className="space-y-5">
          <Typography variant={"h6"}>Slider: </Typography>
          <Slider
            value={sliderValue}
            min={10}
            max={200}
            onChange={(e) => handleSliderChange(Number(e.target.value))}
          />
          <Slider
            value={sliderValue}
            min={10}
            max={200}
            size="lg"
            onChange={(e) => handleSliderChange(Number(e.target.value))}
          />
        </section>
      </main>
      <Footer
        footerBottom={
          <Caption variant={"md"}>
            Made With Love By Atomos Tech All Right Reserved
          </Caption>
        }
      >
        <FooterContent>
          <FooterHeader>
            <div className="w-[124px] h-[54px] bg-primary-300"></div>
            <Paragraph variant={"b3"} className="text-center md:text-left">
              Atomos Technologies, backed by Mirats, delivers innovative digital
              services, IT solutions, and business consulting
            </Paragraph>
            <FooterIcons icons={iconsArray} />
          </FooterHeader>
          <FooterList footerItems={footerItems} />
        </FooterContent>
      </Footer>
    </div>
  );
};

export default Test;
