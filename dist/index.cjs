"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/app/index.ts
var app_exports = {};
__export(app_exports, {
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  Button: () => Button_default,
  Caption: () => Caption_default,
  Card: () => Card,
  CardBg: () => CardBg,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardIcon: () => CardIcon,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox_default,
  Chip: () => Chip_default,
  Footer: () => Footer,
  FooterContent: () => FooterContent,
  FooterHeader: () => FooterHeader,
  FooterIcons: () => FooterIcons,
  FooterList: () => FooterList,
  ImageCard: () => ImageCard_default,
  Input: () => Input_default,
  Label: () => Label_default,
  ListItem: () => ListItem_default,
  ListPagination: () => ListPagination_default,
  Loading: () => Loading_default,
  OTPInput: () => OTPInput_default,
  Paragraph: () => Paragraph_default,
  Slider: () => Slider_default,
  Spinner: () => Spinner_default,
  StatsCard: () => StatsCard_default,
  Textarea: () => Textarea_default,
  Toggle: () => Toggle_default,
  Typography: () => Typography_default
});
module.exports = __toCommonJS(app_exports);

// src/utils/util.ts
var import_clsx = __toESM(require("clsx"), 1);
var import_tailwind_merge = require("tailwind-merge");
var cn = (...classes) => (0, import_tailwind_merge.twMerge)((0, import_clsx.default)(...classes));

