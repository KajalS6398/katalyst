import { cn } from "@/utils/util";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

type AccordionProps = {
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function Accordion({
  type = "single",
  collapsible = true,
  className,
  children,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    if (type === "single") {
      setOpenItems((prev) =>
        prev.includes(value) ? (collapsible ? [] : prev) : [value],
      );
    } else {
      setOpenItems((prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value],
      );
    }
  };

  return (
    <div className={`${className}`}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(
            child as React.ReactElement<{
              openItems: string[];
              handleToggle: (value: string) => void;
            }>,
            {
              openItems,
              handleToggle,
            },
          );
        }
        return child;
      })}
    </div>
  );
}

type AccordionItemProps = {
  value: string;
  disabled?: boolean;
  openItems?: string[];
  handleToggle?: (value: string) => void;
  children: React.ReactNode;
};

export function AccordionItem({
  value,
  disabled = false,
  openItems,
  handleToggle,
  children,
}: AccordionItemProps) {
  const isOpen = openItems?.includes(value);

  const toggle = () => {
    if (!disabled && handleToggle) {
      handleToggle(value);
    }
  };

  return (
    <div
      className={`rounded-radius-lg mb-3 shadow-cardShadow dark:shadow-none border dark:border-gray-900 ${isOpen ? "border border-brand-500 shadow-cardShadowActive dark:bg-gray-900 dark:border-gray-100" : ""} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <div
        className="font-semibold transition-colors p-[32px] mobile:p-4 duration-200 ease-in-out"
        onClick={toggle}
      >
        {children && Array.isArray(children) ? (
          <>
            {React.cloneElement(children[0] as React.ReactElement, { isOpen })}
            {isOpen && !disabled ? children[1] : null}
          </>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

type AccordionTriggerProps = {
  isOpen?: boolean;
  children: React.ReactNode;
};

export function AccordionTrigger({ isOpen, children }: AccordionTriggerProps) {
  return (
    <div className="accordion-trigger transition-all delay-150 ease-in font-montserrat text-[20px] mobile:text-[12px] mobile:leading-[18px] text-dark dark:text-white flex justify-between items-center font-semibold">
      {children}
      <span className="">
        {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
      </span>
    </div>
  );
}

type AccordionContentProps = {
  isOpen?: boolean;
  children: React.ReactNode;
};

export function AccordionContent({ isOpen, children }: AccordionContentProps) {
  return (
    <div
      // className={`accordion-content font-normal font-karla text-[18px] mobile:text-[12px] mobile:leading-[18px] text-dark dark:text-gray-600 pt-[32px] mobile:pt-[10px] overflow-hidden max-h-0 duration-500 transition-all ${!isOpen ? "max-h-fit" : "max-h-0"}`}
      className={cn(
        "opacity-0 w-full accordion-content font-normal font-karla text-[18px] mobile:text-[12px] mobile:leading-[18px] text-dark dark:text-gray-600 pt-[32px] mobile:pt-[10px] overflow-hidden max-h-0 duration-500 transition-all delay-100 ease-in",
        !isOpen &&
          "max-h-fit opacity-[1] transition-all ease-in duration-150"
      )}
    >
      {children}
    </div>
  );
}
