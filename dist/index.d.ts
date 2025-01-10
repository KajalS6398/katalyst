import React, { ButtonHTMLAttributes, ReactNode, HTMLAttributes, InputHTMLAttributes, LabelHTMLAttributes, TextareaHTMLAttributes, ElementType } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';

type AccordionProps = {
    type?: "single" | "multiple";
    collapsible?: boolean;
    className?: string;
    children: React.ReactNode;
};
declare function Accordion({ type, collapsible, className, children, }: AccordionProps): React.JSX.Element;
type AccordionItemProps = {
    value: string;
    disabled?: boolean;
    openItems?: string[];
    handleToggle?: (value: string) => void;
    children: React.ReactNode;
};
declare function AccordionItem({ value, disabled, openItems, handleToggle, children, }: AccordionItemProps): React.JSX.Element;
type AccordionTriggerProps = {
    isOpen?: boolean;
    children: React.ReactNode;
};
declare function AccordionTrigger({ isOpen, children }: AccordionTriggerProps): React.JSX.Element;
type AccordionContentProps = {
    isOpen?: boolean;
    children: React.ReactNode;
};
declare function AccordionContent({ isOpen, children }: AccordionContentProps): React.JSX.Element;

interface ButtonProps$2 extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children?: ReactNode;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    disabled?: boolean;
    fullWidth?: boolean;
    rounded?: boolean;
}
declare const buttonVariants: (props?: ({
    variant?: "primary" | "primary-light" | "secondary" | "tertiary" | "quaternary" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Button: ({ children, startIcon, endIcon, fullWidth, rounded, disabled, className, variant, size, ...props }: ButtonProps$2) => React.JSX.Element;

interface CaptionProps extends HTMLAttributes<HTMLSpanElement>, VariantProps<typeof captionVariants> {
    children: ReactNode;
}
declare const captionVariants: (props?: ({
    variant?: "sm" | "md" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Caption: ({ children, variant, className, ...props }: CaptionProps) => React.JSX.Element;

interface CardProps {
    children?: ReactNode;
    className?: string;
}
interface CardBgProps extends CardProps {
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
}
declare function Card({ children, className }: CardProps): React.JSX.Element;
declare const CardIcon: ({ children, className }: CardProps) => React.JSX.Element;
declare const CardHeader: ({ children, className }: CardProps) => React.JSX.Element;
declare const CardBg: ({ children, className, src, alt, width, height, }: CardBgProps) => React.JSX.Element;
declare const CardTitle: ({ children, className }: CardProps) => React.JSX.Element;
declare const CardDescription: ({ children, className }: CardProps) => React.JSX.Element;
declare const CardContent: ({ children, className }: CardProps) => React.JSX.Element;
declare const CardFooter: ({ children, className }: CardProps) => React.JSX.Element;

interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
    disabled?: boolean;
    checked?: boolean;
    readOnly?: boolean;
    children?: never;
}
declare const Checkbox: React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLInputElement>>;

interface ButtonProps$1 extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof chipVariants> {
    children?: ReactNode;
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
}
declare const chipVariants: (props?: ({
    variant?: "primary" | "secondary" | "glass" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Chip: ({ children, className, variant, startIcon, endIcon, size, ...props }: ButtonProps$1) => React.JSX.Element;

interface DropdownProps {
    triggerIcon?: React.ReactNode;
    children: React.ReactNode;
    width?: string;
}
declare function Dropdown({ triggerIcon, children, width, }: DropdownProps): React.JSX.Element;
interface MenuItemProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
}
declare const MenuItem: React.FC<MenuItemProps>;
interface MenuSubItemProps {
    label: string;
    children: React.ReactNode;
}
declare const MenuSubItem: React.FC<MenuSubItemProps>;

interface FooterProps {
    children: ReactNode;
    className?: string;
    footerBottom?: JSX.Element;
}
interface FooterHeaderProps {
    children: ReactNode;
    className?: string;
}
interface FooterContentProps {
    children: ReactNode;
    className?: string;
}
type FooterListType = {
    text: string;
    link: string;
};
interface FooterListProps {
    footerItems: {
        label: string;
        content: FooterListType[];
    }[];
    target?: "_blank" | "_self" | "_top" | "_parent";
}
type FooterIconType = {
    icon: JSX.Element;
    link: string;
};
interface FooterIconsProps {
    icons: FooterIconType[];
}
declare function Footer({ children, className, footerBottom, }: FooterProps): React.JSX.Element;
declare const FooterHeader: ({ children, className }: FooterHeaderProps) => React.JSX.Element;
declare const FooterContent: ({ children, className }: FooterContentProps) => React.JSX.Element;
declare const FooterList: ({ footerItems, target }: FooterListProps) => React.JSX.Element;
declare const FooterIcons: ({ icons }: FooterIconsProps) => React.JSX.Element;

interface ImageCardProps {
    children?: ReactNode;
    className?: string;
    cardTitle?: string;
    cardDesc?: string;
    cardImg?: string;
}
declare const ImageCard: ({ cardTitle, cardDesc, cardImg, children, className, }: ImageCardProps) => React.JSX.Element;

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    disabled?: boolean;
    type: "text" | "url" | "email" | "password" | "number" | "tel" | "search";
}
declare const inputVariants: (props?: ({
    variant?: "default" | "glass" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> {
    htmlFor?: string;
    children: ReactNode;
    required?: boolean;
    disabled?: boolean;
}
declare const labelVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Label: ({ children, htmlFor, size, required, disabled, className, ...props }: LabelProps) => React.JSX.Element;

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
declare const ListItem: React.ForwardRefExoticComponent<ListItemProps & React.RefAttributes<HTMLButtonElement | HTMLAnchorElement>>;

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof paragraphVariants> {
    children: ReactNode;
}
declare const paragraphVariants: (props?: ({
    variant?: "b1" | "b2" | "b3" | "b4" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Paragraph: ({ children, className, variant, ...props }: ParagraphProps) => React.JSX.Element;

interface SliderProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    value: number;
    min?: number;
    max?: number;
    size?: "sm" | "lg";
}
declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<HTMLInputElement>>;

interface StatsCardProps {
    children?: ReactNode;
    cardIcon?: ReactNode;
    className?: string;
    statTitle?: string;
    statDesc?: string;
}
declare const StatsCard: ({ statTitle, statDesc, className, cardIcon, }: StatsCardProps) => React.JSX.Element;

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>, VariantProps<typeof textareaVariants> {
    disabled?: boolean;
    rows?: number;
    cols?: number;
    children?: ReactNode;
}
declare const textareaVariants: (props?: ({
    variant?: "default" | "glass" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;

interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size">, VariantProps<typeof toggleVariants> {
    icon?: JSX.Element;
    children?: never;
    size?: "sm" | "lg";
    disabled?: boolean;
}
declare const toggleVariants: (props?: ({
    size?: "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLInputElement>>;

interface TypographyProps extends HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof typographyVariant> {
    as?: ElementType;
    children: ReactNode;
}
declare const typographyVariant: (props?: ({
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const Typography: ({ as, variant, children, className, ...props }: TypographyProps) => React.JSX.Element;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button, Caption, Card, CardBg, CardContent, CardDescription, CardFooter, CardHeader, CardIcon, CardTitle, Checkbox, Chip, Dropdown, Footer, FooterContent, FooterHeader, FooterIcons, FooterList, ImageCard, Input, Label, ListItem, MenuItem, MenuSubItem, Paragraph, Slider, StatsCard, Textarea, Toggle, Typography };
