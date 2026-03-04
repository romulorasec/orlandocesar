import * as React from "react"
import { cn } from "@/lib/utils"

type FormFieldState = "empty" | "filled" | "active" | "error" | "validated"

interface FormFieldProps {
  label?: string
  helperText?: string
  state?: FormFieldState
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  error?: boolean
  className?: string
  children: React.ReactElement
}

function FormField({
  label,
  helperText,
  state = "empty",
  leftIcon,
  rightIcon,
  error = false,
  className,
  children,
}: FormFieldProps) {
  const isError = error || state === "error"
  const isValidated = state === "validated"

  const helperTextColor = isError
    ? "text-destructive"
    : isValidated
      ? "text-green-600 dark:text-green-500"
      : "text-muted-foreground"

  return (
    <div className={cn("w-full space-y-1.5", className)}>
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}

      <div className="relative flex items-center gap-0">
        {leftIcon && (
          <div className="absolute left-3 flex items-center pointer-events-none text-muted-foreground">
            {leftIcon}
          </div>
        )}

        <div
          className={cn(
            "w-full",
            leftIcon && "pl-10",
            rightIcon && "pr-10"
          )}
        >
          {React.cloneElement(children, {
            className: cn(
              (children.props as any).className,
            ),
            ...(isError && { "aria-invalid": true }),
            ...(isValidated && { "aria-valid": true }),
          } as any)}
        </div>

        {rightIcon && (
          <div className={cn(
            "absolute right-3 flex items-center pointer-events-none",
            isError ? "text-destructive" : isValidated ? "text-green-600 dark:text-green-500" : "text-primary"
          )}>
            {rightIcon}
          </div>
        )}
      </div>

      {helperText && (
        <p className={cn("text-xs", helperTextColor)}>{helperText}</p>
      )}
    </div>
  )
}

export { FormField, type FormFieldState }
