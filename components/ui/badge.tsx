import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full border border-transparent px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:opacity-50 disabled:cursor-not-allowed [&>svg]:pointer-events-none [&>svg]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 active:bg-secondary/80",
        accent:
          "bg-accent text-accent-foreground hover:bg-accent/90 active:bg-accent/80",
        dark:
          "bg-foreground text-background hover:bg-foreground/90 active:bg-foreground/80",
        outline:
          "border border-border text-foreground hover:bg-muted/50 active:bg-muted dark:border-input dark:hover:bg-input/30",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:bg-destructive/60 dark:focus-visible:ring-destructive/40",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

interface BadgeProps
  extends Omit<React.ComponentProps<"span">, "disabled">,
    VariantProps<typeof badgeVariants> {
  asChild?: boolean
  onClose?: () => void
  icon?: React.ReactNode
  closeIcon?: React.ReactNode
  disabled?: boolean
}

function Badge({
  className,
  variant = "default",
  asChild = false,
  onClose,
  icon,
  closeIcon,
  disabled = false,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      data-disabled={disabled}
      className={cn(
        badgeVariants({ variant }),
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      {...props}
    >
      {icon && <span className="inline-flex items-center">{icon}</span>}
      <span className="inline-flex items-center gap-1">{children}</span>
      {onClose && !disabled && (
        <button
          onClick={onClose}
          className="inline-flex items-center hover:opacity-70 transition-opacity"
          aria-label="Close"
        >
          {closeIcon || <X className="h-3 w-3" />}
        </button>
      )}
    </Comp>
  )
}

export { Badge, badgeVariants }
