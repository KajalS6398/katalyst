import { cn } from "@/utils/util";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type AccordionProps = {
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
};

export default function Accordion({
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
    <div className={className}>
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
      className={cn(
        "rounded-lg mb-3 shadow-cardShadow dark:shadow-none border dark:border-gray-900",
        isOpen
          ? "border-primary-500 shadow-cardShadowActive dark:bg-gray-900"
          : "hover:border-gray-500 hover:bg-gray-100 hover:dark:bg-transparent hover:dark:border-gray-600",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      )}
    >
      <div
        className="font-semibold p-[32px] mobile:p-4 transition-colors duration-200 ease-in-out"
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
    <div className="accordion-trigger flex justify-between items-center font-semibold text-[20px] mobile:text-[12px] mobile:leading-[18px] text-dark dark:text-white transition-all delay-150 ease-in">
      {children}
      <span
        className={`transition-transform duration-300 transform ${isOpen ? "rotate-180" : "rotate-0"
          }`}
      >
        <FiChevronDown size={20} />
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
      className={cn(
        "w-full font-normal font-karla text-[18px] mobile:text-[12px] mobile:leading-[18px] text-dark dark:text-gray-300 pt-[32px] mobile:pt-[10px] overflow-hidden transition-all duration-500 ease-in",
        !isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
      )}
    >
      {children}
    </div>
  );
}
