// import React, { HTMLAttributes, ReactNode } from "react";
// import { cva, VariantProps } from "class-variance-authority";
// import { cn } from "@/utils/util";

// interface ButtonProps
//   extends HTMLAttributes<HTMLDivElement>,
//     VariantProps<typeof chipVariants> {
//   children?: ReactNode;
//   startIcon?: JSX.Element;
//   endIcon?: JSX.Element;
// }

// const chipVariants = cva(
//   "rounded-radius-xl w-fit disabled:select-none font-semibold cursor-pointer transition-colors duration-300 ease-in-out",
//   {
//     variants: {
//       variant: {
//         solid: "border border-brand-600 text-brand-500",
//         primary:
//           "bg-light text-brand-500 active:bg-primary-900 active:border-primary-900 hover:bg-primary-700 hover:border-primary-700 border border-primary-600 disabled:opacity-[30%] disabled:pointer-events-none",
//         secondary:
//           "border border-primary-600 bg-white disabled:opacity-[30%] disabled:pointer-events-none text-primary-600 hover:bg-primary-100 active:bg-primary-200 active:border-primary-700",
//         glass: "border border-brand-600",
//       },
//       // size: {
//       //   sm: "text-[10px] w-[35px] h-[20px] py-[2px] px-2",
//       //   md: "text-[20px] w-[144px] h-[46px] px-4 py-2",
//       //   lg: "text-[24px] w-[202px] h-[52px] px-[32px] py-2",
//       // },
//       size: {
//         sm: "text-[10px] py-[2px] px-2",
//         md: "text-[20px] px-4 py-2",
//         lg: "text-[24px] px-[32px] py-2",
//       },
//     },
//     defaultVariants: {
//       variant: "primary",
//       size: "md",
//     },
//   },
// );

// const Chip = ({
//   children,
//   className,
//   variant,
//   // intent,
//   startIcon,
//   endIcon,
//   size,
//   ...props
// }: ButtonProps) => {
//   return (
//     <div
//       {...props}
//       className={cn(
//         "w-full",
//         chipVariants({ className, variant, size }),
//         "flex items-center text-center justify-center gap-2",
//       )}
//     >
//       {startIcon}
//       {children}
//       {endIcon}
//     </div>
//   );
// };

// export default Chip;

import React, { type HTMLAttributes, type ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/util";

interface ButtonProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof chipVariants> {
  children?: ReactNode;
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

const chipVariants = cva("", {
  variants: {
    variant: {
      primary: "bg-white text-brand-500 hover:text-white hover:bg-gradient-to-r hover:from-[#4285F4] hover:to-[#264D8E]",
      secondary: "bg-brand-500 text-white hover:text-white hover:bg-gradient-to-r hover:from-[#4285F4] hover:to-[#285092]",
      // glass: "bg-transparent text-brand-500 hover:text-white hover:bg-gradient-to-r hover:from-[#B3CEFB] hover:to-[#4285F4]",
      glass: "text-brand-500",
    },
    size: {
      sm: "text-sm py-1 px-3",
      md: "text-base px-4 py-2",
      lg: "text-lg px-6 py-3",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

const Chip = ({
  children,
  className,
  variant,
  startIcon,
  endIcon,
  size,
  ...props
}: ButtonProps) => {
  return (
    <div
      className={cn(
        "rounded-radius-xl bg-gradient-to-r",
        {
          solid: "from-[#B3CEFB] to-[#4285F4]",
          primary:
            "from-[#B3CEFB] to-[#4285F4]",
          secondary: "from-[#B3CEFB] to-[#4285F4]",
          glass: "border border-[#4285F4]",
        }[variant || "primary"],
        "p-[1px]",
      )}
    >
      <div
        {...props}
        className={cn(
          "flex items-center justify-center gap-2 text-center font-semibold", 
          "rounded-radius-xl", 
          chipVariants({ variant, size }),
          className,
        )}
      >
        {startIcon}
        {children}
        {endIcon}
      </div>
    </div>
  );
};

export default Chip;
