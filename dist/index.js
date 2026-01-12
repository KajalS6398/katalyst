// src/utils/util.ts
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
var cn = (...classes) => twMerge(clsx(...classes));

// src/components/Accordion.tsx
import React2, { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
function Accordion({
  type = "single",
  collapsible = true,
  className,
  children,
  expanded,
  defaultOpenValues = []
}) {
  const [openItems, setOpenItems] = useState(defaultOpenValues);
  useEffect(() => {
    if (expanded !== void 0) {
      if (expanded) {
        const allValues = [];
        React2.Children.forEach(children, (child) => {
          if (React2.isValidElement(child)) {
            allValues.push(child.props.value);
          }
        });
        setOpenItems(allValues);
      } else {
        setOpenItems(collapsible ? [] : openItems);
      }
    }
  }, [expanded, children, collapsible]);
  const handleToggle = (value) => {
    if (type === "single") {
      const isClosing = openItems.includes(value);
      if (isClosing && !collapsible) return;
      setOpenItems(isClosing ? [] : [value]);
    } else {
      setOpenItems((prev) => {
        const isClosing = prev.includes(value);
        if (isClosing && !collapsible && prev.length === 1) return prev;
        return isClosing ? prev.filter((item) => item !== value) : [...prev, value];
      });
    }
  };
  return /* @__PURE__ */ React2.createElement("div", { className: cn("flex flex-col", className) }, React2.Children.map(children, (child) => {
    if (React2.isValidElement(child)) {
      return React2.cloneElement(child, { openItems, handleToggle });
    }
    return child;
  }));
}
function AccordionItem({
  value,
  disabled,
  openItems,
  handleToggle,
  children
}) {
  const isOpen = openItems?.includes(value);
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      className: cn(
        "rounded-lg mb-3 border transition-all duration-300 overflow-hidden",
        isOpen ? "border-primary-500 bg-white dark:bg-gray-900" : "border-transparent bg-gray-50 dark:bg-gray-800",
        disabled && "opacity-50 pointer-events-none"
      )
    },
    React2.Children.map(children, (child) => {
      if (React2.isValidElement(child)) {
        return React2.cloneElement(child, {
          isOpen,
          onClick: () => handleToggle?.(value)
        });
      }
      return child;
    })
  );
}
function AccordionTrigger({
  isOpen,
  children,
  onClick,
  className,
  triggerIcon = /* @__PURE__ */ React2.createElement(FiChevronDown, { size: 18 })
}) {
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      onClick,
      className: cn(
        "flex p-3.5 text-lg rounded-lg cursor-pointer bg-white justify-between items-center font-semibold transition-all delay-150 ease-in",
        isOpen && "",
        className
      )
    },
    children,
    /* @__PURE__ */ React2.createElement(
      "span",
      {
        className: cn(
          "transition-transform duration-300",
          isOpen ? "rotate-180" : "rotate-0"
        ),
        "aria-hidden": "true"
      },
      triggerIcon
    )
  );
}
function AccordionContent({ isOpen, children }) {
  return /* @__PURE__ */ React2.createElement(
    "div",
    {
      className: cn(
        "grid transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]",
        isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      )
    },
    /* @__PURE__ */ React2.createElement("div", { className: "overflow-hidden" }, /* @__PURE__ */ React2.createElement("div", { className: "px-6 pb-6 mobile:px-4 mobile:pb-4 text-gray-600 dark:text-gray-400 leading-relaxed" }, children))
  );
}

// src/components/Button.tsx
import { cva } from "class-variance-authority";
import React3 from "react";
var buttonVariants = cva(
  "font-semibold transition-colors rounded-radius-md py-spacing-sm duration-300 ease-in-out cursor-pointer disabled:pointer-events-none disabled:select-none disabled:bg-gray-400 disabled:text-light border-gray-25/15",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-light hover:bg-primary-600 hover:shadow-[inset_0px_2px_8px_-2px_#FFFFFF8F,inset_0px_8px_8px_-2px_#0000002E] active:bg-primary-400 active:shadow-[0px_0px_0px_3px] active:shadow-primary-300",
        "primary-light": "bg-primary-50 text-primary-600 hover:bg-primary-200 hover:shadow-[inset_0px_2px_8px_-2px_#FFFFFF8F,inset_0px_8px_8px_-2px_#356AC32E] active:shadow-[0px_0px_0px_3px] active:bg-primary-50 active:shadow-primary-300",
        secondary: "bg-primary-50 text-primary-800 hover:bg-primary-200 hover:shadow-[inset_0px_2px_8px_-2px_#FFFFFF8F,inset_0px_8px_8px_-2px_#6984AD2E] active:bg-primary-50 active:shadow-[0px_0px_0px_3px] active:shadow-primary-700",
        tertiary: "bg-gray-100 text-gray-900 hover:bg-gray-300 hover:shadow-[inset_0px_2px_8px_-2px_#FFFFFF8F,inset_0px_8px_8px_-2px_#9595952E] active:bg-gray-25 active:shadow-[0px_0px_0px_3px] active:shadow-gray-700",
        quaternary: "bg-gray-50/[0.02] text-light backdrop-blur-[6px] hover:shadow-[inset_0px_8px_8px_-2px_#23232314] hover:backdrop-blur-md hover:bg-gray-200/10 active:bg-gray-25 active:shadow-[0px_0px_0px_3px] active:text-gray-900 active:shadow-[#46464659]"
      },
      size: {
        xs: "text-base px-spacing-sm",
        sm: "text-xl leading-[30px] px-spacing-md",
        md: "font-bold text-2xl leading-[36px] px-spacing-lg",
        lg: "font-bold text-[32px] leading-[48px] px-spacing-xl"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "sm"
    }
  }
);
var Button = ({
  children,
  startIcon,
  endIcon,
  fullWidth,
  rounded,
  disabled,
  className,
  variant,
  size,
  ...props
}) => {
  return /* @__PURE__ */ React3.createElement(
    "button",
    {
      ...props,
      disabled,
      className: cn(
        buttonVariants({ variant, size, className }),
        fullWidth && "w-full",
        "flex items-center justify-center text-center gap-spacing-sm",
        rounded && "!rounded-full"
      )
    },
    startIcon,
    children,
    endIcon
  );
};
var Button_default = Button;

// src/components/Callout.tsx
import { cva as cva2 } from "class-variance-authority";
import React4 from "react";
var calloutVariants = cva2("py-3 px-4 font-medium rounded-md", {
  variants: {
    variant: {
      filled: "",
      outlined: "border"
    },
    intent: {
      primary: "",
      warning: "",
      error: "",
      success: "",
      default: ""
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg"
    }
  },
  compoundVariants: [
    {
      variant: "filled",
      intent: "primary",
      className: "bg-primary-50 text-primary-600 dark:bg-primary-900 dark:text-primary-400"
    },
    {
      variant: "outlined",
      intent: "primary",
      className: "border-primary-200 text-primary-600 bg-transparent dark:text-primary-400"
    },
    {
      variant: "filled",
      intent: "warning",
      className: "bg-yellow-50 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400"
    },
    {
      variant: "outlined",
      intent: "warning",
      className: "border-yellow-400 text-yellow-600 bg-transparent"
    },
    {
      variant: "filled",
      intent: "error",
      className: "bg-red-50 text-red-600 dark:bg-red-900 dark:text-red-400"
    },
    {
      variant: "outlined",
      intent: "error",
      className: "border-red-200 text-red-600 bg-transparent"
    },
    {
      variant: "filled",
      intent: "success",
      className: "bg-green-50 dark:bg-green-900 dark:text-green-400 text-green-600"
    },
    {
      variant: "outlined",
      intent: "success",
      className: "border-green-300 text-green-600 bg-transparent"
    },
    {
      variant: "filled",
      intent: "default",
      className: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-400"
    },
    {
      variant: "outlined",
      intent: "default",
      className: "border-gray-300 text-gray-700 bg-transparent dark:text-gray-400"
    }
  ],
  defaultVariants: {
    variant: "filled",
    intent: "primary",
    size: "sm"
  }
});
var Callout = ({
  children,
  variant,
  intent,
  size,
  startIcon,
  endIcon,
  className
}) => {
  return /* @__PURE__ */ React4.createElement(
    "div",
    {
      role: "alert",
      className: cn(
        calloutVariants({ variant, intent, size }),
        "flex items-center justify-between gap-2",
        className
      )
    },
    /* @__PURE__ */ React4.createElement("div", { className: "flex items-center gap-2" }, startIcon && /* @__PURE__ */ React4.createElement("span", null, startIcon), children),
    endIcon && /* @__PURE__ */ React4.createElement("span", null, endIcon)
  );
};
var Callout_default = Callout;

