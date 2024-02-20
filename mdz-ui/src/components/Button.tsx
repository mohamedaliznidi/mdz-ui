import { useButton } from 'react-aria';
import { useRef } from 'react';
import { cva, type VariantProps } from "class-variance-authority";

const button = cva("button",{
  variants: {
    intent: {
      primary: [
        "bg-primary-9",
        "text-primary-1",
        "border-transparent",
        "hover:bg-primary-10",
        "hover:border-primary-5",
        "focus:ring-primary-7",
        "focus:outline-primary-7",
      ],
      secondary: [
        "bg-secondary-9",
        "text-secondary-1",
        "border-transparent",
        "hover:bg-secondary-10",
        "hover:border-secondary-5",
        "focus:ring-secondary-7",
        "focus:outline-secondary-7",
      ],
      success: [
        "bg-success-9",
        "text-success-1",
        "border-transparent",
        "hover:bg-success-10",
        "hover:border-success-5",
        "focus:ring-success-7",
        "focus:outline-success-7",
      ],
      error: [
        "bg-error-9",
        "text-error-1",
        "border-transparent",
        "hover:bg-error-10",
        "hover:border-error-5",
        "focus:ring-error-7",
        "focus:outline-error-7",
      ],
      warning: [
        "bg-warning-9",
        "text-warning-1",
        "border-transparent",
        "hover:bg-warning-10",
        "hover:border-warning-5",
        "focus:ring-warning-7",
        "focus:outline-warning-7",
      ],
      info: [
        "bg-info-9",
        "text-info-1",
        "border-transparent",
        "hover:bg-info-10",
        "hover:border-info-5",
        "focus:ring-info-7",
        "focus:outline-info-7",
      ],
      gray: [
        "bg-gray-9",
        "text-gray-1",
        "border-transparent",
        "hover:bg-gray-10",
        "hover:border-gray-5",
        "focus:ring-gray-7",
        "focus:outline-gray-7",
      ]
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
      large: ["text-lg", "py-3", "px-6"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof button> { }

export const MDZButton: React.FC<ButtonProps> = (props) => {
  const ref = useRef();
  const { buttonProps } = useButton(props, ref);
  const { className, intent, size, children } = props;
  return <button className={button({ intent, size, className })}  {...buttonProps} ref={ref} > {children}</button>;
};