// src/utils/util.ts
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
var cn = (...classes) => twMerge(clsx(...classes));

// src/components/Accordion.tsx
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
function Accordion({
  type = "single",
  collapsible = true,
  className,
  children
}) {
  const [openItems, setOpenItems] = useState([]);
  const handleToggle = (value) => {
    if (type === "single") {
      setOpenItems(
        (prev) => prev.includes(value) ? collapsible ? [] : prev : [value]
      );
    } else {
      setOpenItems(
        (prev) => prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className }, React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(
        child,
        {
          openItems,
          handleToggle
        }
      );
    }
    return child;
  }));
}
function AccordionItem({
  value,
  disabled = false,
  openItems,
  handleToggle,
  children
}) {
  const isOpen = openItems?.includes(value);
  const toggle = () => {
    if (!disabled && handleToggle) {
      handleToggle(value);
    }
  };
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn(
        "rounded-lg mb-3 shadow-cardShadow dark:shadow-none border dark:border-gray-900",
        isOpen ? "border-primary-500 shadow-cardShadowActive dark:bg-gray-900" : "hover:border-gray-500 hover:bg-gray-100 hover:dark:bg-transparent hover:dark:border-gray-600",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      )
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "font-semibold p-[32px] mobile:p-4 transition-colors duration-200 ease-in-out",
        onClick: toggle
      },
      children && Array.isArray(children) ? /* @__PURE__ */ React.createElement(React.Fragment, null, React.cloneElement(children[0], { isOpen }), isOpen && !disabled ? children[1] : null) : children
    )
  );
}
function AccordionTrigger({ isOpen, children }) {
  return /* @__PURE__ */ React.createElement("div", { className: "accordion-trigger flex justify-between items-center font-semibold text-[20px] mobile:text-[12px] mobile:leading-[18px] text-dark dark:text-white transition-all delay-150 ease-in" }, children, /* @__PURE__ */ React.createElement(
    "span",
    {
      className: `transition-transform duration-300 transform ${isOpen ? "rotate-180" : "rotate-0"}`
    },
    /* @__PURE__ */ React.createElement(FiChevronDown, { size: 20 })
  ));
}
function AccordionContent({ isOpen, children }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: cn(
        "w-full font-normal font-karla text-[18px] mobile:text-[12px] mobile:leading-[18px] text-dark dark:text-gray-300 pt-[32px] mobile:pt-[10px] overflow-hidden transition-all duration-500 ease-in",
        !isOpen ? "max-h-full opacity-100" : "max-h-0 opacity-0"
      )
    },
    children
  );
}