// src/components/Caption.tsx
import { cva as cva3 } from "class-variance-authority";
import React5 from "react";
var captionVariants = cva3("font-bold font-karla text-dark dark:text-light", {
  variants: {
    variant: {
      sm: "text-[10px] leading-[15px]",
      md: "text-sm leading-[18px]"
    }
  },
  defaultVariants: {
    variant: "sm"
  }
});
var Caption = ({ children, variant, className, ...props }) => {
  return /* @__PURE__ */ React5.createElement("span", { className: cn(captionVariants({ variant, className })), ...props }, children);
};
var Caption_default = Caption;

// src/components/Card.tsx
import Image from "next/image";
import React8 from "react";

// src/components/Typography.tsx
import { cva as cva4 } from "class-variance-authority";
import React6 from "react";
var typographyVariant = cva4("text-dark dark:text-light font-bold", {
  variants: {
    variant: {
      h1: "text-8xl leading-[144px]",
      h2: "text-7xl leading-[90px]",
      h3: "text-5xl leading-[72px]",
      h4: "text-[32px] leading-[48px]",
      h5: "text-2xl leading-9",
      h6: "text-xl font-semibold leading-[30px]"
    }
  },
  defaultVariants: {
    variant: "h1"
  }
});
var Typography = ({
  as,
  variant = "h1",
  children,
  className,
  ...props
}) => {
  const Component = as || variant;
  return /* @__PURE__ */ React6.createElement(
    Component,
    {
      className: cn(typographyVariant({ variant, className })),
      ...props
    },
    children
  );
};
var Typography_default = Typography;

// src/components/Paragraph.tsx
import { cva as cva5 } from "class-variance-authority";
import React7 from "react";
var paragraphVariants = cva5(
  "font-karla font-normal text-dark dark:text-light",
  {
    variants: {
      variant: {
        b1: "text-2xl leading-[38px]",
        b2: "text-xl leading-[30px]",
        b3: "text-base",
        b4: "text-sm leading-[21px]"
      }
    },
    defaultVariants: {
      variant: "b1"
    }
  }
);
var Paragraph = ({
  children,
  className,
  variant,
  ...props
}) => {
  return /* @__PURE__ */ React7.createElement("p", { className: cn(paragraphVariants({ variant, className })), ...props }, children);
};
var Paragraph_default = Paragraph;

// src/components/Card.tsx
function Card({ children, className }) {
  return /* @__PURE__ */ React8.createElement("article", { className }, children);
}
var CardIcon = ({ children, className }) => /* @__PURE__ */ React8.createElement("span", { className }, children);
var CardHeader = ({ children, className }) => /* @__PURE__ */ React8.createElement("div", { className }, children);
var CardBg = ({
  children,
  className,
  src,
  alt = "Card",
  width = 300,
  height = 200
}) => /* @__PURE__ */ React8.createElement("div", { className: cn("relative", className) }, src && /* @__PURE__ */ React8.createElement(
  Image,
  {
    src,
    alt,
    width,
    height,
    layout: "responsive"
  }
), /* @__PURE__ */ React8.createElement("div", { className: "absolute inset-0" }, children));
var CardTitle = ({ children, className }) => /* @__PURE__ */ React8.createElement(Typography_default, { variant: "h4", className }, children);
var CardDescription = ({ children, className }) => /* @__PURE__ */ React8.createElement(Paragraph_default, { variant: "b1", className: cn("text-light", className) }, children);
var CardContent = ({ children, className }) => /* @__PURE__ */ React8.createElement("div", { className: cn("font-karla text-white", className) }, children);
var CardFooter = ({ children, className }) => /* @__PURE__ */ React8.createElement("div", { className: cn("font-karla text-white", className) }, children);

// src/components/Checkbox.tsx
import React9, { forwardRef } from "react";
var Checkbox = forwardRef(
  ({ disabled, checked, className, children, readOnly, square, ...props }, ref) => {
    return /* @__PURE__ */ React9.createElement(
      "div",
      {
        className: cn(
          square ? "rounded-sm" : "rounded-full",
          "group inline-flex relative items-center  border-2 border-transparent hover:border-primary-300",
          disabled && "border-none"
        )
      },
      /* @__PURE__ */ React9.createElement(
        "input",
        {
          type: "checkbox",
          ref,
          ...props,
          disabled,
          readOnly,
          checked,
          className: cn(
            square ? "rounded-sm" : "rounded-full",
            "peer relative h-5 w-5 cursor-pointer appearance-none border-2 border-gray-300 transition-all checked:border-primary-500 hover:border-primary-500 hover:bg-primary-25/25 disabled:opacity-30 disabled:pointer-events-none disabled:border-gray-400",
            className
          )
        }
      ),
      /* @__PURE__ */ React9.createElement(
        "span",
        {
          className: cn(
            "absolute text-primary-600 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100",
            disabled && "text-gray-300"
          )
        },
        /* @__PURE__ */ React9.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-4 h-4",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0.3"
          },
          /* @__PURE__ */ React9.createElement(
            "path",
            {
              fillRule: "evenodd",
              d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
              clipRule: "evenodd"
            }
          )
        )
      ),
      children
    );
  }
);
Checkbox.displayName = "Checkbox";
var Checkbox_default = Checkbox;