// src/components/Accordion.tsx
var import_react = __toESM(require("react"), 1);
var import_fi = require("react-icons/fi");
function Accordion({
  type = "single",
  collapsible = true,
  className,
  children
}) {
  const [openItems, setOpenItems] = (0, import_react.useState)([]);
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
  return /* @__PURE__ */ import_react.default.createElement("div", { className }, import_react.default.Children.map(children, (child) => {
    if (import_react.default.isValidElement(child)) {
      return import_react.default.cloneElement(
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
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: cn(
        "rounded-lg mb-3 shadow-cardShadow dark:shadow-none border dark:border-gray-900",
        isOpen ? "border-primary-500 shadow-cardShadowActive dark:bg-gray-900" : "hover:border-gray-500 hover:bg-gray-100 hover:dark:bg-transparent hover:dark:border-gray-600",
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      )
    },
    /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: "font-semibold p-[32px] mobile:p-4 transition-colors duration-200 ease-in-out",
        onClick: toggle
      },
      children && Array.isArray(children) ? /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, import_react.default.cloneElement(children[0], { isOpen }), isOpen && !disabled ? children[1] : null) : children
    )
  );
}
function AccordionTrigger({ isOpen, children }) {
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "accordion-trigger flex justify-between items-center font-semibold text-[20px] mobile:text-[12px] mobile:leading-[18px] text-dark dark:text-white transition-all delay-150 ease-in" }, children, /* @__PURE__ */ import_react.default.createElement(
    "span",
    {
      className: `transition-transform duration-300 transform ${isOpen ? "rotate-180" : "rotate-0"}`
    },
    /* @__PURE__ */ import_react.default.createElement(import_fi.FiChevronDown, { size: 20 })
  ));
}
function AccordionContent({ isOpen, children }) {
  return /* @__PURE__ */ import_react.default.createElement(
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
var import_class_variance_authority = require("class-variance-authority");
var import_react2 = __toESM(require("react"), 1);
var buttonVariants = (0, import_class_variance_authority.cva)(
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
  return /* @__PURE__ */ import_react2.default.createElement(
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
var import_class_variance_authority2 = require("class-variance-authority");
var import_react3 = __toESM(require("react"), 1);
var captionVariants = (0, import_class_variance_authority2.cva)("font-bold font-karla text-dark dark:text-light", {
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
  return /* @__PURE__ */ import_react3.default.createElement("span", { className: cn(captionVariants({ variant, className })), ...props }, children);
};
var Caption_default = Caption;

// src/components/Card.tsx
var import_image = __toESM(require("next/image"), 1);
var import_react6 = __toESM(require("react"), 1);

// src/components/Typography.tsx
var import_class_variance_authority3 = require("class-variance-authority");
var import_react4 = __toESM(require("react"), 1);
var typographyVariant = (0, import_class_variance_authority3.cva)("text-dark dark:text-light font-bold", {
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
  return /* @__PURE__ */ import_react4.default.createElement(
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
var import_class_variance_authority4 = require("class-variance-authority");
var import_react5 = __toESM(require("react"), 1);
var paragraphVariants = (0, import_class_variance_authority4.cva)(
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
  return /* @__PURE__ */ import_react5.default.createElement("p", { className: cn(paragraphVariants({ variant, className })), ...props }, children);
};
var Paragraph_default = Paragraph;

// src/components/Card.tsx
function Card({ children, className }) {
  return /* @__PURE__ */ import_react6.default.createElement("article", { className }, children);
}
var CardIcon = ({ children, className }) => /* @__PURE__ */ import_react6.default.createElement("span", { className }, children);
var CardHeader = ({ children, className }) => /* @__PURE__ */ import_react6.default.createElement("div", { className }, children);
var CardBg = ({
  children,
  className,
  src,
  alt = "Card",
  width = 300,
  height = 200
}) => /* @__PURE__ */ import_react6.default.createElement("div", { className: cn("relative", className) }, src && /* @__PURE__ */ import_react6.default.createElement(
  import_image.default,
  {
    src,
    alt,
    width,
    height,
    layout: "responsive"
  }
), /* @__PURE__ */ import_react6.default.createElement("div", { className: "absolute inset-0" }, children));
var CardTitle = ({ children, className }) => /* @__PURE__ */ import_react6.default.createElement(Typography_default, { variant: "h4", className }, children);
var CardDescription = ({ children, className }) => /* @__PURE__ */ import_react6.default.createElement(Paragraph_default, { variant: "b1", className: cn("text-light", className) }, children);
var CardContent = ({ children, className }) => /* @__PURE__ */ import_react6.default.createElement("div", { className: cn("font-karla text-white", className) }, children);
var CardFooter = ({ children, className }) => /* @__PURE__ */ import_react6.default.createElement("div", { className: cn("font-karla text-white", className) }, children);

// src/components/Checkbox.tsx
var import_react7 = __toESM(require("react"), 1);
var Checkbox = (0, import_react7.forwardRef)(
  ({ disabled, checked, className, children, readOnly, square, ...props }, ref) => {
    return /* @__PURE__ */ import_react7.default.createElement(
      "div",
      {
        className: cn(
          square ? "rounded-sm" : "rounded-full",
          "group inline-flex relative items-center  border-2 border-transparent hover:border-primary-300",
          disabled && "border-none"
        )
      },
      /* @__PURE__ */ import_react7.default.createElement(
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
      /* @__PURE__ */ import_react7.default.createElement(
        "span",
        {
          className: cn(
            "absolute text-primary-600 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100",
            disabled && "text-gray-300"
          )
        },
        /* @__PURE__ */ import_react7.default.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-4 h-4",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0.3"
          },
          /* @__PURE__ */ import_react7.default.createElement(
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
var import_react8 = __toESM(require("react"), 1);
var import_class_variance_authority5 = require("class-variance-authority");
var chipVariants = (0, import_class_variance_authority5.cva)("", {
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
  return /* @__PURE__ */ import_react8.default.createElement(
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
    /* @__PURE__ */ import_react8.default.createElement(
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

// src/components/Footer.tsx
var import_react9 = __toESM(require("react"), 1);
var import_link = __toESM(require("next/link"), 1);
function Footer({
  children,
  className,
  footerBottom
}) {
  return /* @__PURE__ */ import_react9.default.createElement(
    "footer",
    {
      className: cn(
        "bg-gradient-to-b from-gray-25 to-primary-100 dark:from-primary-900 dark:to-dark",
        className
      )
    },
    children,
    footerBottom && /* @__PURE__ */ import_react9.default.createElement("section", { className: "border-t border-primary-500 dark:border-primary-800 text-center py-spacing-md" }, footerBottom)
  );
}
var FooterHeader = ({ children, className }) => {
  return /* @__PURE__ */ import_react9.default.createElement(
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
  return /* @__PURE__ */ import_react9.default.createElement(
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
  return /* @__PURE__ */ import_react9.default.createElement(
    "div",
    {
      className: cn(
        "grid place-items-start gap-8 text-center md:text-left",
        footerItems.length === 2 && "md:grid-cols-2",
        (footerItems.length > 3 || footerItems.length === 3) && "lg:grid-cols-3 md:grid-cols-2"
      )
    },
    footerItems?.map((data, i) => /* @__PURE__ */ import_react9.default.createElement("div", { key: i, className: "space-y-3 w-full" }, /* @__PURE__ */ import_react9.default.createElement(Paragraph_default, { variant: "b3", className: "text-primary-600" }, data?.label), /* @__PURE__ */ import_react9.default.createElement("ul", { className: "space-y-2 list-none" }, data?.content?.map((data2, i2) => /* @__PURE__ */ import_react9.default.createElement("li", { key: i2 }, /* @__PURE__ */ import_react9.default.createElement(import_link.default, { href: data2?.link, target }, /* @__PURE__ */ import_react9.default.createElement(
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
  return /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex flex-wrap justify-center items-center gap-5 text-primary-700 dark:text-primary-200" }, icons.map((icon, index) => /* @__PURE__ */ import_react9.default.createElement(
    import_link.default,
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
var import_react10 = __toESM(require("react"), 1);
var ImageCard = ({
  cardTitle,
  cardDesc,
  cardImg,
  children,
  className = ""
}) => {
  const backgroundImage = `url('${cardImg}')`;
  return /* @__PURE__ */ import_react10.default.createElement(
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
    /* @__PURE__ */ import_react10.default.createElement("div", { className: "absolute inset-0 z-[-5] transition-all duration-300 ease-in-out bg-gradient-to-b from-transparent via-black/50 to-black" }),
    /* @__PURE__ */ import_react10.default.createElement("section", { className: "p-[32px] w-full h-full flex flex-col justify-end font-karla hover:bg-gradient-to-b hover:from-black/60 hover:via-black/70 hover:to-[#070707]" }, /* @__PURE__ */ import_react10.default.createElement(CardTitle, { className: "text-[24px] font-bold text-white mt-4 mb-6" }, cardTitle), /* @__PURE__ */ import_react10.default.createElement(CardDescription, { className: "text-[20px] leading-[25px] text-white" }, cardDesc), /* @__PURE__ */ import_react10.default.createElement("div", null, children))
  );
};
var ImageCard_default = ImageCard;

// src/components/Input.tsx
var import_class_variance_authority6 = require("class-variance-authority");
var import_react11 = __toESM(require("react"), 1);
var inputVariants = (0, import_class_variance_authority6.cva)(
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
var Input = (0, import_react11.forwardRef)(
  ({ startIcon, endIcon, className, variant, type, disabled, ...props }, ref) => {
    return /* @__PURE__ */ import_react11.default.createElement("div", { className: cn(inputVariants({ variant, className })) }, startIcon, /* @__PURE__ */ import_react11.default.createElement(
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
var import_class_variance_authority7 = require("class-variance-authority");
var import_react12 = __toESM(require("react"), 1);
var labelVariants = (0, import_class_variance_authority7.cva)("font-medium text-dark dark:text-light", {
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
  return /* @__PURE__ */ import_react12.default.createElement(
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
    required && /* @__PURE__ */ import_react12.default.createElement("span", { className: "text-error" }, "*")
  );
};
var Label_default = Label;

// src/components/ListItem.tsx
var import_link2 = __toESM(require("next/link"), 1);
var import_react13 = __toESM(require("react"), 1);
var import_navigation = require("next/navigation");
var ListItem = import_react13.default.forwardRef(
  ({ className, title, href, onClick, as = "link", variant = "solid", icon }, ref) => {
    const pathname = (0, import_navigation.usePathname)();
    const isActive = as === "link" && href === pathname;
    const variantClasses = variant === "solid" ? "rounded-radius-lg hover:bg-primary-50 text-dark group border border-transparent hover:border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:text-white leading-none no-underline outline-none transition-colors" : variant === "glass" ? "rounded-radius-lg group border border-transparent hover:border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:text-white leading-none no-underline outline-none transition-colors" : "";
    if (as === "button") {
      return /* @__PURE__ */ import_react13.default.createElement(
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
        /* @__PURE__ */ import_react13.default.createElement(
          Typography_default,
          {
            variant: "h6",
            className: cn("font-karla group-hover:dark:text-dark", className)
          },
          title
        ),
        icon && /* @__PURE__ */ import_react13.default.createElement("span", { className: "text-dark dark:text-white" }, icon)
      );
    }
    return /* @__PURE__ */ import_react13.default.createElement(
      import_link2.default,
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
      /* @__PURE__ */ import_react13.default.createElement(
        Typography_default,
        {
          variant: "h6",
          className: cn("font-karla group-hover:dark:text-dark", className)
        },
        title
      ),
      icon && /* @__PURE__ */ import_react13.default.createElement(
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
var import_react14 = __toESM(require("react"), 1);
var import_ri = require("react-icons/ri");
var ListPagination = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
  className
}) => {
  const totalPages = Math.ceil(count / rowsPerPage);
  const [expanded, setExpanded] = (0, import_react14.useState)(false);
  const renderPages = () => {
    if (totalPages <= 6 || expanded) {
      return [...Array(totalPages)].map((_, i) => /* @__PURE__ */ import_react14.default.createElement(PageBtn, { key: i, i, page, onPageChange }));
    }
    const start = [0, 1];
    const mid = [page - 1, page, page + 1].filter(
      (i) => i > 1 && i < totalPages - 2
    );
    const end = [totalPages - 2, totalPages - 1];
    const range = Array.from(/* @__PURE__ */ new Set([...start, ...mid, ...end]));
    return range.map(
      (i, idx) => typeof range[idx - 1] === "number" && i - range[idx - 1] > 1 ? /* @__PURE__ */ import_react14.default.createElement(
        Button_default,
        {
          key: `dots-${i}`,
          size: "sm",
          variant: "secondary",
          onClick: () => setExpanded(true)
        },
        "..."
      ) : /* @__PURE__ */ import_react14.default.createElement(PageBtn, { key: i, i, page, onPageChange })
    );
  };
  return /* @__PURE__ */ import_react14.default.createElement("section", { className: cn("flex items-center gap-1", className) }, /* @__PURE__ */ import_react14.default.createElement(
    NavBtn,
    {
      icon: /* @__PURE__ */ import_react14.default.createElement(import_ri.RiArrowLeftSLine, { size: 28 }),
      onClick: () => onPageChange(page - 1),
      disabled: page === 0
    }
  ), /* @__PURE__ */ import_react14.default.createElement("div", { className: "max-w-[90vw] w-max overflow-auto flex items-center gap-2 p-2" }, renderPages()), /* @__PURE__ */ import_react14.default.createElement(
    NavBtn,
    {
      icon: /* @__PURE__ */ import_react14.default.createElement(import_ri.RiArrowRightSLine, { size: 28 }),
      onClick: () => onPageChange(page + 1),
      disabled: page === totalPages - 1
    }
  ));
};
var PageBtn = ({
  i,
  page,
  onPageChange
}) => /* @__PURE__ */ import_react14.default.createElement(
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
}) => /* @__PURE__ */ import_react14.default.createElement(
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
var import_react15 = __toESM(require("react"), 1);
var Loading = ({ width, height, loaderColor, variant }) => {
  return /* @__PURE__ */ import_react15.default.createElement(
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

// src/components/OTPInput.tsx
var import_react16 = __toESM(require("react"), 1);
var OTPInput = ({
  length,
  onChange,
  type = "text"
}) => {
  const [otpValues, setOtpValues] = (0, import_react16.useState)(Array(length).fill(""));
  const inputsRef = (0, import_react16.useRef)([]);
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
  return /* @__PURE__ */ import_react16.default.createElement("div", { className: "flex items-center gap-2" }, Array.from({ length }).map((_, idx) => /* @__PURE__ */ import_react16.default.createElement(
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

// src/components/Slider.tsx
var import_react17 = __toESM(require("react"), 1);
var Slider = (0, import_react17.forwardRef)(
  ({ value, min = 0, max = 100, size = "sm", ...props }, ref) => {
    const progress = (value - min) / (max - min) * 100;
    return /* @__PURE__ */ import_react17.default.createElement(import_react17.default.Fragment, null, /* @__PURE__ */ import_react17.default.createElement(
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
var import_react18 = __toESM(require("react"), 1);
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
  return /* @__PURE__ */ import_react18.default.createElement("div", { className: cn("relative", sizeClass) }, /* @__PURE__ */ import_react18.default.createElement(
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
var import_react19 = __toESM(require("react"), 1);
var StatsCard = ({
  statTitle,
  statDesc,
  className,
  cardIcon
}) => {
  return /* @__PURE__ */ import_react19.default.createElement(
    Card,
    {
      className: cn(
        "border border-gray-200 hover:border-primary-500 rounded-radius-xl bg-[#FFFFFFE5] bg-gradient-to-b bg-[#fff] hover:from-primary-300 hover:to-primary-600 dark:from-primary-800 dark:to-primary-700 dark:hover:from-primary-800 dark:hover:to-primary-900 backdrop-blur-sm px-[32px] py-[64px] group",
        className
      )
    },
    /* @__PURE__ */ import_react19.default.createElement("span", { className: "group-hover:text-white text-dark dark:text-white" }, cardIcon),
    /* @__PURE__ */ import_react19.default.createElement(CardTitle, { className: "group-hover:text-white text-[48px] font-bold text-primary-500 dark:text-white my-4" }, statTitle),
    /* @__PURE__ */ import_react19.default.createElement(CardDescription, { className: "group-hover:text-white text-[24px] hover:text-white text-dark leading-[25px]" }, statDesc)
  );
};
var StatsCard_default = StatsCard;

// src/components/Textarea.tsx
var import_class_variance_authority8 = require("class-variance-authority");
var import_react20 = __toESM(require("react"), 1);
var textareaVariants = (0, import_class_variance_authority8.cva)(
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
var Textarea = (0, import_react20.forwardRef)(
  ({ className, rows, cols, variant, disabled, children, ...props }, ref) => {
    return /* @__PURE__ */ import_react20.default.createElement(
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
var import_class_variance_authority9 = require("class-variance-authority");
var import_react21 = __toESM(require("react"), 1);
var toggleVariants = (0, import_class_variance_authority9.cva)(
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
var Toggle = (0, import_react21.forwardRef)(
  ({ icon, children, disabled, size = "lg", ...props }, ref) => {
    return /* @__PURE__ */ import_react21.default.createElement(
      "label",
      {
        className: cn(
          "flex cursor-pointer select-none items-center",
          disabled && "opacity-50 pointer-events-none"
        )
      },
      /* @__PURE__ */ import_react21.default.createElement("div", { className: "relative" }, /* @__PURE__ */ import_react21.default.createElement(
        "input",
        {
          type: "checkbox",
          disabled,
          ref,
          ...props,
          className: "sr-only peer"
        }
      ), /* @__PURE__ */ import_react21.default.createElement("div", { className: cn(toggleVariants({ size })) }), /* @__PURE__ */ import_react21.default.createElement(
        "div",
        {
          className: cn(
            "absolute  flex items-center justify-center bg-white transition-transform",
            size === "sm" ? "peer-checked:translate-x-2 top-[1px] left-[2px] w-5 h-4 rounded-radius-md" : "peer-checked:translate-x-3 top-[2.5px] left-1 h-[22px] w-[34px] rounded-radius-lg"
          )
        },
        /* @__PURE__ */ import_react21.default.createElement("span", { className: "flex items-center justify-center" }, icon),
        children
      ))
    );
  }
);
Toggle.displayName = "Toggle";
var Toggle_default = Toggle;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Caption,
  Card,
  CardBg,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle,
  Checkbox,
  Chip,
  Footer,
  FooterContent,
  FooterHeader,
  FooterIcons,
  FooterList,
  ImageCard,
  Input,
  Label,
  ListItem,
  ListPagination,
  Loading,
  OTPInput,
  Paragraph,
  Slider,
  Spinner,
  StatsCard,
  Textarea,
  Toggle,
  Typography
});
