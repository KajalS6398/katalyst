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
    <div className={`w-[40%] ${className}`}>
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
      className={`rounded-radius-lg mb-3 shadow-cardShadow dark:shadow-none border dark:border-gray-900 ${isOpen ? "border border-brand-500 dark:bg-gray-900 dark:border-gray-100" : ""} ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <div
        className="font-semibold transition-colors p-[32px] duration-200 ease-in-out"
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
    <div className="accordion-trigger font-montserrat text-[20px] text-dark dark:text-white flex justify-between items-center font-semibold">
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
    // <div
    //   className={`accordion-content font-karla text-[18px] text-dark dark:text-white pt-[32px] transition-all duration-300 delay-75 ease-in-out ${
    //     !isOpen ? "h-fit" : "h-0"
    //   }`}
    // >
    //   {children}
    // </div>
    <div
      className={`accordion-content font-normal font-karla text-[18px] text-dark dark:text-white pt-[32px] overflow-hidden max-h-0 duration-500 transition-all ${!isOpen ? "max-h-40" : "max-h-0"}`}
    >
      {children}
    </div>
  );
}
