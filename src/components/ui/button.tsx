import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-transparent border-2 border-primary text-primary shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-0.5",
        destructive: "bg-transparent border-2 border-destructive text-destructive shadow-md hover:shadow-lg transform hover:scale-105",
        outline: "bg-transparent border-2 border-primary text-primary shadow-sm hover:shadow-md transform hover:scale-105",
        secondary: "bg-transparent border-2 border-secondary text-secondary shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-0.5",
        ghost: "bg-transparent text-primary hover:text-primary-dark transform hover:scale-105",
        link: "bg-transparent text-primary underline-offset-4 hover:underline hover:text-secondary",
        hero: "bg-transparent border-2 border-accent text-accent shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1",
        premium: "bg-transparent border-2 border-secondary text-secondary shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1",
        accent: "bg-transparent border-2 border-accent text-accent shadow-md hover:shadow-lg transform hover:scale-105"
      },
      size: {
        default: "h-11 px-6 py-3 text-base",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-14 rounded-xl px-8 text-lg font-semibold",
        xl: "h-16 rounded-xl px-10 text-xl font-bold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
