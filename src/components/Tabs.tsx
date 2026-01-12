import { cn } from "@/utils/util";
import React from "react";

interface TabItem {
  label: string;
  value: string;
}

interface TabsContainerProps {
  value: string;
  children: React.ReactNode;
  className?: string;
  position?: "horizontal" | "vertical";
}

interface TabListProps extends Partial<TabItem> {
  onChange: (value: string) => void;
  ariaLabel?: string;
  children: React.ReactNode;
  box?: boolean;
  className?: string;
  position?: "horizontal" | "vertical";
}

interface TabProps extends TabItem {
  onChange: (value: string) => void;
  box?: boolean;
  content?: React.ReactNode;
  selectedTabValue: string;
  icon?: JSX.Element;
  className?: string;
  tabIndex?: number;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
  position?: "horizontal" | "vertical";
  ref?: React.Ref<HTMLButtonElement>;
}

interface TabPanelProps {
  value: string;
  currentValue: string;
  children: React.ReactNode;
  className?: string;
}

export const TabsContainer: React.FC<TabsContainerProps> = ({
  children,
  className,
  position = "horizontal",
}) => {
  return (
    <div className={cn(position === "vertical" ? "flex" : "block", className)}>
      {children}
    </div>
  );
};

export const TabList: React.FC<TabListProps> = ({
  onChange,
  ariaLabel,
  children,
  box = false,
  className,
  position = "horizontal",
}) => {
  const [focusIndex, setFocusIndex] = React.useState(0);
  const tabRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    const tabCount = React.Children.count(children);

    switch (e.key) {
      case "ArrowRight": {
        if (position === "horizontal") {
          e.preventDefault();
          const nextIndex = (index + 1) % tabCount;
          setFocusIndex(nextIndex);
          tabRefs.current[nextIndex]?.focus();
        }
        break;
      }

      case "ArrowLeft": {
        if (position === "horizontal") {
          e.preventDefault();
          const prevIndex = (index - 1 + tabCount) % tabCount;
          setFocusIndex(prevIndex);
          tabRefs.current[prevIndex]?.focus();
        }
        break;
      }

      case "ArrowDown": {
        if (position === "vertical") {
          e.preventDefault();
          const nextIndex = (index + 1) % tabCount;
          setFocusIndex(nextIndex);
          tabRefs.current[nextIndex]?.focus();
        }
        break;
      }

      case "ArrowUp": {
        if (position === "vertical") {
          e.preventDefault();
          const prevIndex = (index - 1 + tabCount) % tabCount;
          setFocusIndex(prevIndex);
          tabRefs.current[prevIndex]?.focus();
        }
        break;
      }

      case "Home": {
        e.preventDefault();
        setFocusIndex(0);
        tabRefs.current[0]?.focus();
        break;
      }

      case "End": {
        e.preventDefault();
        const lastIndex = tabCount - 1;
        setFocusIndex(lastIndex);
        tabRefs.current[lastIndex]?.focus();
        break;
      }
    }
  };

  return (
    <div
      className={cn(
        position === "horizontal"
          ? "flex items-center"
          : "flex flex-col items-stretch",
        box
          ? "rounded-2xl bg-light dark:bg-gray-900 p-2"
          : position === "horizontal"
            ? "border-b border-gray-200 dark:border-gray-600"
            : "border-r border-gray-200 dark:border-gray-600",
        className,
      )}
      role="tablist"
      aria-label={ariaLabel}
      aria-orientation={position}
    >
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            onChange,
            box,
            position,
            onKeyDown: (e: React.KeyboardEvent) => handleKeyDown(e, index),
            tabIndex: index === focusIndex ? 0 : -1,
            ref: (el: HTMLButtonElement | null) => {
              tabRefs.current[index] = el;
            },
          } as any);
        }
        return null;
      })}
    </div>
  );
};

export const Tab = React.forwardRef<HTMLButtonElement, TabProps>(
  (
    {
      label,
      value,
      onChange,
      icon,
      content,
      box = false,
      selectedTabValue,
      className,
      onKeyDown,
      tabIndex,
      position = "horizontal",
    },
    ref,
  ) => {
    const isSelected = value === selectedTabValue;

    return (
      <button
        ref={ref}
        role="tab"
        aria-selected={isSelected}
        aria-controls={`panel-${value}`}
        id={`tab-${value}`}
        tabIndex={tabIndex}
        onKeyDown={onKeyDown}
        onClick={() => onChange(value)}
        className={cn(
          "flex items-center gap-2 px-4 py-3 text-base font-medium cursor-pointer",
          // Default variant
          !box && [
            isSelected && position === "horizontal"
              ? "text-primary-400 border-b-2 border-primary-400"
              : isSelected && position === "vertical"
                ? "text-primary-400 border-r-2 border-primary-400"
                : "border-transparent text-gray-700 dark:text-gray-500",
          ],
          // Hover styles
          position === "horizontal" && !box
            ? "hover:bg-gray-100 dark:hover:bg-gray-900 hover:rounded-t transition-all duration-200"
            : "hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-200",
          // Vertical border for unselected
          position === "vertical" && !box && !isSelected ? "border-r-2" : "",
          // Box variant
          box && [
            "transition-all ease-linear duration-200 delay-75 rounded-radius-lg border border-transparent hover:bg-primary-50 dark:hover:bg-primary-900 hover:border-primary-200 dark:hover:border-primary-800 dark:text-light",
            position === "horizontal" ? "flex items-center gap-2" : "",
            isSelected
              ? "text-light bg-primary-600 dark:bg-primary-800 shadow-[inset_3px_4px_5.3px_0_#0d3374a3] shadow-primary-700 border-primary-200 dark:border-primary-600 hover:bg-primary-600 hover:shadow-[inset_-4px_-3px_4px_0_#94bcff4a]"
              : "",
          ],
          className,
        )}
      >
        {icon && <span aria-hidden="true">{icon}</span>}
        {label}
        {content && <span aria-hidden="true">{content}</span>}
      </button>
    );
  },
);

export const TabPanel: React.FC<TabPanelProps> = ({
  value,
  currentValue,
  children,
  className,
}) => {
  return value === currentValue ? (
    <div
      role="tabpanel"
      id={`panel-${value}`}
      aria-labelledby={`tab-${value}`}
      tabIndex={0}
      className={cn("dark:text-light", className)}
    >
      {children}
    </div>
  ) : null;
};

Tab.displayName = "Tab";

export default TabsContainer;