// src/components/Chip.tsx
import React10 from "react";
import { cva as cva6 } from "class-variance-authority";
var chipVariants = cva6("", {
  variants: {
    variant: {
      primary: "bg-white text-primary-500 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-700",
      secondary: "bg-primary-500 text-white hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-primary-700",
      default: "bg-gray-200",
      glass: "backdrop-blur-sm text-primary-500"
    },
    size: {
      xs: "text-xs py-1 px-3",
      sm: "text-sm py-1 px-3",
      md: "text-base px-4 py-2",
      lg: "text-lg px-6 py-3"
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
var Chip = ({
  children,
  className,
  variant,
  startIcon,
  endIcon,
  size,
  ...props
}) => {
  return /* @__PURE__ */ React10.createElement(
    "div",
    {
      className: cn(
        "rounded-radius-xl bg-gradient-to-r w-fit",
        {
          solid: "from-primary-200 to-primary-500 p-[1px]",
          primary: "from-primary-200 to-primary-500 p-[1px]",
          secondary: "from-primary-200 to-primary-500 p-[1px]",
          glass: "border border-primary-500 bg-white/20",
          default: "bg-gray-200 border border-gray-200 p-[1px]"
        }[variant || "primary"]
      )
    },
    /* @__PURE__ */ React10.createElement(
      "div",
      {
        ...props,
        className: cn(
          "flex items-center justify-center gap-2 text-center font-semibold",
          "rounded-radius-xl",
          chipVariants({ variant, size }),
          className
        )
      },
      startIcon,
      children,
      endIcon
    )
  );
};
var Chip_default = Chip;

// src/components/Drawer.tsx
import React11, { useCallback, useEffect as useEffect2 } from "react";
import { RiCloseLine } from "react-icons/ri";
var Drawer = ({
  isOpen,
  setIsOpen,
  children,
  position = "right",
  width = "w-80",
  height = "h-64",
  className,
  showCloseButton = true,
  closeOnOutsideClick = true
}) => {
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);
  useEffect2(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);
  useEffect2(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);
  return /* @__PURE__ */ React11.createElement("div", null, /* @__PURE__ */ React11.createElement(
    "div",
    {
      className: cn(
        "fixed inset-0 bg-black/50 dark:bg-white/50 transition-opacity duration-300 z-[10000000000000000]",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      ),
      onClick: () => closeOnOutsideClick && handleClose()
    }
  ), /* @__PURE__ */ React11.createElement(
    "div",
    {
      className: cn(
        "fixed bg-light dark:bg-dark  shadow-xl p-4 transition-transform duration-300 z-[100000000000000000]",
        position === "right" && `top-0 right-0 ${width} h-full`,
        position === "left" && `top-0 left-0 ${width} h-full`,
        position === "top" && `top-0 left-0 w-full ${height}`,
        position === "bottom" && `bottom-0 left-0 w-full ${height}`,
        !isOpen && (position === "right" ? "translate-x-full" : position === "left" ? "-translate-x-full" : position === "top" ? "-translate-y-full" : "translate-y-full"),
        isOpen && "translate-x-0 translate-y-0",
        className
      ),
      onClick: (e) => e.stopPropagation()
    },
    showCloseButton && /* @__PURE__ */ React11.createElement(
      Button_default,
      {
        size: "xs",
        variant: "tertiary",
        onClick: handleClose,
        startIcon: /* @__PURE__ */ React11.createElement(RiCloseLine, { size: 20 }),
        "aria-label": "Close drawer",
        className: "absolute border-none p-1 transition-colors top-3 right-4"
      }
    ),
    /* @__PURE__ */ React11.createElement("div", { className: "overflow-y-auto h-full" }, children)
  ));
};
var Drawer_default = Drawer;

// src/components/Dropdown.tsx
import React14, {
  useEffect as useEffect3,
  useState as useState2,
  useMemo,
  useCallback as useCallback2,
  forwardRef as forwardRef3,
  useRef,
  useImperativeHandle
} from "react";
import { HiChevronDown, HiOutlineSearch } from "react-icons/hi";

// src/components/Input.tsx
import { cva as cva7 } from "class-variance-authority";
import React12, { forwardRef as forwardRef2 } from "react";
var inputVariants = cva7(
  "flex items-center text-sm gap-2 py-2 px-4 rounded-radius-md border font-karla has-[:disabled]:opacity-30 has-[:disabled]:select-none has-[:disabled]:pointer-events-none",
  {
    variants: {
      variant: {
        default: "dark:text-gray-500 dark:bg-gray-900 dark:border-gray-800 dark:hover:text-light dark:hover:bg-gray-800 dark:hover:border-gray-700 dark:focus-within:bg-gray-100 dark:focus-within:border-gray-800 dark:focus-within:hover:bg-gray-700 dark:focus-within:text-dark dark:has-[:disabled]:bg-gray-700 bg-gray-100 border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-500 hover:bg-gray-300 focus-within:bg-gray-50 focus-within:border-gray-400 focus-within:text-dark focus-within:hover:text-dark focus-within:hover:border-primary-100 focus-within:hover:bg-primary-50 has-[:disabled]:bg-gray-25 has-[:disabled]:border-gray-400",
        glass: "backdrop-blur-[3.5px] bg-light/10 dark:bg-dark/20 dark:border-gray-800 border-gray-200/50 text-light"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Input = forwardRef2(
  ({ startIcon, endIcon, className, variant, type, disabled, ...props }, ref) => {
    return /* @__PURE__ */ React12.createElement("div", { className: cn(inputVariants({ variant, className })) }, startIcon, /* @__PURE__ */ React12.createElement(
      "input",
      {
        ...props,
        ref,
        disabled,
        type,
        className: "w-full bg-none bg-transparent outline-none"
      }
    ), endIcon);
  }
);
Input.displayName = "Input";
var Input_default = Input;

// src/components/Label.tsx
import { cva as cva8 } from "class-variance-authority";
import React13 from "react";
var labelVariants = cva8("font-medium text-dark dark:text-light", {
  variants: {
    size: {
      sm: "text-xs",
      md: "text-sm",
      lg: "text-base"
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var Label = ({
  children,
  htmlFor,
  size,
  required,
  disabled,
  className,
  ...props
}) => {
  return /* @__PURE__ */ React13.createElement(
    "label",
    {
      htmlFor,
      className: cn(
        "cursor-pointer",
        labelVariants({ className, size }),
        disabled === true ? "opacity-30 select-none" : "opacity-100"
      ),
      ...props
    },
    children,
    required && /* @__PURE__ */ React13.createElement("span", { className: "text-error" }, "*")
  );
};
var Label_default = Label;

// src/components/Dropdown.tsx
import { useId } from "react";
var defaultRenderItem = (option, state) => {
  return /* @__PURE__ */ React14.createElement(
    MenuItem,
    {
      label: option.label,
      value: option.value,
      selected: state.selected,
      disabled: state.disabled
    }
  );
};
var Dropdown = forwardRef3(
  ({
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
    height = "200px"
  }, ref) => {
    const reactId = useId();
    const id = controlledId ?? `dropdown-${reactId}`;
    const [searchQuery, setSearchQuery] = useState2("");
    const [filteredOptions, setFilteredOptions] = useState2(
      options || []
    );
    const [dropdownMenu, setDropdownMenu] = useState2(false);
    const dropdownRef = useRef(null);
    useImperativeHandle(ref, () => dropdownRef.current);
    useEffect3(() => {
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
    const handleSearchChange = useCallback2(
      (e) => {
        setSearchQuery(e.target.value);
      },
      []
    );
    const toggleOption = useCallback2(
      (option) => {
        if (multiple && setSelected) {
          setSelected(
            (prevSelected) => prevSelected.some((item) => item.value === option.value) ? prevSelected.filter((item) => item.value !== option.value) : [...prevSelected, option]
          );
        } else if (setSelected) {
          setSelected([option]);
          setDropdownMenu(false);
        }
      },
      [multiple, setSelected]
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
    useEffect3(() => {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownMenu(false);
      }
    };
    return /* @__PURE__ */ React14.createElement(
      "div",
      {
        id,
        ref: dropdownRef,
        className: cn(
          "relative rounded-lg shadow-sm font-karla",
          "bg-white dark:bg-gray-900",
          "text-gray-900 dark:text-gray-100",
          !width && "w-full",
          disabled && "cursor-not-allowed opacity-50"
        ),
        style: {
          width
        }
      },
      /* @__PURE__ */ React14.createElement(
        "button",
        {
          type: "button",
          "aria-haspopup": "listbox",
          "aria-expanded": dropdownMenu,
          "aria-labelledby": `${id}-label`,
          disabled,
          onClick: () => !disabled && setDropdownMenu((prev) => !prev),
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              if (!disabled) {
                setDropdownMenu((prev) => !prev);
              }
            }
          },
          className: cn(
            "w-full flex justify-between items-center rounded-lg px-[14px] py-2 text-sm",
            "border transition-colors",
            "bg-white dark:bg-gray-900",
            "text-gray-900 dark:text-gray-100",
            "hover:bg-gray-50 dark:hover:bg-gray-800",
            dropdownMenu ? "border-primary-600" : "border-gray-200 dark:border-gray-700",
            disabled && "cursor-not-allowed opacity-50"
          )
        },
        /* @__PURE__ */ React14.createElement("section", { className: "flex items-center gap-2 text-ellipsis overflow-hidden" }, icon && /* @__PURE__ */ React14.createElement("span", { "aria-hidden": "true" }, icon), /* @__PURE__ */ React14.createElement("span", { id: `${id}-label`, className: "line-clamp-1 w-full" }, multiple ? (selected?.length ?? 0) > 0 ? `${selected?.length} Selected` : dropdownText : selected?.[0]?.label ? selected?.[0]?.label : dropdownText)),
        /* @__PURE__ */ React14.createElement(HiChevronDown, { "aria-hidden": "true", size: 18 })
      ),
      /* @__PURE__ */ React14.createElement(
        "ul",
        {
          role: "listbox",
          "aria-multiselectable": multiple,
          "aria-labelledby": `${id}-label`,
          className: cn(
            "absolute z-[1000] w-full mt-1 rounded shadow-md overflow-hidden transition-all",
            "bg-white dark:bg-gray-900",
            "text-gray-900 dark:text-gray-100",
            dropdownMenu ? "opacity-100 max-h-[360px]" : "opacity-0 max-h-0",
            position === "top" ? "top-10" : "bottom-10",
            dropdownMenu ? "border border-primary-600" : "border border-gray-200 dark:border-gray-700"
          )
        },
        search && /* @__PURE__ */ React14.createElement(
          Input_default,
          {
            id: `${id}-search`,
            type: "text",
            placeholder: "Search...",
            "aria-label": "Search options",
            value: searchQuery,
            onChange: handleSearchChange,
            className: "rounded-none text-gray-800 text-sm bg-white w-full h-[35px] pl-3 border-none",
            endIcon: /* @__PURE__ */ React14.createElement(HiOutlineSearch, { size: 18 })
          }
        ),
        multiple && /* @__PURE__ */ React14.createElement("section", { className: "py-[6px] px-[14px] flex justify-between items-center" }, /* @__PURE__ */ React14.createElement(
          "button",
          {
            type: "button",
            "aria-label": "Select all",
            onClick: handleSelectAll,
            className: "text-sm  hover:text-primary-700 text-primary-600 dark:text-primary-300 cursor-pointer"
          },
          "Select all"
        ), /* @__PURE__ */ React14.createElement(
          "button",
          {
            "aria-label": "Reset",
            type: "button",
            className: "text-sm text-warning-500 hover:text-warning-600",
            onClick: handleReset
          },
          "Reset"
        )),
        /* @__PURE__ */ React14.createElement(
          "section",
          {
            style: { maxHeight: height },
            className: "z-[1000] transition-all duration-75 delay-100 ease-in-out overflow-y-scroll"
          },
          options ? memoizedFilteredOptions?.map((option, i) => /* @__PURE__ */ React14.createElement(React14.Fragment, { key: `${option.value}-${i}` }, multiple ? /* @__PURE__ */ React14.createElement(
            Label_default,
            {
              className: cn(
                "flex flex-col cursor-pointer border-l-4 px-[14px] py-[6px]",
                "bg-white dark:bg-gray-900",
                "hover:bg-gray-50 dark:hover:bg-gray-800",
                "border-transparent",
                "has-[:checked]:bg-primary-50 dark:has-[:checked]:bg-gray-800",
                "has-[:checked]:border-primary-600",
                option.disabledOption && "opacity-50 cursor-not-allowed pointer-events-none"
              ),
              htmlFor: `${id}-checkbox-${option.value}`,
              key: i
            },
            /* @__PURE__ */ React14.createElement("section", { className: "flex items-center justify-between gap-2 w-full" }, /* @__PURE__ */ React14.createElement("div", { className: "flex gap-2" }, /* @__PURE__ */ React14.createElement(
              Checkbox_default,
              {
                square: true,
                id: `${id}-checkbox-${option.value}`,
                checked: selected?.some(
                  (item) => item.value === option.value
                ) ?? false,
                onChange: () => toggleOption(option),
                disabled: !!option.disabledOption
              }
            ), /* @__PURE__ */ React14.createElement("div", { className: "flex items-center gap-1" }, /* @__PURE__ */ React14.createElement(
              "div",
              {
                style: {
                  color: option?.disabledOption ? "#D1D5DB" : option.labelTextColor
                },
                className: cn(
                  "break-words",
                  option?.disabledOption && "text-gray-300"
                )
              },
              renderItem(option, {
                selected: selected?.some(
                  (item) => item.value === option.value
                ) ?? false,
                disabled: !!option.disabledOption
              })
            ))), /* @__PURE__ */ React14.createElement("span", { className: "text-gray-500" }, option?.info)),
            /* @__PURE__ */ React14.createElement("span", { className: "pt-[2px] text-sm text-gray-500" }, option?.addInfo)
          ) : /* @__PURE__ */ React14.createElement(
            Label_default,
            {
              key: i,
              htmlFor: `${id}-checkbox-${option.value}`,
              className: cn(
                "flex justify-between items-center px-[14px] py-[6px] border-l-4 cursor-pointer",
                "bg-white dark:bg-gray-900",
                "hover:bg-gray-50 dark:hover:bg-gray-800",
                "border-transparent",
                selected?.[0]?.value === option.value && "bg-primary-50 dark:bg-gray-800 border-primary-600",
                option.disabledOption && "opacity-50 cursor-not-allowed pointer-events-none"
              ),
              onClick: () => !option?.disabledOption && toggleOption(option)
            },
            /* @__PURE__ */ React14.createElement(
              MenuItem,
              {
                label: option.label,
                selected: selected?.[0]?.value === option.value,
                disabled: !!option.disabledOption
              }
            ),
            /* @__PURE__ */ React14.createElement("span", { className: "text-gray-500" }, info)
          ))) : children
        ),
        footerAction && /* @__PURE__ */ React14.createElement("div", { className: "py-2 mt-1 px-2 border-t" }, footerAction),
        dropdownFooter && /* @__PURE__ */ React14.createElement(
          DropdownFooter,
          {
            setDropdownMenu,
            onApply
          }
        )
      )
    );
  }
);
var MenuItem = ({
  label,
  selected,
  disabled,
  children
}) => {
  return /* @__PURE__ */ React14.createElement(
    "p",
    {
      className: cn(
        "break-all transition-colors",
        "text-gray-900 dark:text-gray-100",
        selected && "text-gray-900 dark:text-white font-medium",
        disabled && "text-gray-300 dark:text-gray-500"
      )
    },
    label ?? children
  );
};
var DropdownFooter = ({
  onApply,
  setDropdownMenu
}) => {
  return /* @__PURE__ */ React14.createElement("div", { className: "flex justify-end border-t border-gray-200 dark:border-gray-700 px-[14px] py-[8px] text-sm" }, /* @__PURE__ */ React14.createElement(
    "button",
    {
      type: "button",
      className: "text-primary-600 dark:text-primary-300 hover:text-primary-700",
      onClick: () => {
        if (onApply) {
          onApply();
        }
        if (setDropdownMenu) {
          setDropdownMenu(false);
        }
      }
    },
    "Apply"
  ));
};
Dropdown.displayName = "Dropdown";
var Dropdown_default = Dropdown;

// src/components/FillButton.tsx
import React15 from "react";
var FillButton = ({
  label,
  icon: Icon,
  fillColor = "bg-white",
  textHoverColor = "group-hover:text-primary-900",
  className,
  ...props
}) => {
  return /* @__PURE__ */ React15.createElement(
    "button",
    {
      ...props,
      className: cn(
        "relative overflow-hidden group px-6 py-4 rounded-full flex text-dark dark:text-light items-center gap-2 w-full justify-between border dark:border-gray-400 transition-colors",
        className
      )
    },
    /* @__PURE__ */ React15.createElement(
      "span",
      {
        className: cn(
          "absolute inset-0 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100",
          fillColor
        )
      }
    ),
    /* @__PURE__ */ React15.createElement("span", { className: cn("relative z-10 transition-colors", textHoverColor) }, label),
    Icon && /* @__PURE__ */ React15.createElement(
      Icon,
      {
        size: 18,
        className: cn("relative z-10 transition-colors", textHoverColor)
      }
    )
  );
};
var FillButton_default = FillButton;

// src/components/Footer.tsx
import React16 from "react";
import Link from "next/link";
function Footer({
  children,
  className,
  footerBottom
}) {
  return /* @__PURE__ */ React16.createElement(
    "footer",
    {
      className: cn(
        "bg-gradient-to-b from-gray-25 to-primary-100 dark:from-primary-900 dark:to-dark",
        className
      )
    },
    children,
    footerBottom && /* @__PURE__ */ React16.createElement("section", { className: "border-t border-primary-500 dark:border-primary-800 text-center py-spacing-md" }, footerBottom)
  );
}
var FooterHeader = ({ children, className }) => {
  return /* @__PURE__ */ React16.createElement(
    "div",
    {
      className: cn(
        "md:w-[30%] space-y-4 flex flex-col items-center lg:items-start",
        className
      )
    },
    children
  );
};
var FooterContent = ({ children, className }) => {
  return /* @__PURE__ */ React16.createElement(
    "section",
    {
      className: cn(
        "max-w-6xl mx-auto flex md:flex-row flex-col items-center md:items-start justify-between gap-14 px-4 md:px-20 py-20",
        className
      )
    },
    children
  );
};
var FooterList = ({ footerItems, target }) => {
  return /* @__PURE__ */ React16.createElement(
    "div",
    {
      className: cn(
        "grid place-items-start gap-8 text-center md:text-left",
        footerItems.length === 2 && "md:grid-cols-2",
        (footerItems.length > 3 || footerItems.length === 3) && "lg:grid-cols-3 md:grid-cols-2"
      )
    },
    footerItems?.map((data, i) => /* @__PURE__ */ React16.createElement("div", { key: i, className: "space-y-3 w-full" }, /* @__PURE__ */ React16.createElement(Paragraph_default, { variant: "b3", className: "text-primary-600" }, data?.label), /* @__PURE__ */ React16.createElement("ul", { className: "space-y-2 list-none" }, data?.content?.map((data2, i2) => /* @__PURE__ */ React16.createElement("li", { key: i2 }, /* @__PURE__ */ React16.createElement(Link, { href: data2?.link, target }, /* @__PURE__ */ React16.createElement(
      Paragraph_default,
      {
        variant: "b4",
        className: "dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-600 font-semibold text-gray-900"
      },
      data2?.text
    )))))))
  );
};
var FooterIcons = ({ icons }) => {
  return /* @__PURE__ */ React16.createElement("div", { className: "flex flex-wrap justify-center items-center gap-5 text-primary-700 dark:text-primary-200" }, icons.map((icon, index) => /* @__PURE__ */ React16.createElement(
    Link,
    {
      href: icon.link,
      key: index,
      target: "_blank",
      className: "hover:bg-primary-100 dark:hover:bg-primary-800 p-1 rounded-radius-sm"
    },
    icon.icon
  )));
};

// src/components/ImageCard.tsx
import React17 from "react";
var ImageCard = ({
  cardTitle,
  cardDesc,
  cardImg,
  children,
  className = ""
}) => {
  const backgroundImage = `url('${cardImg}')`;
  return /* @__PURE__ */ React17.createElement(
    "div",
    {
      className: cn(
        "transition-all duration-300 ease-in-out hover:ring-1 hover:ring-[#4285F4] relative rounded-radius-xl overflow-hidden block z-10 bg-cover bg-no-repeat bg-center",
        className
      ),
      style: {
        backgroundImage
      }
    },
    /* @__PURE__ */ React17.createElement("div", { className: "absolute inset-0 z-[-5] transition-all duration-300 ease-in-out bg-gradient-to-b from-transparent via-black/50 to-black" }),
    /* @__PURE__ */ React17.createElement("section", { className: "p-[32px] w-full h-full flex flex-col justify-end font-karla hover:bg-gradient-to-b hover:from-black/60 hover:via-black/70 hover:to-[#070707]" }, /* @__PURE__ */ React17.createElement(CardTitle, { className: "text-[24px] font-bold text-white mt-4 mb-6" }, cardTitle), /* @__PURE__ */ React17.createElement(CardDescription, { className: "text-[20px] leading-[25px] text-white" }, cardDesc), /* @__PURE__ */ React17.createElement("div", null, children))
  );
};
var ImageCard_default = ImageCard;

// src/components/ListItem.tsx
import Link2 from "next/link";
import React18 from "react";
import { usePathname } from "next/navigation";
var ListItem = React18.forwardRef(
  ({ className, title, href, onClick, as = "link", variant = "solid", icon }, ref) => {
    const pathname = usePathname();
    const isActive = as === "link" && href === pathname;
    const variantClasses = variant === "solid" ? "rounded-radius-lg hover:bg-primary-50 text-dark group border border-transparent hover:border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:text-white leading-none no-underline outline-none transition-colors" : variant === "glass" ? "rounded-radius-lg group border border-transparent hover:border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:text-white leading-none no-underline outline-none transition-colors" : "";
    if (as === "button") {
      return /* @__PURE__ */ React18.createElement(
        "button",
        {
          className: cn(
            "px-4 py-[8px] group font-karla w-full text-left flex items-center gap-2",
            variantClasses,
            className
          ),
          onClick,
          ref
        },
        /* @__PURE__ */ React18.createElement(
          Typography_default,
          {
            variant: "h6",
            className: cn("font-karla group-hover:dark:text-dark", className)
          },
          title
        ),
        icon && /* @__PURE__ */ React18.createElement("span", { className: "text-dark dark:text-white" }, icon)
      );
    }
    return /* @__PURE__ */ React18.createElement(
      Link2,
      {
        href: href ?? "",
        passHref: true,
        className: cn(
          "px-4 py-[8px] font-karla w-full flex items-center gap-2 group",
          isActive ? "bg-primary-400 text-white border border-primary-200" : variantClasses,
          className
        ),
        ref
      },
      /* @__PURE__ */ React18.createElement(
        Typography_default,
        {
          variant: "h6",
          className: cn("font-karla group-hover:dark:text-dark", className)
        },
        title
      ),
      icon && /* @__PURE__ */ React18.createElement(
        Caption_default,
        {
          variant: "md",
          className: "text-dark dark:text-white group-hover:dark:text-dark"
        },
        icon
      )
    );
  }
);
ListItem.displayName = "ListItem";
var ListItem_default = ListItem;

// src/components/ListPagination.tsx
import React19, { useState as useState3 } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
var ListPagination = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
  className
}) => {
  const totalPages = Math.ceil(count / rowsPerPage);
  const [expanded, setExpanded] = useState3(false);
  const renderPages = () => {
    if (totalPages <= 6 || expanded) {
      return [...Array(totalPages)].map((_, i) => /* @__PURE__ */ React19.createElement(PageBtn, { key: i, i, page, onPageChange }));
    }
    const start = [0, 1];
    const mid = [page - 1, page, page + 1].filter(
      (i) => i > 1 && i < totalPages - 2
    );
    const end = [totalPages - 2, totalPages - 1];
    const range = Array.from(/* @__PURE__ */ new Set([...start, ...mid, ...end]));
    return range.map(
      (i, idx) => typeof range[idx - 1] === "number" && i - range[idx - 1] > 1 ? /* @__PURE__ */ React19.createElement(
        Button_default,
        {
          key: `dots-${i}`,
          size: "sm",
          variant: "secondary",
          onClick: () => setExpanded(true)
        },
        "..."
      ) : /* @__PURE__ */ React19.createElement(PageBtn, { key: i, i, page, onPageChange })
    );
  };
  return /* @__PURE__ */ React19.createElement("section", { className: cn("flex items-center gap-1", className) }, /* @__PURE__ */ React19.createElement(
    NavBtn,
    {
      icon: /* @__PURE__ */ React19.createElement(RiArrowLeftSLine, { size: 28 }),
      onClick: () => onPageChange(page - 1),
      disabled: page === 0
    }
  ), /* @__PURE__ */ React19.createElement("div", { className: "max-w-[90vw] w-max overflow-auto flex items-center gap-2 p-2" }, renderPages()), /* @__PURE__ */ React19.createElement(
    NavBtn,
    {
      icon: /* @__PURE__ */ React19.createElement(RiArrowRightSLine, { size: 28 }),
      onClick: () => onPageChange(page + 1),
      disabled: page === totalPages - 1
    }
  ));
};
var PageBtn = ({
  i,
  page,
  onPageChange
}) => /* @__PURE__ */ React19.createElement(
  Button_default,
  {
    size: "sm",
    variant: "secondary",
    className: cn(
      // "dark:bg-transparent dark:border dark:text-gray-300 dark:border-gray-400",
      i === page && "bg-primary-50 shadow-[0px_0px_0px_2px] shadow-primary-700 hover:shadow-[0px_0px_0px_2px] hover:shadow-primary-700 dark:shadow-primary-200 dark:bg-primary-300"
    ),
    onClick: () => onPageChange(i)
  },
  i + 1
);
var NavBtn = ({
  icon,
  onClick,
  disabled
}) => /* @__PURE__ */ React19.createElement(
  Button_default,
  {
    size: "sm",
    variant: "primary-light",
    startIcon: icon,
    onClick,
    disabled,
    className: "border border-primary-100 px-1.5"
  }
);
var ListPagination_default = ListPagination;

// src/components/Loading.tsx
import React20 from "react";
var Loading = ({ width, height, loaderColor, variant }) => {
  return /* @__PURE__ */ React20.createElement(
    "div",
    {
      className: cn(
        "animate-spin-slow border-primary-600 border-t-gray-200/50 rounded-full",
        variant === "light" ? "border-2" : "border-4"
      ),
      style: {
        width,
        height,
        borderColor: loaderColor,
        borderTopColor: "rgb(234 236 240 / 0.5)"
      }
    }
  );
};
var Loading_default = Loading;

// src/components/Modal.tsx
import React21, { useEffect as useEffect4 } from "react";
import { RiCloseLine as RiCloseLine2 } from "react-icons/ri";
function Modal({
  children,
  showModal,
  setShowModal,
  closeModal = true,
  closeOnOutsideClick = true,
  className = "",
  width = "50%"
}) {
  useEffect4(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showModal]);
  const handleClickOutside = (event) => {
    if (event.target === event.currentTarget && closeOnOutsideClick) {
      setShowModal(false);
    }
  };
  return /* @__PURE__ */ React21.createElement(React21.Fragment, null, showModal && /* @__PURE__ */ React21.createElement(
    "div",
    {
      onClick: handleClickOutside,
      className: "w-full h-full bg-backdrop dark:bg-white/25 bg-blend-overlay fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center z-[1000000] overflow-hidden"
    },
    /* @__PURE__ */ React21.createElement(
      "div",
      {
        style: { width },
        className: cn(
          "relative bg-white dark:bg-dark shadow-boxShadow rounded-xl p-[18px] transition-all duration-150 fade-in-grow mx-4",
          className
        )
      },
      /* @__PURE__ */ React21.createElement("div", null, children),
      closeModal && /* @__PURE__ */ React21.createElement(
        "div",
        {
          className: "absolute top-4 ml-5 right-5 z-10 shadow-backdrop dark:text-white dark:hover:bg-gray-700 rounded-md cursor-pointer hover:bg-gray-100",
          onClick: () => setShowModal(false)
        },
        /* @__PURE__ */ React21.createElement(RiCloseLine2, { size: 24 })
      )
    )
  ));
}

// src/components/NestedDropdown.tsx
import { FiChevronDown as FiChevronDown2, FiChevronRight } from "react-icons/fi";
import { useState as useState4, useRef as useRef2, useEffect as useEffect5 } from "react";
var NestedDropdown = ({
  data,
  onSelect,
  placeholder = "Select Industry",
  getChildren = (item) => item.children
}) => {
  const [isOpen, setIsOpen] = useState4(false);
  const [selectedItem, setSelectedItem] = useState4(null);
  const [activePath, setActivePath] = useState4([]);
  const dropdownRef = useRef2(null);
  useEffect5(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setActivePath([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleItemClick = (item, path) => {
    setSelectedItem(item);
    setIsOpen(false);
    setActivePath([]);
    onSelect?.(item, path);
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setActivePath([]);
    }
  };
  const handleCategoryClick = (item, level, event) => {
    const children = getChildren(item);
    const currentPath = activePath.slice(0, level);
    currentPath[level] = item;
    const isDoubleClick = event?.detail === 2;
    if (children && children.length > 0 && !isDoubleClick) {
      setActivePath(currentPath);
    } else {
      handleItemClick(item, [...currentPath]);
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "relative w-full max-w-[200px]", ref: dropdownRef }, /* @__PURE__ */ React.createElement(
    "button",
    {
      type: "button",
      className: "w-full flex justify-between items-center py-3 px-4 text-sm bg-white border border-gray-300 rounded-lg shadow-sm text-left focus:outline-none focus:ring-1 focus:ring-primary-600 focus:border-primary-500 hover:border-gray-400 transition-colors duration-200",
      onClick: toggleDropdown
    },
    /* @__PURE__ */ React.createElement(
      "span",
      {
        className: `whitespace-nowrap text-ellipsis overflow-hidden w-[180px] ${selectedItem ? "text-gray-900 font-medium" : "text-gray-500"}`
      },
      selectedItem ? selectedItem.name : placeholder
    ),
    /* @__PURE__ */ React.createElement(
      FiChevronDown2,
      {
        className: `w-5 h-5 text-gray-400 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`
      }
    )
  ), isOpen && /* @__PURE__ */ React.createElement("div", { className: "absolute z-50 w-[200px] mt-1 bg-white rounded-lg shadow-xl max-h-96" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col h-full" }, /* @__PURE__ */ React.createElement("div", { className: "border-b border-gray-200" }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      placeholder: "Search",
      className: "w-full pl-3 pr-4 py-2 focus:outline-none focus:border-b focus:border-b-primary-600 text-sm"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "absolute right-2 top-1/2 transform -translate-y-1/2" }, /* @__PURE__ */ React.createElement("span", { className: "text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded" }, "Q")))), /* @__PURE__ */ React.createElement("div", { className: "flex-1 overflow-y-auto bg-white max-h-[200px]" }, /* @__PURE__ */ React.createElement("div", { className: "" }, data?.map((item) => {
    const children = getChildren(item);
    const hasChildren = children && children.length > 0;
    const isActive = activePath[0]?._id === item._id;
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: item._id,
        className: `
                        group flex items-center justify-between py-2 px-3 border border-transparent cursor-pointer
                        transition-colors duration-200 relative
                        ${isActive ? "bg-primary-50 text-primary-700 border border-primary-200" : "hover:bg-gray-50"}
                      `,
        onClick: (e) => handleCategoryClick(item, 0, e)
      },
      /* @__PURE__ */ React.createElement("span", { className: "text-sm text-gray-800" }, item.name),
      hasChildren && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FiChevronRight, { className: "w-4 h-4 text-gray-400" }))
    );
  })))), activePath?.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "absolute left-full top-[36px] flex" }, activePath?.map((pathItem, level) => {
    const children = getChildren(pathItem);
    return /* @__PURE__ */ React.createElement(
      "div",
      {
        key: pathItem._id,
        className: "w-[200px] bg-white border border-gray-200 shadow-xl rounded-b-lg max-h-[200px] overflow-y-auto"
      },
      /* @__PURE__ */ React.createElement("div", { className: "" }, /* @__PURE__ */ React.createElement("div", { className: "" }, children?.map((child) => {
        const childChildren = getChildren(child);
        const hasChildren = childChildren && childChildren.length > 0;
        const isActive = activePath[level + 1]?._id === child._id;
        return /* @__PURE__ */ React.createElement(
          "div",
          {
            key: child._id,
            className: `
                                group flex items-center justify-between py-2 px-3 border border-transparent cursor-pointer
                                transition-colors duration-200 relative
                                ${isActive ? "bg-primary-50 text-primary-700 border border-primary-200" : "hover:bg-gray-50"}
                              `,
            onClick: (e) => handleCategoryClick(child, level + 1, e)
          },
          /* @__PURE__ */ React.createElement("span", { className: "text-sm text-gray-800" }, child.name),
          hasChildren && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(FiChevronRight, { className: "w-4 h-4 text-gray-400" }), /* @__PURE__ */ React.createElement("div", { className: "absolute opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gray-800 text-white text-xs py-1 px-2 rounded bottom-full mb-1 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-10" }, "Double-click to select", /* @__PURE__ */ React.createElement("div", { className: "absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800" })))
        );
      })))
    );
  }))));
};
var NestedDropdown_default = NestedDropdown;

