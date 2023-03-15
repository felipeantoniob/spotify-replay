import { cva, type VariantProps } from 'class-variance-authority'
import type { ClassValue } from 'class-variance-authority/dist/types'
import type { ButtonHTMLAttributes, FC } from 'react'
import { twMerge } from 'tailwind-merge'

const buttonVariants = cva(
  'group flex flex-row justify-center items-center gap-2 rounded-2xl transition-all bg-transparent',
  {
    variants: {
      intent: {
        none: [],
        primary: [
          'bg-primary text-on-primary',
          'focus-visible:border-[1px] focus-visible:border-dashed focus-visible:border-on-primary-container focus-visible:bg-primary-container',
        ],
        secondary: [
          'bg-primary-container text-on-primary-container',
          'border-[1px] border-primary-container',
        ],
        navigation: [
          'bg-transparent text-primary',
          'hover:bg-on-primary-container/25',
          'focus-visible:border-[1px] focus-visible:border-dashed focus-visible:border-on-primary-container focus-visible:bg-primary-container',
        ],
        outline: [
          'bg-transparent text-white',
          'border-[1px] border-outline',
          'hover:bg-[#C8B5E1] hover:text-on-primary-container',
        ],
        spotify: ['bg-spotify-green text-on-surface', 'rounded-full'],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-3'],
        medium: ['text-base', 'py-2', 'px-6'],
        large: ['text-lg', 'py-3', 'px-9'],
      },
    },
    defaultVariants: {
      intent: 'none',
      size: 'medium',
    },
  }
)

type ButtonVariants = VariantProps<typeof buttonVariants>

export const button = (variants: ButtonVariants & { className: ClassValue }) =>
  twMerge(buttonVariants(variants))

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button: FC<ButtonProps> = ({ className, intent, size, ...props }) => (
  <button className={button({ intent, size, className })} {...props} />
)
