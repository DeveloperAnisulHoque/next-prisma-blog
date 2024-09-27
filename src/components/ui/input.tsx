import * as React from "react";
import { cn } from "@/lib/utils"; // Assuming this is a utility function for classNames

// ForwardRef Input Component without custom interface
const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-md border border-input bg-transparent px-3 text-sm shadow-sm",
        "transition-colors placeholder:text-muted-foreground file:border-0 file:bg-transparent",
        "file:text-sm file:font-medium file:text-foreground focus-visible:outline-none",
        "focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed",
        "disabled:opacity-50",
        className // Allow custom class names to override defaults
      )}
      {...props} // Spread the rest of the props (e.g. value, onChange, etc.)
    />
  );
});

Input.displayName = "Input";

export { Input };
