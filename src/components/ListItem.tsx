// import { cn } from "@/utils/util";
// import Link from "next/link";
// import React from "react";

// interface BaseProps {
//   className?: string;
//   children?: React.ReactNode;
//   title: string;
//   as?: "link" | "button";
// }

// type LinkProps = BaseProps & {
//   as: "link";
//   href: string;
//   onClick?: never;
// };

// type ButtonProps = BaseProps & {
//   as: "button";
//   href?: never;
//   onClick?: () => void;
// };

// type ListItemProps = LinkProps | ButtonProps;

// const ListItem = React.forwardRef<HTMLAnchorElement | HTMLButtonElement, ListItemProps>(
//   ({ className, children, title, href, onClick, as = "link" }, ref) => {
//     if (as === "button") {
//       return (
//         <button
//           className={cn(
//             "block select-none font-karla rounded-md leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
//             className
//           )}
//           onClick={onClick}
//           ref={ref as React.Ref<HTMLButtonElement>}
//         >
//           <div className="font-karla">{title}</div>
//           {/* {children && <p className="leading-[1.4] text-mauve11">{children}</p>} */}
//         </button>
//       );
//     }

//     return (
//       <Link
//         href={href!}
//         passHref
//         legacyBehavior
//         className={cn(
//           "block select-none font-karla rounded-md leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
//           className
//         )}
//         ref={ref as React.Ref<HTMLAnchorElement>}
//       >
//         <div className="font-karla">{title}</div>
//         {/* {children && <p className="leading-[1.4] text-mauve11">{children}</p>} */}
//       </Link>
//     );
//   }
// );

// ListItem.displayName = "ListItem";

// export default ListItem;

import { cn } from "@/utils/util";
import Link from "next/link";
import React from "react";

interface BaseProps {
  className?: string;
  children?: React.ReactNode;
  title: string;
  as?: "link" | "button";
}

type LinkProps = BaseProps & {
  as: "link";
  href: string;
  onClick?: never;
};

type ButtonProps = BaseProps & {
  as: "button";
  href?: never;
  onClick?: () => void;
};

type ListItemProps = LinkProps | ButtonProps;

const ListItem = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ListItemProps
>(({ className, title, href, onClick, as = "link" }, ref) => {
  if (as === "button") {
    return (
      <button
        className={cn(
          "block select-none font-karla rounded-md leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
          className,
        )}
        onClick={onClick}
        ref={ref as React.Ref<HTMLButtonElement>}
      >
        <div className="font-karla">{title}</div>
        {/* {children && <p className="leading-[1.4] text-mauve11">{children}</p>} */}
      </button>
    );
  }

  return (
    <Link
      href={href!}
      passHref
      className={cn(
        "block select-none font-karla rounded-md leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7",
        className,
      )}
      ref={ref as React.Ref<HTMLAnchorElement>}
    >
      <div className="font-karla">{title}</div>
      {/* {children && <p className="leading-[1.4] text-mauve11">{children}</p>} */}
    </Link>
  );
});

ListItem.displayName = "ListItem";

export default ListItem;
