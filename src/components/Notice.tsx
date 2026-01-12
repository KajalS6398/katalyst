import React, { type HTMLAttributes, type ReactNode } from "react";
import { cn } from "@/utils/util";
import { type VariantProps, cva } from "class-variance-authority";
import {
  RiAlertFill,
  RiCloseLine,
  RiErrorWarningLine,
  RiQuestionLine,
  RiThumbUpLine,
  RiShieldCheckLine,
} from "react-icons/ri";

type NoticeVariant = "success" | "warning" | "info" | "error" | "default";

const variantIconMap: Record<NoticeVariant, React.ReactElement> = {
  success: <RiThumbUpLine size={20} color="#fff" />,
  warning: <RiQuestionLine size={20} color="#fff" />,
  info: <RiErrorWarningLine size={20} color="#fff" />,
  error: <RiAlertFill size={20} color="#fff" />,
  default: <RiShieldCheckLine size={20} color="#fff" />,
};

const VariantIcon = ({ variant }: { variant: NoticeVariant }) => (
  <span>{variantIconMap[variant]}</span>
);

const noticeVariants = cva(
  "fixed z-[10000000000] p-4 w-fit rounded-[6px] shadow-sm text-white transition-all duration-700",
  {
    variants: {
      variant: {
        success: "bg-success",
        warning: "bg-[#ffaa33]",
        info: "bg-primary-700",
        error: "bg-error",
        default: "bg-gray-800",
      },
      position: {
        "top-left": "top-4 left-4 mx-auto slide-in-top-left",
        "top-right": "top-4 right-4 mx-auto slide-in-top-right",
        "bottom-left": "bottom-4 left-4 slide-in-bottom-left",
        "bottom-right": "bottom-4 right-4 slide-in-bottom-right",
        "top-center": "top-4 left-0 right-0 mx-auto slide-in-top",
        "bottom-center": "bottom-4 left-0 right-0 mx-auto slide-in-bottom",
      },
    },
    defaultVariants: {
      position: "top-left",
      variant: "default",
    },
  },
);

interface NoticeProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof noticeVariants> {
  children?: ReactNode;
  noticeTitle?: string;
  variant?: NoticeVariant;
  position:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "top-center"
    | "bottom-center";
  showIcon?: boolean;
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Notice = ({
  children,
  noticeTitle,
  variant = "default",
  position = "top-left",
  showIcon = true,
  open,
  setOpen,
  className,
  ...props
}: NoticeProps) => {
  if (!open) return null;

  const hasTitle = Boolean(noticeTitle?.length);

  return (
    <div
      {...props}
      className={cn(noticeVariants({ variant, position }), className)}
    >
      <div className="relative pr-8">
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-0 right-0 cursor-pointer"
          aria-label="Close notice"
        >
          <RiCloseLine size={20} />
        </button>

        <div className="flex items-start gap-2">
          {showIcon && <VariantIcon variant={variant} />}

          <div>
            {hasTitle && (
              <p className="font-bold text-sm mb-1">{noticeTitle}</p>
            )}
            <p className="text-sm">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
