import { cn } from "@/utils/util";
import Link from "next/link";
import React from "react";
import Typography from "./Typography";

interface BaseProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  as?: "link" | "button";
}

type LinkProps = BaseProps & {
  as: "link";
  href: string;
  onClick?: never;
};

type ButtonProps = BaseProps & {
  as: "button";
  href?: never;
  onClick?: () => void;
};

type ListItemProps = LinkProps | ButtonProps;

const ListItem = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ListItemProps
>(({ className, title, href, onClick, as = "link" }, ref) => {
  if (as === "button") {
    return (
      <button
        className={cn(
          "px-4 py-[8px] font-karla rounded-radius-lg hover:bg-brand-50 border border-transparent hover:border-brand-200 focus:outline-none focus:ring-1 focus:ring-brand-500 focus:shadow-inner leading-none no-underline outline-none transition-colors",
          className,
        )}
        onClick={onClick}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        <Typography variant="h6" className="font-karla">
          {title}
        </Typography>
      </button>
    );
  }

  return (
    <Link
      href={href!}
      passHref
      className={cn(
        "px-4 py-[8px] font-karla rounded-radius-lg hover:bg-brand-400 hover:border hover:border-brand-200 leading-none no-underline outline-none transition-colors",
        className,
      )}
      ref={ref as React.Ref<HTMLAnchorElement>}
    >
      <Typography variant="h6" className="font-karla">
        {title}
      </Typography>
    </Link>
  );
});

ListItem.displayName = "ListItem";

export default ListItem;
