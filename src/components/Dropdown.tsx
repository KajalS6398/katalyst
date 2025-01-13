import { cn } from "@/utils/util";
import React, { useState, useRef, useEffect } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

interface DropdownProps {
  triggerIcon?: React.ReactNode;
  children: React.ReactNode;
  width?: string;
  className?: string;
}

export default function Dropdown({
  triggerIcon,
  children,
  width = "250px",
  className
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={"relative w-full font-karla"} ref={dropdownRef}>
      <div
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open menu"
      >
        {triggerIcon || <span>☰</span>}
      </div>
      {isOpen && (
        <div
          style={{ width }}
          className={cn(
            "border border-primary-200 dark:bg-white dark:border-primary-600 rounded-t-radius-md absolute left-0 mt-1 z-[100000] w-full bg-white shadow-sm",
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
}

interface MenuItemProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  label,
  onClick,
  disabled,
  children,
  className = "", 
}) => (
  <button
    className={cn(
      "w-full text-left p-4 border-t border-b border-primary-100 last:border-t last:border-none hover:bg-primary-50 dark:hover:bg-primary-50", 
      disabled ? "opacity-50 cursor-not-allowed" : "",
      className 
    )}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
    {children && <>{children}</>}
  </button>
);

interface MenuSubItemProps {
  content: React.ReactNode;
  children: React.ReactNode;
  label?: string;
  className?: string; 
  sectionClassName?: string; 
  subMenuClassName?: string; 
}

export const MenuSubItem: React.FC<MenuSubItemProps> = ({
  content,
  children,
  className = "", 
  sectionClassName = "", 
  subMenuClassName = "", 
}) => {
  const [isSubOpen, setIsSubOpen] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <section
        onClick={() => setIsSubOpen(!isSubOpen)}
        className={cn(
          "cursor-pointer hover:bg-primary-50 dark:hover:bg-primary-50 border-t border-b border-primary-100 p-4 flex justify-between items-center gap-1 w-full text-left",
          sectionClassName 
        )}
      >
        {content}
        {isSubOpen ? <HiChevronUp /> : <HiChevronDown />}
      </section>
      {isSubOpen && (
        <div
          className={cn(
            "bg-primary-25 border-primary-100 dark:bg-primary-50 dark:border-primary-100",
            subMenuClassName 
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
