"use client";
import { cn } from "@/utils/util";
import React, { useState, useEffect, KeyboardEvent } from "react";
import { FiChevronDown } from "react-icons/fi";

/* =========================================================
   Accordion Root
========================================================= */
type AccordionProps = {
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
  expanded?: boolean;
  defaultOpenValues?: string[];
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

export default function Accordion({
  type = "single",
  collapsible = true,
  className,
  children,
  expanded,
  defaultOpenValues = [],
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
}: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>(defaultOpenValues);

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
        setOpenItems(collapsible ? [] : openItems);
      }
    }
  }, [expanded, children, collapsible]);

  const handleToggle = (value: string) => {
    if (type === "single") {
      const isClosing = openItems.includes(value);
      if (isClosing && !collapsible) return;

      setOpenItems(isClosing ? [] : [value]);
    } else {
      setOpenItems((prev) => {
        const isClosing = prev.includes(value);
        if (isClosing && !collapsible && prev.length === 1) return prev;

        return isClosing
          ? prev.filter((item) => item !== value)
          : [...prev, value];
      });
    }
  };

  return (
    <div 
      className={cn("flex flex-col", className)}
      role={type === "single" ? "tablist" : undefined}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-multiselectable={type === "multiple"}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as any, { 
            openItems, 
            handleToggle,
            index,
            totalItems: React.Children.count(children)
          });
        }
        return child;
      })}
    </div>
  );
}

/* =========================================================
   Accordion Item
========================================================= */
interface AccordionItemProps {
  value: string;
  disabled?: boolean;
  openItems?: string[];
  handleToggle?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
  index?: number;
  totalItems?: number;
}

export function AccordionItem({
  value,
  disabled,
  openItems,
  handleToggle,
  children,
  index,
  totalItems,
}: AccordionItemProps) {
  const isOpen = openItems?.includes(value);
  const itemId = `accordion-item-${value}`;
  const triggerId = `accordion-trigger-${value}`;
  const contentId = `accordion-content-${value}`;

  return (
    <div
      className={cn(
        "rounded-lg mb-3 border transition-all duration-300 overflow-hidden",
        isOpen
          ? "border-primary-500 bg-white dark:bg-gray-900 dark:border-primary-400"
          : "border-transparent bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/70",
        disabled && "opacity-50 pointer-events-none dark:opacity-40"
      )}
      id={itemId}
      role="presentation"
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as any, {
            isOpen,
            onClick: () => handleToggle?.(value),
            triggerId,
            contentId,
            disabled,
            index,
            totalItems,
            value,
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
interface AccordionTriggerProps {
  isOpen?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  triggerId?: string;
  contentId?: string;
  index?: number;
  totalItems?: number;
  value?: string;
  className?: string;
  triggerIcon?: React.ReactNode;
}

export function AccordionTrigger({
  isOpen,
  children,
  onClick,
  disabled,
  triggerId,
  contentId,
  index,
  totalItems,
  value,
  className,
  triggerIcon = <FiChevronDown size={16} />,
}: AccordionTriggerProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;

    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        onClick?.();
        break;
      case "ArrowDown":
        e.preventDefault();
        // Focus next accordion trigger
        const nextTrigger = document.querySelector<HTMLElement>(
          `[data-accordion-trigger-index="${(index || 0) + 1}"]`
        );
        nextTrigger?.focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        // Focus previous accordion trigger
        const prevTrigger = document.querySelector<HTMLElement>(
          `[data-accordion-trigger-index="${(index || 0) - 1}"]`
        );
        prevTrigger?.focus();
        break;
      case "Home":
        e.preventDefault();
        // Focus first accordion trigger
        const firstTrigger = document.querySelector<HTMLElement>(
          '[data-accordion-trigger-index="0"]'
        );
        firstTrigger?.focus();
        break;
      case "End":
        e.preventDefault();
        // Focus last accordion trigger
        const lastIndex = (totalItems || 1) - 1;
        const lastTrigger = document.querySelector<HTMLElement>(
          `[data-accordion-trigger-index="${lastIndex}"]`
        );
        lastTrigger?.focus();
        break;
    }
  };

  return (
    <div
      id={triggerId}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-expanded={isOpen}
      aria-controls={contentId}
      aria-disabled={disabled}
      data-accordion-trigger-index={index}
      data-accordion-value={value}
      onClick={disabled ? undefined : onClick}
      onKeyDown={handleKeyDown}
      className={cn(
        "flex p-3.5 text-base rounded-lg cursor-pointer bg-white dark:bg-gray-900 justify-between items-center font-semibold transition-all delay-150 ease-in",
        "hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-700",
        isOpen && "bg-gray-50 dark:bg-gray-800",
        isOpen ? "border-none" : "border border-gray-200 dark:border-gray-700",
        disabled && "cursor-not-allowed",
        className
      )}
    >
      <span className="text-gray-900 dark:text-gray-100">{children}</span>
      <span
        className={cn(
          "transition-transform duration-300 text-gray-600 dark:text-gray-400",
          isOpen ? "rotate-180" : "rotate-0"
        )}
        aria-hidden="true"
      >
        {triggerIcon}
      </span>
    </div>
  );
}

/* =========================================================
   Accordion Content
========================================================= */
interface AccordionContentProps {
  isOpen?: boolean;
  children: React.ReactNode;
  className?: string;
  contentId?: string;
  triggerId?: string;
}

export function AccordionContent({ 
  isOpen, 
  children, 
  className,
  contentId,
  triggerId 
}: AccordionContentProps) {
  return (
    <div
      id={contentId}
      role="region"
      aria-labelledby={triggerId}
      hidden={!isOpen}
      className={cn(
        "grid transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      )}
    >
      <div className="overflow-hidden">
        <div className={cn(
          "p-4 pb-6 mobile:px-4 mobile:pb-4 text-gray-600 dark:text-gray-300 leading-relaxed",
          "border-t border-gray-100 dark:border-gray-700",
          className
        )}>
          {children}
        </div>
      </div>
    </div>
  );
}