// src/components/OTPInput.tsx
import React22, { useRef as useRef3, useState as useState5 } from "react";
var OTPInput = ({
  length,
  onChange,
  type = "text"
}) => {
  const [otpValues, setOtpValues] = useState5(Array(length).fill(""));
  const inputsRef = useRef3([]);
  const handleChange = (e, idx) => {
    let value = e.target.value;
    if (type === "number") value = value.replace(/\D/g, "");
    if (!value) return;
    const newOtp = [...otpValues];
    newOtp[idx] = value[0];
    setOtpValues(newOtp);
    onChange(newOtp.join(""));
    if (idx < length - 1) inputsRef.current[idx + 1]?.focus();
  };
  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      if (otpValues[idx]) {
        const newOtp = [...otpValues];
        newOtp[idx] = "";
        setOtpValues(newOtp);
        onChange(newOtp.join(""));
      } else if (idx > 0) {
        inputsRef.current[idx - 1]?.focus();
      }
    }
  };
  const handlePaste = (e) => {
    e.preventDefault();
    let pasteData = e.clipboardData.getData("Text");
    if (type === "number") pasteData = pasteData.replace(/\D/g, "");
    const newOtp = pasteData.split("").concat(Array(length).fill("")).slice(0, length);
    setOtpValues(newOtp);
    onChange(newOtp.join(""));
    inputsRef.current[Math.min(pasteData.length, length - 1)]?.focus();
  };
  return /* @__PURE__ */ React22.createElement("div", { className: "flex items-center gap-2" }, Array.from({ length }).map((_, idx) => /* @__PURE__ */ React22.createElement(
    Input_default,
    {
      key: idx,
      type,
      inputMode: type === "number" ? "numeric" : "text",
      maxLength: 1,
      value: otpValues[idx],
      onChange: (e) => handleChange(e, idx),
      onKeyDown: (e) => handleKeyDown(e, idx),
      onPaste: handlePaste,
      ref: (el) => {
        inputsRef.current[idx] = el ?? null;
      },
      className: "w-[40px] p-3.5"
    }
  )));
};
var OTPInput_default = OTPInput;

