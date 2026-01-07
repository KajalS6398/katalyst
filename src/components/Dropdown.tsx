// import { cn } from "@/utils/util";
// import React, { useState, useRef, useEffect } from "react";
// import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

// interface DropdownProps {
//   triggerIcon?: React.ReactNode;
//   children: React.ReactNode;
//   width?: string;
//   className?: string;
// }

// export default function Dropdown({
//   triggerIcon,
//   children,
//   width = "250px",
//   className
// }: DropdownProps) {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className={"relative w-full font-karla"} ref={dropdownRef}>
//       <div
//         className="cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="Open menu"
//       >
//         {triggerIcon || <span>☰</span>}
//       </div>
//       {isOpen && (
//         <div
//           style={{ width }}
//           className={cn(
//             "border border-primary-200 dark:bg-white dark:border-primary-600 rounded-t-radius-md absolute left-0 mt-1 z-[100000] w-full bg-white shadow-sm",
//             className
//           )}
//         >
//           {children}
//         </div>
//       )}
//     </div>
//   );
// }

// interface MenuItemProps {
//   label: string;
//   onClick?: () => void;
//   disabled?: boolean;
//   children?: React.ReactNode;
//   className?: string;
// }

// export const MenuItem: React.FC<MenuItemProps> = ({
//   label,
//   onClick,
//   disabled,
//   children,
//   className = "",
// }) => (
//   <button
//     className={cn(
//       "w-full text-left p-4 border-t border-b border-primary-100 last:border-t last:border-none hover:bg-primary-50 dark:hover:bg-primary-50",
//       disabled ? "opacity-50 cursor-not-allowed" : "",
//       className
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
//   className?: string;
//   sectionClassName?: string;
//   subMenuClassName?: string;
// }

// export const MenuSubItem: React.FC<MenuSubItemProps> = ({
//   content,
//   children,
//   className = "",
//   sectionClassName = "",
//   subMenuClassName = "",
// }) => {
//   const [isSubOpen, setIsSubOpen] = useState(false);

//   return (
//     <div className={cn("relative", className)}>
//       <section
//         onClick={() => setIsSubOpen(!isSubOpen)}
//         className={cn(
//           "cursor-pointer hover:bg-primary-50 dark:hover:bg-primary-50 border-t border-b border-primary-100 p-4 flex justify-between items-center gap-1 w-full text-left",
//           sectionClassName
//         )}
//       >
//         {content}
//         {isSubOpen ? <HiChevronUp /> : <HiChevronDown />}
//       </section>
//       {isSubOpen && (
//         <div
//           className={cn(
//             "bg-primary-25 border-primary-100 dark:bg-primary-50 dark:border-primary-100",
//             subMenuClassName
//           )}
//         >
//           {children}
//         </div>
//       )}
//     </div>
//   );
// };

"use client";

import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  forwardRef,
  useRef,
  useImperativeHandle,
  useId,
} from "react";
import { HiChevronDown, HiOutlineSearch } from "react-icons/hi";
import Input from "./Input";
import Label from "./Label";
import Checkbox from "./Checkbox";
import { cn } from "@/utils/util";

/* ------------------ TYPES ------------------ */

type Option = {
  label: string | number;
  value: string | number;
  info?: string;
  addInfo?: string;
  disabledOption?: boolean;
  labelTextColor?: string;
};

interface MenuItemProps {
  label?: string | number;
  children?: React.ReactNode;
}

interface DropdownProps {
  id?: string;
  options: Option[];
  selected?: Option[];
  setSelected?: React.Dispatch<React.SetStateAction<Option[]>>;
  search?: boolean;
  multiple?: boolean;
  dropdownText?: string;
  renderItem?: (option: Option) => React.ReactNode;
  position?: "top" | "bottom";
  width?: string;
  disabled?: boolean;
  dropdownFooter?: boolean;
  onApply?: () => void;
  footerAction?: React.ReactNode;
}

/* ------------------ MENU ITEM ------------------ */

export const MenuItem: React.FC<MenuItemProps> = ({ label, children }) => {
  return <p className="break-all">{label ?? children}</p>;
};

const defaultRenderItem = (option: Option) => <MenuItem label={option.label} />;

