// // import { cn } from "@/utils/util";
// // import Link from "next/link";
// // import React from "react";
// // import Typography from "./Typography";
// // import { usePathname } from "next/navigation";

// // interface BaseProps {
// //   className?: string;
// //   children?: React.ReactNode;
// //   title: string;
// //   as?: "link" | "button";
// //   variant?: "solid" | "glass";
// // }

// // type LinkProps = BaseProps & {
// //   as: "link";
// //   href: string;
// //   onClick?: never;
// //   className?: string;
// // };

// // type ButtonProps = BaseProps & {
// //   as: "button";
// //   href?: never;
// //   onClick?: () => void;
// //   className?: string;
// // };

// // type ListItemProps = LinkProps | ButtonProps;

// // const ListItem = React.forwardRef<
// //   HTMLAnchorElement | HTMLButtonElement,
// //   ListItemProps
// // >(
// //   (
// //     { className, title, href, onClick, as = "link", variant = "solid" },
// //     ref,
// //   ) => {
// //     const pathname = usePathname();
// //     const isActive = as === "link" && href === pathname;

// //     const variantClasses =
// //       variant === "solid"
// //         ? "rounded-radius-lg hover:bg-primary-50 group border border-transparent hover:border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:text-white leading-none no-underline outline-none transition-colors" :
// //         variant === "glass" ? "rounded-radius-lg group border border-transparent hover:border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:text-white leading-none no-underline outline-none transition-colors" : ""

// //     if (as === "button") {
// //       return (
// //         <button
// //           className={cn(
// //             "px-4 py-[8px] font-karla",
// //             variantClasses,
// //             className,
// //           )}
// //           onClick={onClick}
// //           ref={ref as React.Ref<HTMLButtonElement>}
// //         >
// //           <Typography
// //             variant="h6"
// //             className={cn("font-karla group-hover:dark:text-dark", className)}
// //           >
// //             {title}
// //           </Typography>
// //         </button>
// //       );
// //     }

// //     return (
// //       <Link
// //         href={href ?? ""}
// //         passHref
// //         className={cn(
// //           "px-4 py-[8px] font-karla",
// //           isActive
// //             ? "bg-primary-400 text-white border border-primary-200"
// //             : variantClasses,
// //           className,
// //         )}
// //         ref={ref as React.Ref<HTMLAnchorElement>}
// //       >
// //         <Typography
// //           variant="h6"
// //           className={cn("font-karla group-hover:dark:text-dark", className)}
// //         >
// //           {title}
// //         </Typography>
// //       </Link>
// //     );
// //   },
// // );

// // ListItem.displayName = "ListItem";

// // export default ListItem;




// // import { cn } from "@/utils/util";
// // import Link from "next/link";
// // import React from "react";
// // import Typography from "./Typography";
// // import { usePathname } from "next/navigation";

// // interface BaseProps {
// //   className?: string;
// //   children?: React.ReactNode;
// //   title: string;
// //   as?: "link" | "button";
// // }

// // type LinkProps = BaseProps & {
// //   as: "link";
// //   href: string;
// //   onClick?: never;
// //   className?: string;

// // };

// // type ButtonProps = BaseProps & {
// //   as: "button";
// //   href?: never;
// //   onClick?: () => void;
// //   className?: string;

// // };

// // type ListItemProps = LinkProps | ButtonProps;

// // const ListItem = React.forwardRef<
// //   HTMLAnchorElement | HTMLButtonElement,
// //   ListItemProps
// // >(({ className, title, href, onClick, as = "link" }, ref) => {
// //   const pathname = usePathname();
// //   const isActive = as === "link" && href === pathname;

// //   if (as === "button") {
// //     return (
// //       <button
// //         className={cn(
// //           "px-4 py-[8px] font-karla rounded-radius-lg hover:bg-primary-50 group border border-transparent hover:border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:text-white leading-none no-underline outline-none transition-colors",
// //         )}
// //         onClick={onClick}
// //         ref={ref as React.Ref<HTMLButtonElement>}
// //       >
// //         <Typography
// //           variant="h6"
// //           className={cn("font-karla group-hover:dark:text-dark", className)}
// //         >
// //           {title}
// //         </Typography>
// //         {/* {children && <p className="leading-[1.4] text-mauve11">{children}</p>} */}
// //       </button>
// //     );
// //   }

// //   return (
// //     <Link
// //       href={href ?? ""}
// //       passHref
// //       className={cn(
// //         "px-4 py-[8px] font-karla group rounded-radius-lg hover:bg-primary-50 border border-transparent hover:border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 leading-none no-underline outline-none transition-colors",
// //         isActive ? "bg-primary-400 text-white border border-primary-200" : "",

// //       )}
// //       ref={ref as React.Ref<HTMLAnchorElement>}
// //     >
// //       <Typography
// //         variant="h6"
// //         className={cn("font-karla group-hover:dark:text-dark", className)}
// //       >
// //         {title}
// //       </Typography>
// //     </Link>
// //   );
// // });

