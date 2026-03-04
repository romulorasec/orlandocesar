import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "w-full min-w-0 text-base transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
  {
    variants: {
      variant: {
        filled:
          "h-9 rounded-md border border-input bg-muted px-3 py-2 shadow-xs dark:bg-input/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/30 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-valid:border-green-600 aria-valid:ring-green-600/20 dark:aria-valid:ring-green-600/40",
        lined:
          "h-9 px-0 py-2 border-0 border-b-2 border-border bg-transparent focus-visible:border-ring focus-visible:outline-none aria-invalid:border-destructive aria-valid:border-green-600",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  }
)

interface InputProps
  extends React.ComponentProps<"input">,
    VariantProps<typeof inputVariants> {}

function Input({
  className,
  type,
  variant,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      data-variant={variant}
      className={cn(inputVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Input, inputVariants }
