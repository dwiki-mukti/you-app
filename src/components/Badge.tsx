import { cn } from '@/utils/styling'
import React, { ReactNode } from 'react'

export default function Badge({
    children
}: {
    children: ReactNode
}) {
    return (
        <div className={cn(
            'px-4 h-[2rem] text-xs rounded-full',
            'flex items-center bg-white/5 backdrop-blur-xl'
        )}>
            {children}
        </div>
    )
}