// src/components/Button.tsx
import { cva } from "class-variance-authority";
import React2 from "react";
var buttonVariants = cva(
  "font-semibold transition-colors rounded-radius-md py-spacing-sm duration-300 ease-in-out cursor-pointer disabled:pointer-events-none disabled:select-none disabled:bg-gray-400 disabled:text-light border-gray-25/15",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-light border hover:bg-primary-600 hover:shadow-[inset_0px_2px_8px_-2px_#FFFFFF8F,inset_0px_8px_8px_-2px_#0000002E] active:bg-primary-400 active:shadow-[0px_0px_0px_3px] active:shadow-primary-300",
        "primary-light": "bg-primary-50 text-primary-600 hover:bg-primary-200 hover:shadow-[inset_0px_2px_8px_-2px_#FFFFFF8F,inset_0px_8px_8px_-2px_#356AC32E] active:shadow-[0px_0px_0px_3px] active:bg-primary-50 active:shadow-primary-300",
        secondary: "bg-primary-50 text-primary-800 hover:bg-primary-200 hover:shadow-[inset_0px_2px_8px_-2px_#FFFFFF8F,inset_0px_8px_8px_-2px_#6984AD2E] active:bg-primary-50 active:shadow-[0px_0px_0px_3px] active:shadow-primary-700",
        tertiary: "bg-gray-100 text-gray-900 hover:bg-gray-300 hover:shadow-[inset_0px_2px_8px_-2px_#FFFFFF8F,inset_0px_8px_8px_-2px_#9595952E] active:bg-gray-25 active:shadow-[0px_0px_0px_3px] active:shadow-gray-700",
        quaternary: "bg-gray-50/[0.02] text-light backdrop-blur-[6px] hover:shadow-[inset_0px_8px_8px_-2px_#23232314] hover:backdrop-blur-md hover:bg-gray-200/10 active:bg-gray-25 active:shadow-[0px_0px_0px_3px] active:text-gray-900 active:shadow-[#46464659]"
      },
      size: {
        sm: "text-xl leading-[30px] px-spacing-md",
        md: "font-bold text-2xl leading-[36px] px-spacing-lg",
        lg: "font-bold text-[32px] leading-[48px] px-spacing-xl"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
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
  return /* @__PURE__ */ React2.createElement(
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

// src/components/Caption.tsx
import { cva as cva2 } from "class-variance-authority";
import React3 from "react";
var captionVariants = cva2("font-bold font-karla text-dark dark:text-light", {
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
  return /* @__PURE__ */ React3.createElement("span", { className: cn(captionVariants({ variant, className })), ...props }, children);
};
var Caption_default = Caption;

// src/components/Card.tsx
import Image from "next/image";
import React6 from "react";

// src/components/Typography.tsx
import { cva as cva3 } from "class-variance-authority";
import React4 from "react";
var typographyVariant = cva3("text-dark dark:text-light font-bold", {
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
  return /* @__PURE__ */ React4.createElement(
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
import { cva as cva4 } from "class-variance-authority";
import React5 from "react";
var paragraphVariants = cva4(
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
  return /* @__PURE__ */ React5.createElement("p", { className: cn(paragraphVariants({ variant, className })), ...props }, children);
};
var Paragraph_default = Paragraph;

// src/components/Card.tsx
function Card({ children, className }) {
  return /* @__PURE__ */ React6.createElement("article", { className }, children);
}
var CardIcon = ({ children, className }) => /* @__PURE__ */ React6.createElement("span", { className }, children);
var CardHeader = ({ children, className }) => /* @__PURE__ */ React6.createElement("div", { className }, children);
var CardBg = ({
  children,
  className,
  src,
  alt = "Card",
  width = 300,
  height = 200
}) => /* @__PURE__ */ React6.createElement("div", { className: cn("relative", className) }, src && /* @__PURE__ */ React6.createElement(
  Image,
  {
    src,
    alt,
    width,
    height,
    layout: "responsive"
  }
), /* @__PURE__ */ React6.createElement("div", { className: "absolute inset-0" }, children));
var CardTitle = ({ children, className }) => /* @__PURE__ */ React6.createElement(Typography_default, { variant: "h4", className }, children);
var CardDescription = ({ children, className }) => /* @__PURE__ */ React6.createElement(Paragraph_default, { variant: "b1", className: cn("text-light", className) }, children);
var CardContent = ({ children, className }) => /* @__PURE__ */ React6.createElement("div", { className: cn("font-karla text-white", className) }, children);
var CardFooter = ({ children, className }) => /* @__PURE__ */ React6.createElement("div", { className: cn("font-karla text-white", className) }, children);

// src/components/Checkbox.tsx
import React7, { forwardRef } from "react";
var Checkbox = forwardRef(
  ({ disabled, checked, className, children, readOnly, ...props }, ref) => {
    return /* @__PURE__ */ React7.createElement(
      "div",
      {
        className: cn(
          "group inline-flex relative items-center rounded-full border-2 border-transparent hover:border-primary-300",
          disabled && "border-none"
        )
      },
      /* @__PURE__ */ React7.createElement(
        "input",
        {
          type: "checkbox",
          ref,
          ...props,
          disabled,
          readOnly,
          checked,
          className: cn(
            "peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border-2 border-gray-300 transition-all checked:border-primary-500 hover:border-primary-500 hover:bg-primary-25/25 disabled:opacity-30 disabled:pointer-events-none disabled:border-gray-400",
            className
          )
        }
      ),
      /* @__PURE__ */ React7.createElement(
        "span",
        {
          className: cn(
            "absolute text-primary-600 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100",
            disabled && "text-gray-300"
          )
        },
        /* @__PURE__ */ React7.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-4 h-4",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0.3"
          },
          /* @__PURE__ */ React7.createElement(
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
import React8 from "react";
import { cva as cva5 } from "class-variance-authority";
var chipVariants = cva5("", {
  variants: {
    variant: {
      primary: "bg-white text-primary-500 hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-[#264D8E]",
      secondary: "bg-primary-500 text-white hover:text-white hover:bg-gradient-to-r hover:from-primary-500 hover:to-[#285092]",
      glass: "text-primary-500"
    },
    size: {
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
  return /* @__PURE__ */ React8.createElement(
    "div",
    {
      className: cn(
        "rounded-radius-xl bg-gradient-to-r w-fit",
        {
          solid: "from-primary-200 to-primary-500",
          primary: "from-primary-200 to-primary-500",
          secondary: "from-primary-200 to-primary-500",
          glass: "border border-primary-500"
        }[variant || "primary"],
        "p-[1px]"
      )
    },
    /* @__PURE__ */ React8.createElement(
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

// src/components/Dropdown.tsx
import React9, { useState as useState2, useRef, useEffect } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
function Dropdown({
  triggerIcon,
  children,
  width = "250px"
}) {
  const [isOpen, setIsOpen] = useState2(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return /* @__PURE__ */ React9.createElement("div", { className: "relative w-full font-karla", ref: dropdownRef }, /* @__PURE__ */ React9.createElement(
    "div",
    {
      className: "cursor-pointer",
      onClick: () => setIsOpen(!isOpen),
      "aria-label": "Open menu"
    },
    triggerIcon || /* @__PURE__ */ React9.createElement("span", null, "\u2630")
  ), isOpen && /* @__PURE__ */ React9.createElement(
    "div",
    {
      style: { width },
      className: "border border-gray-200 dark:bg-gray-800 dark:border-gray-600 dark:text-white rounded-t-radius-md absolute left-0 mt-1 z-[100000] w-full bg-white shadow-sm"
    },
    children
  ));
}
var MenuItem = ({
  label,
  onClick,
  disabled,
  children
}) => /* @__PURE__ */ React9.createElement(
  "button",
  {
    className: cn(
      "w-full text-left p-4 border-t border-gray-200 last:border-none hover:bg-gray-200 dark:hover:bg-gray-600",
      disabled ? "opacity-50 cursor-not-allowed" : ""
    ),
    onClick,
    disabled
  },
  label,
  children && /* @__PURE__ */ React9.createElement(React9.Fragment, null, children)
);
var MenuSubItem = ({
  label,
  children
}) => {
  const [isSubOpen, setIsSubOpen] = useState2(false);
  return /* @__PURE__ */ React9.createElement("div", { className: "relative" }, /* @__PURE__ */ React9.createElement(
    "section",
    {
      onClick: () => setIsSubOpen(!isSubOpen),
      className: "cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 border-t border-b border-gray-200 p-4 flex justify-between items-center gap-1 w-full text-left"
    },
    /* @__PURE__ */ React9.createElement("span", null, label),
    isSubOpen ? /* @__PURE__ */ React9.createElement(HiChevronUp, null) : /* @__PURE__ */ React9.createElement(HiChevronDown, null)
  ), isSubOpen && /* @__PURE__ */ React9.createElement("div", { className: "bg-gray-100 border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white" }, children));
};

// src/components/Footer.tsx
import React10 from "react";
import Link from "next/link";
function Footer({
  children,
  className,
  footerBottom
}) {
  return /* @__PURE__ */ React10.createElement(
    "footer",
    {
      className: cn(
        "bg-gradient-to-b from-gray-25 to-primary-100 dark:from-primary-900 dark:to-dark",
        className
      )
    },
    children,
    footerBottom && /* @__PURE__ */ React10.createElement("section", { className: "border-t border-primary-500 dark:border-primary-800 text-center py-spacing-md" }, footerBottom)
  );
}
var FooterHeader = ({ children, className }) => {
  return /* @__PURE__ */ React10.createElement(
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
  return /* @__PURE__ */ React10.createElement(
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
  console.log("Footer Length", footerItems.length);
  return /* @__PURE__ */ React10.createElement(
    "div",
    {
      className: cn(
        "grid place-items-start gap-12 text-center md:text-left",
        footerItems.length === 2 && "md:grid-cols-2",
        (footerItems.length > 3 || footerItems.length === 3) && "lg:grid-cols-3 md:grid-cols-2"
      )
    },
    footerItems?.map((data, i) => /* @__PURE__ */ React10.createElement("div", { key: i, className: "space-y-5 w-full" }, /* @__PURE__ */ React10.createElement(Typography_default, { variant: "h5" }, data?.label), /* @__PURE__ */ React10.createElement("ul", { className: "space-y-2.5 list-none" }, data?.content?.map((data2, i2) => /* @__PURE__ */ React10.createElement("li", { key: i2 }, /* @__PURE__ */ React10.createElement(Link, { href: data2?.link, target }, /* @__PURE__ */ React10.createElement(
      Paragraph_default,
      {
        variant: "b3",
        className: "dark:text-gray-300 hover:text-primary-400 dark:hover:text-primary-600 text-gray-900"
      },
      data2?.text
    )))))))
  );
};
var FooterIcons = ({ icons }) => {
  return /* @__PURE__ */ React10.createElement("div", { className: "flex flex-wrap justify-center items-center gap-5 text-primary-700 dark:text-primary-200" }, icons.map((icon, index) => /* @__PURE__ */ React10.createElement(
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
import React11 from "react";
var ImageCard = ({
  cardTitle,
  cardDesc,
  cardImg,
  children,
  className = ""
}) => {
  const backgroundImage = `url('${cardImg}')`;
  return /* @__PURE__ */ React11.createElement(
    "div",
    {
      className: cn(
        "transition-all duration-300 ease-in-out hover:ring-1 hover:ring-brand-500 relative rounded-radius-xl overflow-hidden block z-10 bg-cover bg-no-repeat bg-center",
        className
      ),
      style: {
        backgroundImage
      }
    },
    /* @__PURE__ */ React11.createElement("div", { className: "absolute inset-0 z-[-5] transition-all duration-300 ease-in-out bg-gradient-to-b from-transparent via-black/50 to-black" }),
    /* @__PURE__ */ React11.createElement("section", { className: "p-[32px] w-full h-full flex flex-col justify-end font-karla hover:bg-gradient-to-b hover:from-black/60 hover:via-black/70 hover:to-[#070707]" }, /* @__PURE__ */ React11.createElement(CardTitle, { className: "text-[24px] font-bold text-white mt-4 mb-6" }, cardTitle), /* @__PURE__ */ React11.createElement(CardDescription, { className: "text-[20px] leading-[25px] text-white" }, cardDesc), /* @__PURE__ */ React11.createElement("div", null, children))
  );
};
var ImageCard_default = ImageCard;

// src/components/Input.tsx
import { cva as cva6 } from "class-variance-authority";
import React12, { forwardRef as forwardRef2 } from "react";
var inputVariants = cva6(
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
import { cva as cva7 } from "class-variance-authority";
import React13 from "react";
var labelVariants = cva7("font-medium text-dark dark:text-light", {
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

// src/components/ListItem.tsx
import Link2 from "next/link";
import React14 from "react";
import { usePathname } from "next/navigation";
var ListItem = React14.forwardRef(
  ({ className, title, href, onClick, as = "link", variant = "solid", icon }, ref) => {
    const pathname = usePathname();
    const isActive = as === "link" && href === pathname;
    const variantClasses = variant === "solid" ? "rounded-radius-lg hover:bg-primary-50 text-dark group border border-transparent hover:border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:text-white leading-none no-underline outline-none transition-colors" : variant === "glass" ? "rounded-radius-lg group border border-transparent hover:border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:text-white leading-none no-underline outline-none transition-colors" : "";
    if (as === "button") {
      return /* @__PURE__ */ React14.createElement(
        "button",
        {
          className: cn("px-4 py-[8px] group font-karla w-full text-left flex items-center gap-2", variantClasses, className),
          onClick,
          ref
        },
        /* @__PURE__ */ React14.createElement(Typography_default, { variant: "h6", className: cn("font-karla group-hover:dark:text-dark", className) }, title),
        icon && /* @__PURE__ */ React14.createElement("span", { className: "text-dark dark:text-white" }, icon)
      );
    }
    return /* @__PURE__ */ React14.createElement(
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
      /* @__PURE__ */ React14.createElement(
        Typography_default,
        {
          variant: "h6",
          className: cn("font-karla group-hover:dark:text-dark", className)
        },
        title
      ),
      icon && /* @__PURE__ */ React14.createElement(Caption_default, { variant: "md", className: "text-dark dark:text-white group-hover:dark:text-dark" }, icon)
    );
  }
);
ListItem.displayName = "ListItem";
var ListItem_default = ListItem;

// src/components/Slider.tsx
import React15, { forwardRef as forwardRef3 } from "react";
var Slider = forwardRef3(
  ({ value, min = 0, max = 100, size = "sm", ...props }, ref) => {
    const progress = (value - min) / (max - min) * 100;
    return /* @__PURE__ */ React15.createElement(React15.Fragment, null, /* @__PURE__ */ React15.createElement(
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
          background: `linear-gradient(to right, var(--primary-500) ${progress}%, #d1d5db ${progress}%)`
        }
      }
    ));
  }
);
Slider.displayName = "Slider";
var Slider_default = Slider;

// src/components/StatsCard.tsx
import React16 from "react";
var StatsCard = ({
  statTitle,
  statDesc,
  className,
  cardIcon
}) => {
  return /* @__PURE__ */ React16.createElement(
    Card,
    {
      className: cn(
        "border border-[#eee] hover:border-primary-500 rounded-radius-xl bg-[#FFFFFFE5] bg-gradient-to-b bg-[#fff] hover:from-[#8EB6F8D9] hover:to-[#356AC3D9] dark:from-[#252525D9] dark:to-[#070707D9] dark:hover:from-[#1A3562D9] dark:hover:to-[#070707D9] backdrop-blur-sm px-[32px] py-[64px] group",
        className
      )
    },
    /* @__PURE__ */ React16.createElement("span", { className: "group-hover:text-white text-dark dark:text-white" }, cardIcon),
    /* @__PURE__ */ React16.createElement(CardTitle, { className: "group-hover:text-white text-[48px] font-bold text-primary-500 dark:text-white my-4" }, statTitle),
    /* @__PURE__ */ React16.createElement(CardDescription, { className: "group-hover:text-white text-[24px] hover:text-white text-dark leading-[25px]" }, statDesc)
  );
};
var StatsCard_default = StatsCard;

// src/components/Textarea.tsx
import { cva as cva8 } from "class-variance-authority";
import React17, {
  forwardRef as forwardRef4
} from "react";
var textareaVariants = cva8(
  "flex items-center gap-2 font-karla text-sm outline-none rounded-radius-md border py-2 px-4 disabled:opacity-60 disabled:select-none disabled:pointer-events-none w-full",
  {
    variants: {
      variant: {
        default: "dark:text-gray-500 dark:bg-gray-900 dark:border-gray-800 dark:hover:text-light dark:hover:bg-gray-800 dark:hover:border-gray-700 dark:focus-within:bg-gray-100 dark:focus-within:border-gray-800 dark:focus-within:hover:bg-gray-700 dark:focus-within:text-dark dark:disabled:bg-gray-700 bg-gray-100 border-gray-200 text-gray-600 hover:border-gray-300 hover:text-gray-500 hover:bg-gray-300 focus-within:bg-gray-50 focus-within:border-gray-400 focus-within:text-dark focus-within:hover:text-dark focus-within:hover:border-primary-100 focus-within:hover:bg-primary-50 disabled:bg-gray-25 disabled:border-gray-400",
        glass: "backdrop-blur-[3.5px] bg-light/10 dark:bg-dark/20 dark:border-gray-800 border-gray-200/50 text-light"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var Textarea = forwardRef4(
  ({ className, rows, cols, variant, disabled, children, ...props }, ref) => {
    return /* @__PURE__ */ React17.createElement(
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
import { cva as cva9 } from "class-variance-authority";
import React18, { forwardRef as forwardRef5 } from "react";
var toggleVariants = cva9(
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
var Toggle = forwardRef5(
  ({ icon, children, disabled, size = "lg", ...props }, ref) => {
    return /* @__PURE__ */ React18.createElement(
      "label",
      {
        className: cn(
          "flex cursor-pointer select-none items-center",
          disabled && "opacity-50 pointer-events-none"
        )
      },
      /* @__PURE__ */ React18.createElement("div", { className: "relative" }, /* @__PURE__ */ React18.createElement(
        "input",
        {
          type: "checkbox",
          disabled,
          ref,
          ...props,
          className: "sr-only peer"
        }
      ), /* @__PURE__ */ React18.createElement("div", { className: cn(toggleVariants({ size })) }), /* @__PURE__ */ React18.createElement(
        "div",
        {
          className: cn(
            "absolute  flex items-center justify-center bg-white transition-transform",
            size === "sm" ? "peer-checked:translate-x-2 top-[1px] left-[2px] w-5 h-4 rounded-radius-md" : "peer-checked:translate-x-3 top-[2.5px] left-1 h-[22px] w-[34px] rounded-radius-lg"
          )
        },
        /* @__PURE__ */ React18.createElement("span", { className: "flex items-center justify-center" }, icon),
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
  Dropdown,
  Footer,
  FooterContent,
  FooterHeader,
  FooterIcons,
  FooterList,
  ImageCard_default as ImageCard,
  Input_default as Input,
  Label_default as Label,
  ListItem_default as ListItem,
  MenuItem,
  MenuSubItem,
  Paragraph_default as Paragraph,
  Slider_default as Slider,
  StatsCard_default as StatsCard,
  Textarea_default as Textarea,
  Toggle_default as Toggle,
  Typography_default as Typography
};
