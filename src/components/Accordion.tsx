import { cn } from "@/utils/util";
import React, {
  useEffect,
  useRef,
  useState,
  KeyboardEvent,
  useId,
} from "react";
import { FiChevronDown } from "react-icons/fi";

/* -------------------------------- Accordion -------------------------------- */

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
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{
                openItems: string[];
                handleToggle: (value: string) => void;
              }>,
              { openItems, handleToggle },
            )
          : child,
      )}
    </div>
  );
}

/* ----------------------------- Accordion Item ------------------------------ */

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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const id = useId();

  const toggle = () => {
    if (!disabled && handleToggle) {
      handleToggle(value);
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    const buttons = Array.from(
      document.querySelectorAll<HTMLButtonElement>(
        '[data-accordion-trigger="true"]',
      ),
    );

    const index = buttons.indexOf(e.currentTarget);

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        buttons[index + 1]?.focus();
        break;
      case "ArrowUp":
        e.preventDefault();
        buttons[index - 1]?.focus();
        break;
      case "Home":
        e.preventDefault();
        buttons[0]?.focus();
        break;
      case "End":
        e.preventDefault();
        buttons[buttons.length - 1]?.focus();
        break;
      case "Enter":
      case " ":
        e.preventDefault();
        toggle();
        break;
    }
  };

  return (
    <div
      className={cn(
        "rounded-lg mb-3 shadow-cardShadow dark:shadow-none border dark:border-gray-900",
        isOpen
          ? "border-primary-500 shadow-cardShadowActive dark:bg-gray-900"
          : "hover:border-gray-500 hover:bg-gray-100 hover:dark:bg-transparent hover:dark:border-gray-600",
        disabled && "opacity-50",
      )}
    >
      <button
        ref={buttonRef}
        type="button"
        data-accordion-trigger="true"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
        disabled={disabled}
        onClick={toggle}
        onKeyDown={onKeyDown}
        className="w-full text-left font-semibold p-[32px] mobile:p-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
      >
        {children && Array.isArray(children) ? (
          <>
            {React.cloneElement(children[0] as React.ReactElement, { isOpen })}
            {React.cloneElement(children[1] as React.ReactElement, {
              isOpen,
              contentId: `accordion-content-${id}`,
            })}
          </>
        ) : (
          children
        )}
      </button>
    </div>
  );
}

/* ---------------------------- Accordion Trigger ----------------------------- */

type AccordionTriggerProps = {
  isOpen?: boolean;
  children: React.ReactNode;
};

export function AccordionTrigger({ isOpen, children }: AccordionTriggerProps) {
  return (
    <div className="flex justify-between items-center font-semibold text-[20px] mobile:text-[12px] mobile:leading-[18px] text-dark dark:text-white">
      {children}
      <span
        className={cn(
          "transition-transform duration-300",
          isOpen ? "rotate-180" : "rotate-0",
        )}
        aria-hidden
      >
        <FiChevronDown size={20} />
      </span>
    </div>
  );
}

/* ---------------------------- Accordion Content ----------------------------- */

type AccordionContentProps = {
  isOpen?: boolean;
  contentId?: string;
  children: React.ReactNode;
};

export function AccordionContent({
  isOpen,
  contentId,
  children,
}: AccordionContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? ref.current.scrollHeight : 0);
    }
  }, [isOpen, children]);

  return (
    <div
      id={contentId}
      role="region"
      aria-hidden={!isOpen}
      style={{ maxHeight: height }}
      className={cn(
        "overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out",
        isOpen ? "opacity-100" : "opacity-0",
      )}
    >
      <div
        ref={ref}
        className="pt-[32px] mobile:pt-[10px] font-normal font-karla text-[18px] mobile:text-[12px] mobile:leading-[18px] text-dark dark:text-gray-300"
      >
        {children}
      </div>
    </div>
  );
}
