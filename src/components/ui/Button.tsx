import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "dark" | "light" | "outline";
  size?: "default" | "large";
};

export function Button({ children, className = "", variant = "dark", size = "default", ...props }: ButtonProps) {
  return (
    <a className={`button button--${variant} button--${size} ${className}`} {...props}>
      <span className="button__text">{children}</span>
      <span className="button__dot" aria-hidden="true" />
    </a>
  );
}
