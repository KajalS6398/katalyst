import { cn } from "@/utils/util";
import React, { useState, useRef, useEffect } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

interface DropdownProps {
  triggerIcon?: React.ReactNode;
  children: React.ReactNode;
  width?: string;
}

export default function Dropdown({
  triggerIcon,
  children,
  width = "250px",
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
          className={
            "border border-primary-200 dark:bg-primary-800 dark:border-primary-600 dark:text-white rounded-t-radius-md absolute left-0 mt-1 z-[100000] w-full bg-white shadow-sm"
          }
        >
          {children}
        </div>
      )}
    </div>
  );
}

// interface MenuItemProps {
//   label: string;
//   onClick?: () => void;
//   disabled?: boolean;
//   children?: React.ReactNode;
// }

// export const MenuItem: React.FC<MenuItemProps> = ({
//   label,
//   onClick,
//   disabled,
//   children,
// }) => (
//   <button
//     className={cn(
//       "w-full text-left p-4 border-t border-b border-primary-200 last:border-t last:border-none hover:bg-primary-200 dark:hover:bg-primary-600",
//       disabled ? "opacity-50 cursor-not-allowed" : "",
//     )}
//     onClick={onClick}
//     disabled={disabled}
//   >
//     {label}
//     {children && <>{children}</>}
//   </button>
// );

// interface MenuSubItemProps {
//   content: React.ReactNode;
//   children: React.ReactNode;
//   label?: string;
// }

// export const MenuSubItem: React.FC<MenuSubItemProps> = ({ content, children }) => {
//   const [isSubOpen, setIsSubOpen] = useState(false);

//   return (
//     <div className="relative">
//       <section
//         onClick={() => setIsSubOpen(!isSubOpen)}
//         className="cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-200 border-t border-b border-primary-200 p-4 flex justify-between items-center gap-1 w-full text-left"
//       >
//         <>
//           {content}
//         </>
//         {isSubOpen ? <HiChevronUp /> : <HiChevronDown />}
//       </section>
//       {isSubOpen && (
//         <div className="bg-primary-100 border-primary-200 dark:bg-primary-300 dark:border-primary-600 dark:text-white">
//           {children}
//         </div>
//       )}
//     </div>
//   );
// };

// new

interface MenuItemProps {
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string; // Add className prop for customization
}

export const MenuItem: React.FC<MenuItemProps> = ({
  label,
  onClick,
  disabled,
  children,
  className = "", // Default to empty string if not provided
}) => (
  <button
    className={cn(
      "w-full text-left p-4 border-t border-b border-primary-200 last:border-t last:border-none hover:bg-primary-200 dark:hover:bg-primary-600", 
      disabled ? "opacity-50 cursor-not-allowed" : "",
      className // Allow className prop to overwrite default styles
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
  className?: string; // Add className prop for customization
  sectionClassName?: string; // Add className prop for section (clickable part)
  subMenuClassName?: string; // Add className prop for the dropdown submenu
}

export const MenuSubItem: React.FC<MenuSubItemProps> = ({
  content,
  children,
  className = "", // Default to empty string if not provided
  sectionClassName = "", // Default to empty string if not provided
  subMenuClassName = "", // Default to empty string if not provided
}) => {
  const [isSubOpen, setIsSubOpen] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <section
        onClick={() => setIsSubOpen(!isSubOpen)}
        className={cn(
          "cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-200 border-t border-b border-primary-200 p-4 flex justify-between items-center gap-1 w-full text-left",
          sectionClassName // Allow sectionClassName to overwrite section-specific styles
        )}
      >
        {content}
        {isSubOpen ? <HiChevronUp /> : <HiChevronDown />}
      </section>
      {isSubOpen && (
        <div
          className={cn(
            "bg-primary-100 border-primary-200 dark:bg-primary-300 dark:border-primary-600 dark:text-white",
            subMenuClassName // Allow subMenuClassName to overwrite submenu styles
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