// src/components/Popover.tsx
import React23, { useEffect as useEffect6, useRef as useRef4, forwardRef as forwardRef4 } from "react";
var Popover = forwardRef4(
  ({
    isOpen,
    setIsOpen,
    trigger,
    children,
    className,
    postion = "bottom-right"
  }, ref) => {
    const triggerRef = useRef4(null);
    const contentRef = useRef4(null);
    useEffect6(() => {
      const handleClickOutside = (event) => {
        if (!triggerRef.current?.contains(event.target) && !contentRef.current?.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setIsOpen]);
    return /* @__PURE__ */ React23.createElement("div", { className: "relative w-max", ref }, /* @__PURE__ */ React23.createElement(
      "div",
      {
        className: "cursor-pointer",
        ref: triggerRef,
        onClick: () => setIsOpen(!isOpen)
      },
      trigger
    ), isOpen && /* @__PURE__ */ React23.createElement(
      "div",
      {
        ref: contentRef,
        className: cn(
          "absolute z-10 bg-white dark:bg-dark dark:text-light border border-primary-200 dark:border-primary-700 dark:shadow-primary-600 shadow-primary-200 rounded-lg shadow-sm min-w-[200px] p-4",
          postion === "bottom-left" && "left-0 top-full mt-3",
          postion === "bottom-right" && "right-0 top-full mt-3",
          postion === "top-left" && "left-0 bottom-full mb-3",
          postion === "top-right" && "right-0 bottom-full mb-3",
          postion === "bottom-center" && "left-1/2 top-full mt-3 -translate-x-1/2",
          postion === "top-center" && "left-1/2 bottom-full mb-3 -translate-x-1/2",
          className
        )
      },
      /* @__PURE__ */ React23.createElement(
        "div",
        {
          className: cn(
            "absolute h-3 w-3 bg-white dark:bg-dark border border-primary-200 dark:border-primary-700 rotate-45",
            postion === "bottom-left" && "-top-1.5 left-4 border-b-0 border-r-0",
            postion === "bottom-right" && "-top-1.5 right-4 border-b-0 border-r-0",
            postion === "top-left" && "-bottom-1.5 left-4 border-t-0 border-l-0",
            postion === "top-right" && "-bottom-1.5 right-4 border-t-0 border-l-0",
            postion === "bottom-center" && "-top-1.5 left-1/2 -translate-x-1/2 border-b-0 border-r-0",
            postion === "top-center" && "-bottom-1.5 left-1/2 -translate-x-1/2 border-t-0 border-l-0"
          )
        }
      ),
      children
    ));
  }
);
Popover.displayName = "Popover";
var Popover_default = Popover;

// src/components/Radio.tsx
import React24, { forwardRef as forwardRef5 } from "react";
import { cva as cva9 } from "class-variance-authority";
var radioVariants = cva9("", {
  variants: {
    size: {
      sm: "h-3 w-3",
      lg: "h-4 w-4"
    }
  },
  defaultVariants: {
    size: "sm"
  }
});
var Radio = forwardRef5(
  ({ size, disabled, checked, className, id, name, ...props }, ref) => {
    return /* @__PURE__ */ React24.createElement("div", { className: "relative inline-flex items-center cursor-pointer" }, /* @__PURE__ */ React24.createElement(
      "input",
      {
        ...props,
        ref,
        id,
        name,
        checked,
        disabled,
        role: "radio",
        "aria-checked": checked,
        type: "radio",
        className: cn(
          "peer relative cursor-pointer appearance-none rounded-full checked:bg-primary-600 border border-gray-300 hover:border-primary-600 hover:bg-primary-50 checked:hover:bg-primary-700 transition-all checked:border-primary-600 disabled:opacity-30 disabled:pointer-events-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2",
          radioVariants({ size, className })
        )
      }
    ), /* @__PURE__ */ React24.createElement(
      "span",
      {
        "aria-hidden": "true",
        className: cn(
          "absolute transition-opacity opacity-0 ease-in-out pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100 h-1.5 w-1.5 bg-white rounded-full duration-300",
          size === "sm" && "h-[4.5px] w-[4.5px]"
        )
      }
    ));
  }
);
Radio.displayName = "Radio";
var Radio_default = Radio;

// src/components/Skeleton.tsx
import React25 from "react";
var Skeleton = ({
  width = "100%",
  height = "100%",
  circle = false,
  animation = "shimmer"
}) => {
  const style = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    borderRadius: circle ? "50%" : void 0,
    display: "block"
  };
  return /* @__PURE__ */ React25.createElement(
    "span",
    {
      className: cn(
        "skeleton rounded-lg",
        circle ? "circle" : "",
        animation === "shimmer" && "skeleton-shimmer",
        animation === "wave" && "skeleton-wave",
        animation === "pulse" && "skeleton-pulse"
      ),
      style
    }
  );
};
var Skeleton_default = Skeleton;

// src/components/Slider.tsx
import React26, { forwardRef as forwardRef6 } from "react";
var Slider = forwardRef6(
  ({ value, min = 0, max = 100, size = "sm", ...props }, ref) => {
    const progress = (value - min) / (max - min) * 100;
    return /* @__PURE__ */ React26.createElement(React26.Fragment, null, /* @__PURE__ */ React26.createElement(
      "input",
      {
        ref,
        type: "range",
        min,
        max,
        value,
        ...props,
        className: cn(
          "slider w-full rounded-full appearance-none bg-gray-300 h-4 cursor-pointer focus:outline-none",
          size === "sm" ? "h-1.5" : "h-4"
        ),
        style: {
          background: `linear-gradient(to right, var(--primary-300) ${progress}%, var(--gray-200) ${progress}%)`
        }
      }
    ));
  }
);
Slider.displayName = "Slider";
var Slider_default = Slider;

// src/components/Spinner.tsx
import React27 from "react";
var colorVars = {
  primary: {
    c1: "var(--primary-500)",
    c2: "var(--primary-200)"
  },
  black: {
    c1: "rgba(0, 0, 0, 1)",
    c2: "rgba(0, 0, 0, 0.5)"
  },
  gray: {
    c1: "var(--gray-500)",
    c2: "var(--gray-300)"
  }
};
var Spinner = ({ size = "md", color = "primary" }) => {
  const sizeClass = cn({
    "w-4 h-4": size === "xs",
    "w-6 h-6": size === "sm",
    "w-10 h-10": size === "md",
    "w-16 h-16": size === "lg"
  });
  const getColorValues = (color2) => {
    if (colorVars[color2]) {
      return colorVars[color2];
    }
    if (color2.startsWith("#")) {
      return {
        c1: color2,
        c2: `${color2}80`
      };
    }
    return colorVars.primary;
  };
  const colorValues = getColorValues(color);
  return /* @__PURE__ */ React27.createElement("div", { className: cn("relative", sizeClass) }, /* @__PURE__ */ React27.createElement(
    "div",
    {
      className: "spinner",
      style: {
        ["--spinner-color-1"]: colorValues.c1,
        ["--spinner-color-2"]: colorValues.c2
      }
    }
  ));
};
var Spinner_default = Spinner;

// src/components/StatsCard.tsx
import React28 from "react";
var StatsCard = ({
  statTitle,
  statDesc,
  className,
  cardIcon
}) => {
  return /* @__PURE__ */ React28.createElement(
    Card,
    {
      className: cn(
        "border border-gray-200 hover:border-primary-500 rounded-radius-xl bg-[#FFFFFFE5] bg-gradient-to-b bg-[#fff] hover:from-primary-300 hover:to-primary-600 dark:from-primary-800 dark:to-primary-700 dark:hover:from-primary-800 dark:hover:to-primary-900 backdrop-blur-sm px-[32px] py-[64px] group",
        className
      )
    },
    /* @__PURE__ */ React28.createElement("span", { className: "group-hover:text-white text-dark dark:text-white" }, cardIcon),
    /* @__PURE__ */ React28.createElement(CardTitle, { className: "group-hover:text-white text-[48px] font-bold text-primary-500 dark:text-white my-4" }, statTitle),
    /* @__PURE__ */ React28.createElement(CardDescription, { className: "group-hover:text-white text-[24px] hover:text-white text-dark leading-[25px]" }, statDesc)
  );
};
var StatsCard_default = StatsCard;

// src/components/Tabs.tsx
import React29 from "react";
var TabsContainer = ({
  children,
  className,
  position = "horizontal"
}) => {
  return /* @__PURE__ */ React29.createElement("div", { className: cn(position === "vertical" ? "flex" : "block", className) }, children);
};
var TabList = ({
  onChange,
  ariaLabel,
  children,
  box = false,
  className,
  position = "horizontal"
}) => {
  const [focusIndex, setFocusIndex] = React29.useState(0);
  const tabRefs = React29.useRef([]);
  const handleKeyDown = (e, index) => {
    const tabCount = React29.Children.count(children);
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
  return /* @__PURE__ */ React29.createElement(
    "div",
    {
      className: cn(
        position === "horizontal" ? "flex items-center" : "flex flex-col items-stretch",
        box ? "rounded-2xl bg-light dark:bg-gray-900 p-2" : position === "horizontal" ? "border-b border-gray-200 dark:border-gray-600" : "border-r border-gray-200 dark:border-gray-600",
        className
      ),
      role: "tablist",
      "aria-label": ariaLabel,
      "aria-orientation": position
    },
    React29.Children.map(children, (child, index) => {
      if (React29.isValidElement(child)) {
        return React29.cloneElement(child, {
          onChange,
          box,
          position,
          onKeyDown: (e) => handleKeyDown(e, index),
          tabIndex: index === focusIndex ? 0 : -1,
          ref: (el) => {
            tabRefs.current[index] = el;
          }
        });
      }
      return null;
    })
  );
};
var Tab = React29.forwardRef(
  ({
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
    position = "horizontal"
  }, ref) => {
    const isSelected = value === selectedTabValue;
    return /* @__PURE__ */ React29.createElement(
      "button",
      {
        ref,
        role: "tab",
        "aria-selected": isSelected,
        "aria-controls": `panel-${value}`,
        id: `tab-${value}`,
        tabIndex,
        onKeyDown,
        onClick: () => onChange(value),
        className: cn(
          "flex items-center gap-2 px-4 py-3 text-base font-medium cursor-pointer",
          // Default variant
          !box && [
            isSelected && position === "horizontal" ? "text-primary-400 border-b-2 border-primary-400" : isSelected && position === "vertical" ? "text-primary-400 border-r-2 border-primary-400" : "border-transparent text-gray-700 dark:text-gray-500"
          ],
          // Hover styles
          position === "horizontal" && !box ? "hover:bg-gray-100 dark:hover:bg-gray-900 hover:rounded-t transition-all duration-200" : "hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-200",
          // Vertical border for unselected
          position === "vertical" && !box && !isSelected ? "border-r-2" : "",
          // Box variant
          box && [
            "transition-all ease-linear duration-200 delay-75 rounded-radius-lg border border-transparent hover:bg-primary-50 dark:hover:bg-primary-900 hover:border-primary-200 dark:hover:border-primary-800 dark:text-light",
            position === "horizontal" ? "flex items-center gap-2" : "",
            isSelected ? "text-light bg-primary-600 dark:bg-primary-800 shadow-[inset_3px_4px_5.3px_0_#0d3374a3] shadow-primary-700 border-primary-200 dark:border-primary-600 hover:bg-primary-600 hover:shadow-[inset_-4px_-3px_4px_0_#94bcff4a]" : ""
          ],
          className
        )
      },
      icon && /* @__PURE__ */ React29.createElement("span", { "aria-hidden": "true" }, icon),
      label,
      content && /* @__PURE__ */ React29.createElement("span", { "aria-hidden": "true" }, content)
    );
  }
);
var TabPanel = ({
  value,
  currentValue,
  children,
  className
}) => {
  return value === currentValue ? /* @__PURE__ */ React29.createElement(
    "div",
    {
      role: "tabpanel",
      id: `panel-${value}`,
      "aria-labelledby": `tab-${value}`,
      tabIndex: 0,
      className: cn("dark:text-light", className)
    },
    children
  ) : null;
};
Tab.displayName = "Tab";
var Tabs_default = TabsContainer;

// src/components/Textarea.tsx
import { cva as cva10 } from "class-variance-authority";
import React30, {
  forwardRef as forwardRef7
} from "react";
var textareaVariants = cva10(
  "flex items-center gap-2 font-karla bg-transparent text-sm outline-none rounded-radius-md border py-2 px-4 disabled:opacity-60 disabled:select-none disabled:pointer-events-none w-full",
  {
    variants: {
      variant: {
        default: "dark:text-gray-500 dark:bg-gray-900 dark:border-gray-800 dark:hover:text-light dark:hover:bg-gray-800 dark:hover:border-gray-700 dark:focus-within:bg-gray-100 dark:focus-within:border-gray-800 dark:focus-within:hover:bg-gray-700 dark:focus-within:text-dark dark:disabled:bg-gray-700 bg-gray-100 border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-500 hover:bg-gray-300 focus-within:bg-gray-50 focus-within:border-gray-400 focus-within:text-dark focus-within:hover:text-dark focus-within:hover:border-primary-100 focus-within:hover:bg-primary-50 disabled:bg-gray-25 disabled:border-gray-400",
        glass: "backdrop-blur-[3.5px] bg-white/10 dark:bg-dark/20 dark:border-gray-800 border-gray-200/50 text-light"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Textarea = forwardRef7(
  ({ className, rows, cols, variant, disabled, children, ...props }, ref) => {
    return /* @__PURE__ */ React30.createElement(
      "textarea",
      {
        ...props,
        ref,
        disabled,
        rows,
        cols,
        className: cn(textareaVariants({ variant, className }))
      },
      children
    );
  }
);
Textarea.displayName = "Textarea";
var Textarea_default = Textarea;

// src/components/Toggle.tsx
import { cva as cva11 } from "class-variance-authority";
import React31, { forwardRef as forwardRef8 } from "react";
var toggleVariants = cva11(
  "rounded-radius-xl bg-gray-300 transition-colors peer-checked:bg-primary-500 peer-active:ring-2 peer-active:ring-primary-300",
  {
    variants: {
      size: {
        sm: "w-8 h-[18px]",
        lg: "w-[52px] h-[27px]"
      }
    },
    defaultVariants: {
      size: "lg"
    }
  }
);
var Toggle = forwardRef8(
  ({ icon, children, disabled, size = "lg", ...props }, ref) => {
    return /* @__PURE__ */ React31.createElement(
      "label",
      {
        className: cn(
          "flex cursor-pointer select-none items-center",
          disabled && "opacity-50 pointer-events-none"
        )
      },
      /* @__PURE__ */ React31.createElement("div", { className: "relative" }, /* @__PURE__ */ React31.createElement(
        "input",
        {
          type: "checkbox",
          disabled,
          ref,
          ...props,
          className: "sr-only peer"
        }
      ), /* @__PURE__ */ React31.createElement("div", { className: cn(toggleVariants({ size })) }), /* @__PURE__ */ React31.createElement(
        "div",
        {
          className: cn(
            "absolute  flex items-center justify-center bg-white transition-transform",
            size === "sm" ? "peer-checked:translate-x-2 top-[1px] left-[2px] w-5 h-4 rounded-radius-md" : "peer-checked:translate-x-3 top-[2.5px] left-1 h-[22px] w-[34px] rounded-radius-lg"
          )
        },
        /* @__PURE__ */ React31.createElement("span", { className: "flex items-center justify-center" }, icon),
        children
      ))
    );
  }
);
Toggle.displayName = "Toggle";
var Toggle_default = Toggle;
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button_default as Button,
  Callout_default as Callout,
  Caption_default as Caption,
  Card,
  CardBg,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle,
  Checkbox_default as Checkbox,
  Chip_default as Chip,
  Drawer_default as Drawer,
  Dropdown_default as Dropdown,
  FillButton_default as FillButton,
  Footer,
  FooterContent,
  FooterHeader,
  FooterIcons,
  FooterList,
  ImageCard_default as ImageCard,
  Input_default as Input,
  Label_default as Label,
  ListItem_default as ListItem,
  ListPagination_default as ListPagination,
  Loading_default as Loading,
  Modal,
  NestedDropdown_default as NestedDropdown,
  OTPInput_default as OTPInput,
  Paragraph_default as Paragraph,
  Popover_default as Popover,
  Radio_default as Radio,
  Skeleton_default as Skeleton,
  Slider_default as Slider,
  Spinner_default as Spinner,
  StatsCard_default as StatsCard,
  Tab,
  TabList,
  TabPanel,
  Tabs_default as TabsContainer,
  Textarea_default as Textarea,
  Toggle_default as Toggle,
  Typography_default as Typography
};