/* ------------------ DROPDOWN ------------------ */

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      id,
      options,
      selected,
      setSelected,
      search = false,
      multiple = false,
      dropdownText = "Select",
      renderItem = defaultRenderItem,
      position = "bottom",
      width,
      disabled = false,
      dropdownFooter,
      onApply,
      footerAction,
    },
    ref,
  ) => {
    const reactId = useId();
    const dropdownId = id ?? `dropdown-${reactId}`;

    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

    useImperativeHandle(ref, () => dropdownRef.current!);

    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const [searchQuery, setSearchQuery] = useState("");

    /* ---------- STABLE OPTION IDS (CRITICAL FIX) ---------- */

    const optionIds = useMemo(() => {
      return options.map((_, index) => `${dropdownId}-option-${index}`);
    }, [options, dropdownId]);

    /* ------------------ FILTERING ------------------ */

    const filteredOptions = useMemo(() => {
      if (!search) return options;
      return options.filter((o) =>
        o.label.toString().toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }, [options, search, searchQuery]);

    /* ------------------ CLICK OUTSIDE ------------------ */

    useEffect(() => {
      const handler = (e: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(e.target as Node)
        ) {
          setOpen(false);
          setActiveIndex(-1);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, []);

    /* ------------------ SELECTION ------------------ */

    const toggleOption = useCallback(
      (option: Option) => {
        if (!setSelected || option.disabledOption) return;

        if (multiple) {
          setSelected((prev = []) =>
            prev.some((i) => i.value === option.value)
              ? prev.filter((i) => i.value !== option.value)
              : [...prev, option],
          );
        } else {
          setSelected([option]);
          setOpen(false);
          buttonRef.current?.focus();
        }
      },
      [multiple, setSelected],
    );

    /* ------------------ KEYBOARD ------------------ */

    const onButtonKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      if (["Enter", " ", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
        setOpen(true);
        setActiveIndex(0);
      }
    };

    const onListKeyDown = (e: React.KeyboardEvent) => {
      if (!open) return;

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setActiveIndex((i) => Math.min(i + 1, filteredOptions.length - 1));
          break;
        case "ArrowUp":
          e.preventDefault();
          setActiveIndex((i) => Math.max(i - 1, 0));
          break;
        case "Home":
          setActiveIndex(0);
          break;
        case "End":
          setActiveIndex(filteredOptions.length - 1);
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          if (activeIndex >= 0) {
            toggleOption(filteredOptions[activeIndex]);
          }
          break;
        case "Escape":
          setOpen(false);
          buttonRef.current?.focus();
          break;
        case "Tab":
          setOpen(false);
          break;
      }
    };

    /* ------------------ FOCUS ACTIVE ITEM ------------------ */

    useEffect(() => {
      if (activeIndex >= 0) {
        itemRefs.current[activeIndex]?.focus();
      }
    }, [activeIndex]);

    /* ------------------ RENDER ------------------ */

    return (
      <div
        ref={dropdownRef}
        id={dropdownId}
        className={cn("relative", disabled && "opacity-50")}
        style={{ width }}
      >
        {/* BUTTON */}
        <button
          ref={buttonRef}
          type="button"
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          onKeyDown={onButtonKeyDown}
          className="w-full flex justify-between items-center px-3 py-2 border rounded-lg bg-white"
        >
          <span className="truncate">
            {multiple
              ? selected?.length
                ? `${selected.length} Selected`
                : dropdownText
              : (selected?.[0]?.label ?? dropdownText)}
          </span>
          <HiChevronDown size={18} />
        </button>

        {/* MENU */}
        {open && (
          <ul
            role="listbox"
            tabIndex={-1}
            aria-multiselectable={multiple}
            onKeyDown={onListKeyDown}
            className={cn(
              "absolute z-50 mt-1 w-full bg-white border rounded shadow max-h-64 overflow-auto",
              position === "top" && "bottom-full mb-1",
            )}
          >
            {search && (
              <div className="px-2 py-1">
                <Input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  endIcon={<HiOutlineSearch />}
                />
              </div>
            )}

            {filteredOptions.map((option, i) => {
              const isSelected = selected?.some(
                (s) => s.value === option.value,
              );

              const optionId = optionIds[i];

              return multiple ? (
                <li
                  key={optionId}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  role="option"
                  aria-selected={isSelected}
                  tabIndex={activeIndex === i ? 0 : -1}
                  onFocus={() => setActiveIndex(i)}
                  className={cn(
                    "outline-none",
                    activeIndex === i && "bg-primary-50",
                    option.disabledOption && "opacity-50 cursor-not-allowed",
                  )}
                >
                  <Label
                    htmlFor={optionId}
                    className="flex flex-col px-3 py-2 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Checkbox
                        id={optionId}
                        checked={!!isSelected}
                        onChange={() => toggleOption(option)}
                        disabled={!!option.disabledOption}
                      />
                      {renderItem(option)}
                    </div>

                    {option.addInfo && (
                      <span className="text-sm text-gray-500">
                        {option.addInfo}
                      </span>
                    )}
                  </Label>
                </li>
              ) : (
                <li
                  key={optionId}
                  ref={(el) => {
                    itemRefs.current[i] = el;
                  }}
                  role="option"
                  aria-selected={isSelected}
                  tabIndex={activeIndex === i ? 0 : -1}
                  onClick={() => toggleOption(option)}
                  onFocus={() => setActiveIndex(i)}
                  className={cn(
                    "px-3 py-2 cursor-pointer outline-none",
                    activeIndex === i && "bg-primary-50",
                    isSelected && "font-medium",
                    option.disabledOption && "opacity-50 cursor-not-allowed",
                  )}
                >
                  {renderItem(option)}
                </li>
              );
            })}

            {footerAction && (
              <li className="border-t px-3 py-2">{footerAction}</li>
            )}

            {dropdownFooter && (
              <li className="border-t">
                <DropdownFooter onApply={onApply} setDropdownMenu={setOpen} />
              </li>
            )}
          </ul>
        )}
      </div>
    );
  },
);

Dropdown.displayName = "Dropdown";

/* ------------------ FOOTER ------------------ */

interface DropdownFooterProps {
  onApply?: (() => void) | undefined;
  setDropdownMenu?: (v: boolean) => void;
}

export const DropdownFooter: React.FC<DropdownFooterProps> = ({
  onApply,
  setDropdownMenu,
}) => {
  return (
    <div className="flex justify-end border-t px-3 py-2">
      <button
        type="button"
        className="text-primary-600 hover:text-primary-700"
        onClick={() => {
          onApply?.();
          setDropdownMenu?.(false);
        }}
      >
        Apply
      </button>
    </div>
  );
};

export default Dropdown;