// // ListItem.displayName = "ListItem";

// // export default ListItem;

// import { cn } from "@/utils/util";
// import Link from "next/link";
// import React from "react";
// import Typography from "./Typography";
// import { usePathname } from "next/navigation";

// interface BaseProps {
//   className?: string;
//   children?: React.ReactNode;
//   title: string;
//   as?: "link" | "button";
//   variant?: "solid" | "glass";
// }

// type LinkProps = BaseProps & {
//   as: "link";
//   href: string;
//   onClick?: never;
//   className?: string;
// };

// type ButtonProps = BaseProps & {
//   as: "button";
//   href?: never;
//   onClick?: () => void;
//   className?: string;
// };

// type ListItemProps = LinkProps | ButtonProps;

// const ListItem = React.forwardRef<
//   HTMLAnchorElement | HTMLButtonElement,
//   ListItemProps
// >(
//   (
//     { className, title, href, onClick, as = "link", variant = "solid" },
//     ref,
//   ) => {
//     const pathname = usePathname();
//     const isActive = as === "link" && href === pathname;

//     const variantClasses =
//       variant === "solid"
//         ? "rounded-radius-lg hover:bg-primary-50 group border border-transparent hover:border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:text-white leading-none no-underline outline-none transition-colors" :
//         variant === "glass" ? "rounded-radius-lg group border border-transparent hover:border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:text-white leading-none no-underline outline-none transition-colors" : ""

//     if (as === "button") {
//       return (
//         <button
//           className={cn(
//             "px-4 py-[8px] font-karla w-full block text-left",
//             variantClasses,
//             className,
//           )}
//           onClick={onClick}
//           ref={ref as React.Ref<HTMLButtonElement>}
//         >
//           <Typography
//             variant="h6"
//             className={cn("font-karla", className)}
//           >
//             {title}
//           </Typography>
//         </button>
//       );
//     }

//     return (
//       <Link
//         href={href ?? ""}
//         passHref
//         className={cn(
//           "px-4 py-[8px] font-karla w-full block",
//           isActive
//             ? "bg-primary-400 text-white border border-primary-200"
//             : variantClasses,
//           className,
//         )}
//         ref={ref as React.Ref<HTMLAnchorElement>}
//       >
//         <Typography
//           variant="h6"
//           className={cn("font-karla group-hover:dark:text-dark", className)}
//         >
//           {title}
//         </Typography>
//       </Link>
//     );
//   },
// );

// ListItem.displayName = "ListItem";

// export default ListItem;

import { cn } from "@/utils/util";
import Link from "next/link";
import React from "react";
import Typography from "./Typography";
import { usePathname } from "next/navigation";
import Caption from "./Caption";

interface BaseProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  as?: "link" | "button";
  variant?: "solid" | "glass";
  icon?: React.ReactNode;
}

type LinkProps = BaseProps & {
  as: "link";
  href: string;
  onClick?: never;
  className?: string;
};

type ButtonProps = BaseProps & {
  as: "button";
  href?: never;
  onClick?: () => void;
  className?: string;
};

type ListItemProps = LinkProps | ButtonProps;

const ListItem = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ListItemProps
>(
  (
    { className, title, href, onClick, as = "link", variant = "solid", icon },
    ref,
  ) => {
    const pathname = usePathname();
    const isActive = as === "link" && href === pathname;

    const variantClasses =
      variant === "solid"
        ? "rounded-radius-lg hover:bg-primary-50 text-dark group border border-transparent hover:border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:text-white leading-none no-underline outline-none transition-colors"
        : variant === "glass"
        ? "rounded-radius-lg group border border-transparent hover:border-primary-200 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:text-white leading-none no-underline outline-none transition-colors"
        : "";

    if (as === "button") {
      return (
        <button
          className={cn("px-4 py-[8px] group font-karla w-full text-left flex items-center gap-2", variantClasses, className)}
          onClick={onClick}
          ref={ref as React.Ref<HTMLButtonElement>}
        >
          <Typography variant="h6" className={cn("font-karla group-hover:dark:text-dark", className)}>
            {title}
          </Typography>
          {icon && <span className="text-dark dark:text-white">{icon}</span>}
        </button>
      );
    }

    return (
      <Link
        href={href ?? ""}
        passHref
        className={cn(
          "px-4 py-[8px] font-karla w-full flex items-center gap-2 group",
          isActive
            ? "bg-primary-400 text-white border border-primary-200"
            : variantClasses,
          className,
        )}
        ref={ref as React.Ref<HTMLAnchorElement>}
      >
        <Typography
          variant="h6"
          className={cn("font-karla group-hover:dark:text-dark", className)}
        >
          {title}
        </Typography>
        {icon && <Caption variant="md" className="text-dark dark:text-white group-hover:dark:text-dark">{icon}</Caption>}
      </Link>
    );
  },
);

ListItem.displayName = "ListItem";

export default ListItem;
