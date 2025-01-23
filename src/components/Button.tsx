import { cn } from '@/utils/styling'
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'

export default function Button({
    className,
    children,
    variant,
    disabled,
    ...props
}: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
> & { variant?: 'primary' }) {
    return (
        <button
            className={cn(
                'w-full h-[3.5rem] rounded-xl',
                {
                    'bg-gradient-to-r from-[#62CDCB] to-[#4599DB] shadow-lg shadow-[#4599DB]': variant == 'primary'
                },
                'disabled:opacity-30',
                className
            )}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}
