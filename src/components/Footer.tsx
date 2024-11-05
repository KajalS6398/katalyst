import React, { type ReactNode } from "react";
import Typography from "./Typography";
import Paragraph from "./Paragraph";
import { cn } from "@/utils/util";
import Link from "next/link";

interface FooterProps {
  children: ReactNode;
  className?: string;
  footerBottomText?: JSX.Element;
}

interface FooterHeaderProps {
  children: ReactNode;
  className?: string;
}

interface FooterContentProps {
  children: ReactNode;
  className?: string;
}

type FooterListType = {
  text: string;
  link: string;
};

interface FooterListProps {
  footerItems: {
    label: string;
    content: FooterListType[];
  }[];
  target?: "_blank" | "_self" | "_top" | "_parent";
}

type FooterIconType = {
  icon: JSX.Element;
  link: string;
};

interface FooterIconsProps {
  icons: FooterIconType[];
}

export const Footer = ({
  children,
  className,
  footerBottomText,
}: FooterProps) => {
  return (
    <footer
      className={cn(
        "bg-gradient-to-b from-gray-25 to-brand-100 dark:from-brand-900 dark:to-dark",
        className,
      )}
    >
      {children}
      {footerBottomText && (
        <section className="border-t border-brand-500 dark:border-brand-800 text-center py-spacing-md">
          {footerBottomText}
        </section>
      )}
    </footer>
  );
};

export const FooterHeader = ({ children, className }: FooterHeaderProps) => {
  return (
    <div
      className={cn(
        "md:w-[30%] space-y-4 flex flex-col items-center lg:items-start",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const FooterContent = ({ children, className }: FooterContentProps) => {
  return (
    <section
      className={cn(
        "max-w-6xl mx-auto flex md:flex-row flex-col items-center md:items-start justify-between gap-14 px-4 md:px-20 py-20",
        className,
      )}
    >
      {children}
    </section>
  );
};

export const FooterList = ({ footerItems, target }: FooterListProps) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 place-items-start gap-12 text-center md:text-left">
      {footerItems?.map((data, i) => (
        <div key={i} className="space-y-5 w-full">
          <Typography variant={"h5"}>{data?.label}</Typography>
          <ul className="space-y-2.5 list-none">
            {data.content?.map((data, i) => (
              <li key={i}>
                <Link href={data?.link} target={target}>
                  <Paragraph
                    variant={"b3"}
                    className="dark:text-gray-300 hover:text-brand-400 dark:hover:text-brand-600 text-gray-900"
                  >
                    {data?.text}
                  </Paragraph>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export const FooterIcons = ({ icons }: FooterIconsProps) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-5 text-brand-700 dark:text-brand-200">
      {icons.map((icon, index) => (
        <Link
          href={icon.link}
          key={index}
          className="hover:bg-brand-100 dark:hover:bg-brand-800 p-1 rounded-radius-sm"
        >
          {icon.icon}
        </Link>
      ))}
    </div>
  );
};
