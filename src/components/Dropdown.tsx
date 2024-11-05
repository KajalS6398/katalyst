import React, { useState, useRef, useEffect } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

interface DropdownProps {
  triggerIcon?: React.ReactNode;
  children: React.ReactNode;
  width?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  triggerIcon,
  children,
  width = "250px",
}) => {
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
    <div style={{ width }} className={`relative w-fit font-karla`} ref={dropdownRef}>
      <div
        className="inline-flex cursor-pointer items-center justify-center rounded-full bg-white text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open menu"
      >
        {triggerIcon || <span>☰</span>}
      </div>
      {isOpen && (
        <div
          className={`border border-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:text-white rounded-t-radius-md absolute left-0 mt-1 z-[100000] w-full bg-white shadow-sm`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

interface MenuItemProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  label,
  onClick,
  disabled,
  children,
}) => (
  <button
    className={`w-full text-left p-4 border-t border-gray-200 last:border-none hover:bg-gray-200 dark:hover:bg-gray-600 ${
      disabled ? "opacity-50 cursor-not-allowed" : ""
    }`}
    onClick={onClick}
    disabled={disabled}
  >
    {label}
    {children && <div className="">{children}</div>}
  </button>
);

interface MenuSubItemProps {
  label: string;
  children: React.ReactNode;
}

export const MenuSubItem: React.FC<MenuSubItemProps> = ({
  label,
  children,
}) => {
  const [isSubOpen, setIsSubOpen] = useState(false);

  return (
    <div className="relative">
      <section
        onClick={() => setIsSubOpen(!isSubOpen)}
        className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 border-t border-gray-200 p-4 flex justify-between items-center gap-1 w-full text-left"
      >
        <button className="">{label}</button>
        {isSubOpen ? <HiChevronUp /> : <HiChevronDown />}
      </section>
      {isSubOpen && (
        <div className="bg-gray-100 rounded-b-radius-md border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          {children}
        </div>
      )}
    </div>
  );
};
