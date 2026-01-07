"use client";
import React, {
  useEffect,
  useState,
  useMemo,
  useCallback,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import { HiChevronDown, HiOutlineSearch } from "react-icons/hi";
import Input from "./Input";
import Label from "./Label";
import Checkbox from "./Checkbox";
import { cn } from "@/utils/util";
import { useId } from "react";

type Option = {
  label: string | number;
  value: string | number;
  info?: string;
  addInfo?: string;
  tooltipContent?: string;
  disabledOption?: boolean;
  labelTextColor?: string;
};

interface MenuItemProps {
  label?: string | number;
  value?: string | number;
  selected: boolean;
  disabled: boolean;
  children?: React.ReactNode;
}

interface DropdownProps {
  id?: string;
  icon?: JSX.Element;
  options: Option[];
  selected?: Option[];
  setSelected?: React.Dispatch<React.SetStateAction<Option[]>>;
  onApply?: () => void;
  onReset?: () => void;
  dropdownText?: string;
  search?: boolean;
  multiple?: boolean;
  renderItem?: (
    option: Option,
    state: {
      selected: boolean;
      disabled: boolean;
    },
  ) => React.ReactNode;
  children?: React.ReactNode;
  position?: "top" | "bottom";
  info?: string | number;
  addInfo?: string | number;
  tooltipContent?: string;
  width?: string;
  dropdownFooter?: boolean | undefined;
  disabled?: boolean;
  labelTextColor?: string;
  footerAction?: React.ReactNode;
  height?: string;
}

const defaultRenderItem = (
  option: Option,
  state: { selected: boolean; disabled: boolean },
) => {
  return (
    <MenuItem
      label={option.label}
      value={option.value}
      selected={state.selected}
      disabled={state.disabled}
    />
  );
};

const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      id: controlledId,
      options,
      selected,
      setSelected,
      search = false,
      multiple = false,
      dropdownText = "Select",
      renderItem = defaultRenderItem,
      children,
      icon,
      position = "top",
      width,
      info,
      dropdownFooter = false,
      onApply,
      disabled = false,
      onReset,
      footerAction,
      height = "200px",
    },
    ref,
  ) => {
    const reactId = useId();
    const id = controlledId ?? `dropdown-${reactId}`;
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [filteredOptions, setFilteredOptions] = useState<Option[]>(
      options || [],
    );
    const [dropdownMenu, setDropdownMenu] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => dropdownRef.current!);

    useEffect(() => {
      if (options) {
        setFilteredOptions(options);
      }
    }, [options]);

    const memoizedFilteredOptions = useMemo(() => {
      if (!search) return filteredOptions;
      return filteredOptions.filter((option) => {
        if (typeof option.label === "string") {
          return option.label.toLowerCase().includes(searchQuery.toLowerCase());
        }
        return option.label.toString().includes(searchQuery.toLowerCase());
      });
    }, [search, searchQuery, filteredOptions]);

    const handleSearchChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
      },
      [],
    );

    const toggleOption = useCallback(
      (option: Option) => {
        if (multiple && setSelected) {
          setSelected((prevSelected) =>
            prevSelected.some((item) => item.value === option.value)
              ? prevSelected.filter((item) => item.value !== option.value)
              : [...prevSelected, option],
          );
        } else if (setSelected) {
          setSelected([option]);
          setDropdownMenu(false);
        }
      },
      [multiple, setSelected],
    );

    const handleSelectAll = () => {
      if (selected?.length === filteredOptions.length) {
        setSelected?.([]);
      } else {
        setSelected?.(filteredOptions);
      }
    };

    const handleReset = () => {
      if (onReset) {
        onReset();
      }
      setSelected?.([]);
      setDropdownMenu(false);
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownMenu(false);
      }
    };

    return (
      <div
        id={id}
        ref={dropdownRef}
        className={cn(
          "relative rounded-lg shadow-sm font-karla",
          "bg-white dark:bg-gray-900",
          "text-gray-900 dark:text-gray-100",
          !width && "w-full",
          disabled && "cursor-not-allowed opacity-50",
        )}
        style={{
          width: width,
        }}
      >
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={dropdownMenu}
          aria-labelledby={`${id}-label`}
          disabled={disabled}
          onClick={() => !disabled && setDropdownMenu((prev) => !prev)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              !disabled && setDropdownMenu((prev) => !prev);
            }
          }}
          className={cn(
            "w-full flex justify-between items-center rounded-lg px-[14px] py-2 text-sm",
            "border transition-colors",
            "bg-white dark:bg-gray-900",
            "text-gray-900 dark:text-gray-100",
            "hover:bg-gray-50 dark:hover:bg-gray-800",
            dropdownMenu
              ? "border-primary-600"
              : "border-gray-200 dark:border-gray-700",
            disabled && "cursor-not-allowed opacity-50",
          )}
        >
          <section className="flex items-center gap-2 text-ellipsis overflow-hidden">
            {icon && <span aria-hidden="true">{icon}</span>}
            <span id={`${id}-label`} className="line-clamp-1 w-full">
              {multiple
                ? (selected?.length ?? 0) > 0
                  ? `${selected?.length} Selected`
                  : dropdownText
                : selected?.[0]?.label
                  ? selected?.[0]?.label
                  : dropdownText}
            </span>
          </section>
          <HiChevronDown aria-hidden="true" size={18} />
        </button>
        <ul
          role="listbox"
          aria-multiselectable={multiple}
          aria-labelledby={`${id}-label`}
          className={cn(
            "absolute z-[1000] w-full mt-1 rounded shadow-md overflow-hidden transition-all",
            "bg-white dark:bg-gray-900",
            "text-gray-900 dark:text-gray-100",
            dropdownMenu ? "opacity-100 max-h-[360px]" : "opacity-0 max-h-0",
            position === "top" ? "top-10" : "bottom-10",
            dropdownMenu
              ? "border border-primary-600"
              : "border border-gray-200 dark:border-gray-700",
          )}
        >
          {search && (
            <Input
              id={`${id}-search`}
              type="text"
              placeholder="Search..."
              aria-label="Search options"
              value={searchQuery}
              onChange={handleSearchChange}
              className="rounded-none text-gray-800 text-sm bg-white w-full h-[35px] pl-3 border-none"
              endIcon={<HiOutlineSearch size={18} />}
            />
          )}
          {multiple && (
            <section className="py-[6px] px-[14px] flex justify-between items-center">
              <button
                type="button"
                aria-label="Select all"
                onClick={handleSelectAll}
                className="text-sm  hover:text-primary-700 text-primary-600 dark:text-primary-300 cursor-pointer"
              >
                Select all
              </button>
              <button
                aria-label="Reset"
                type="button"
                className="text-sm text-warning-500 hover:text-warning-600"
                onClick={handleReset}
              >
                Reset
              </button>
            </section>
          )}
          <section
            style={{ maxHeight: height }}
            className="z-[1000] transition-all duration-75 delay-100 ease-in-out overflow-y-scroll"
          >
            {options
              ? memoizedFilteredOptions?.map((option, i) => (
                  <React.Fragment key={`${option.value}-${i}`}>
                    {multiple ? (
                      <Label
                        className={cn(
                          "flex flex-col cursor-pointer border-l-4 px-[14px] py-[6px]",
                          "bg-white dark:bg-gray-900",
                          "hover:bg-gray-50 dark:hover:bg-gray-800",
                          "border-transparent",
                          "has-[:checked]:bg-primary-50 dark:has-[:checked]:bg-gray-800",
                          "has-[:checked]:border-primary-600",
                          option.disabledOption &&
                            "opacity-50 cursor-not-allowed pointer-events-none",
                        )}
                        htmlFor={`${id}-checkbox-${option.value}`}
                        key={i}
                      >
                        <section className="flex items-center justify-between gap-2 w-full">
                          <div className="flex gap-2">
                            <Checkbox
                              square
                              id={`${id}-checkbox-${option.value}`}
                              checked={
                                selected?.some(
                                  (item) => item.value === option.value,
                                ) ?? false
                              }
                              onChange={() => toggleOption(option)}
                              disabled={!!option.disabledOption}
                            />

                            <div className="flex items-center gap-1">
                              <div
                                style={{
                                  color: option?.disabledOption
                                    ? "#D1D5DB"
                                    : option.labelTextColor,
                                }}
                                className={cn(
                                  "break-words",
                                  option?.disabledOption && "text-gray-300",
                                )}
                              >
                                {renderItem(option, {
                                  selected:
                                    selected?.some(
                                      (item) => item.value === option.value,
                                    ) ?? false,
                                  disabled: !!option.disabledOption,
                                })}
                              </div>
                            </div>
                          </div>
                          <span className="text-gray-500">{option?.info}</span>
                        </section>
                        <span className="pt-[2px] text-sm text-gray-500">
                          {option?.addInfo}
                        </span>
                      </Label>
                    ) : (
                      <Label
                        key={i}
                        htmlFor={`${id}-checkbox-${option.value}`}
                        className={cn(
                          "flex justify-between items-center px-[14px] py-[6px] border-l-4 cursor-pointer",
                          "bg-white dark:bg-gray-900",
                          "hover:bg-gray-50 dark:hover:bg-gray-800",
                          "border-transparent",
                          selected?.[0]?.value === option.value &&
                            "bg-primary-50 dark:bg-gray-800 border-primary-600",
                          option.disabledOption &&
                            "opacity-50 cursor-not-allowed pointer-events-none",
                        )}
                        onClick={() =>
                          !option?.disabledOption && toggleOption(option)
                        }
                      >
                        {/* Text styling only inside MenuItem */}
                        <MenuItem
                          label={option.label}
                          selected={selected?.[0]?.value === option.value}
                          disabled={!!option.disabledOption}
                        />

                        <span className="text-gray-500">{info}</span>
                      </Label>
                    )}
                  </React.Fragment>
                ))
              : children}
          </section>
          {footerAction && (
            <div className="py-2 mt-1 px-2 border-t">{footerAction}</div>
          )}
          {dropdownFooter && (
            <DropdownFooter
              setDropdownMenu={setDropdownMenu}
              onApply={onApply}
            />
          )}
        </ul>
      </div>
    );
  },
);

export const MenuItem: React.FC<MenuItemProps> = ({
  label,
  selected,
  disabled,
  children,
}) => {
  return (
    <p
      className={cn(
        "break-all transition-colors",
        "text-gray-900 dark:text-gray-100",
        selected && "text-gray-900 dark:text-white font-medium",
        disabled && "text-gray-300 dark:text-gray-500",
      )}
    >
      {label ?? children}
    </p>
  );
};

interface DropdownFooterProps {
  onApply?: (() => void) | undefined;
  setDropdownMenu?: (value: boolean) => void;
}

export const DropdownFooter: React.FC<DropdownFooterProps> = ({
  onApply,
  setDropdownMenu,
}) => {
  return (
    <div className="flex justify-end border-t border-gray-200 dark:border-gray-700 px-[14px] py-[8px] text-sm">
      <button
        type="button"
        className="text-primary-600 dark:text-primary-300 hover:text-primary-700"
        onClick={() => {
          if (onApply) {
            onApply();
          }
          if (setDropdownMenu) {
            setDropdownMenu(false);
          }
        }}
      >
        Apply
      </button>
    </div>
  );
};

Dropdown.displayName = "Dropdown";

export default Dropdown;
