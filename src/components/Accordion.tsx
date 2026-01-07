"use client";
import { cn } from "@/utils/util";
import React, { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

/* =========================================================
   Accordion Root
========================================================= */
type AccordionProps = {
  type?: "single" | "multiple";
  collapsible?: boolean; // If false, one item must always be open
  className?: string;
  children: React.ReactNode;
  expanded?: boolean;
  defaultOpenValues?: string[]; // Allow user to set initial state
};

export default function Accordion({
  type = "single",
  collapsible = true,
  className,
  children,
  expanded,
  defaultOpenValues = [],
}: AccordionProps) {
  // Initialize state with default values
  const [openItems, setOpenItems] = useState<string[]>(defaultOpenValues);

  // Sync with global expanded prop
  useEffect(() => {
    if (expanded !== undefined) {
      if (expanded) {
        const allValues: string[] = [];
        React.Children.forEach(children, (child) => {
          if (React.isValidElement(child)) {
            allValues.push((child.props as any).value);
          }
        });
        setOpenItems(allValues);
      } else {
        // If collapsible is false, we don't clear all if there are items
        setOpenItems(collapsible ? [] : openItems);
      }
    }
  }, [expanded, children, collapsible]);

  const handleToggle = (value: string) => {
    if (type === "single") {
      const isClosing = openItems.includes(value);
      
      // If NOT collapsible and user clicks the open item, do nothing
      if (isClosing && !collapsible) return;

      setOpenItems(isClosing ? [] : [value]);
    } else {
      setOpenItems((prev) => {
        const isClosing = prev.includes(value);
        // If NOT collapsible and it's the last item open, don't close it
        if (isClosing && !collapsible && prev.length === 1) return prev;
        
        return isClosing
          ? prev.filter((item) => item !== value)
          : [...prev, value];
      });
    }
  };

  return (
    <div className={cn("flex flex-col", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as any, { openItems, handleToggle });
        }
        return child;
      })}
    </div>
  );
}

/* =========================================================
   Accordion Item
========================================================= */
export function AccordionItem({ value, disabled, openItems, handleToggle, children }: any) {
  const isOpen = openItems?.includes(value);

  return (
    <div className={cn(
      "rounded-lg mb-3 border transition-all duration-300 overflow-hidden",
      isOpen ? "border-primary-500 bg-white dark:bg-gray-900" : "border-transparent bg-gray-50 dark:bg-gray-800",
      disabled && "opacity-50 pointer-events-none"
    )}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as any, { 
            isOpen, 
            onClick: () => handleToggle?.(value) 
          });
        }
        return child;
      })}
    </div>
  );
}

/* =========================================================
   Accordion Trigger
========================================================= */
export function AccordionTrigger({ isOpen, children, onClick }: any) {
  return (
    <div
      className="p-6 mobile:p-4 flex justify-between items-center cursor-pointer select-none"
      onClick={onClick}
    >
      <div className="font-semibold text-xl mobile:text-base text-dark dark:text-white">
        {children}
      </div>
      <FiChevronDown 
        size={24} 
        className={cn(
          "transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]",
          isOpen && "rotate-180"
        )} 
      />
    </div>
  );
}

/* =========================================================
   Accordion Content
========================================================= */
export function AccordionContent({ isOpen, children }: any) {
  return (
    <div className={cn(
      "grid transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]",
      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
    )}>
      <div className="overflow-hidden">
        <div className="px-6 pb-6 mobile:px-4 mobile:pb-4 text-gray-600 dark:text-gray-400 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
}