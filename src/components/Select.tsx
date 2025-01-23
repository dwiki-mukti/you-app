import { cn } from '@/utils/styling';
import React, { DetailedHTMLProps, SelectHTMLAttributes, useState } from 'react'

export default function Select({
    name,
    value,
    onChange,
    className,

    options,
    stateHandler,

    ...props
}: DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> & {
    name: string;
    stateHandler?: [typeStateInput, React.Dispatch<React.SetStateAction<typeStateInput>>];
    options?: any[]
}) {
    const defaultStateHandler = useState({} as typeStateInput);
    const [getter, setter] = stateHandler || defaultStateHandler;

    return (
        <select
            className={cn(
                'bg-white/5 rounded-xl px-6 w-full h-[3.5rem]',
                'disabled:text-gray-600',
                className
            )}
            name={name}
            value={getter.values?.[name] ?? ''}
            onChange={(e) => {
                if (onChange) onChange(e);
                setter((prev) => ({
                    ...prev,
                    values: {
                        ...(prev?.values ?? {}),
                        [name]: e.target.value
                    }
                }))
            }}
            {...props}
        >
            {options?.map((opt, indexOpt) => (
                <option key={indexOpt} value={opt?.value ?? opt} className='text-black'>
                    {opt.label ?? opt}
                </option>
            ))}
        </select>
    )
}
