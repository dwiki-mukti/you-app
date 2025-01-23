import React, { DetailedHTMLProps, InputHTMLAttributes, use, useEffect, useState } from 'react'
import { Eye, EyeSlash } from '@phosphor-icons/react'
import { cn } from '@/utils/styling';
import { formatValueInputDate } from '@/utils/mutator';

export default function Input({
    name,
    type,
    value,
    onChange,
    className,

    validation,
    stateHandler,

    ...props
}: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    name: string;
    stateHandler?: [typeStateInput, React.Dispatch<React.SetStateAction<typeStateInput>>];
    validation?: typeValidations
}) {
    const defaultStateHandler = useState({} as typeStateInput);
    const [getter, setter] = stateHandler || defaultStateHandler;
    const [IsVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (
            (value != undefined && value != getter?.values?.[name]) ||
            (
                validation != undefined &&
                JSON.stringify(validation) != JSON.stringify(getter?.validations?.[name])
            )
        ) {
            setter((prev) => ({
                ...prev,
                values: { ...(prev?.values ?? {}), [name]: value },
                validations: { ...(prev?.validations ?? {}), [name]: validation ?? {} },
            }))
        }
    }, [value, validation])


    return (
        <div className='flex'>
            <input
                type={type == 'password' ? (IsVisible ? 'text' : 'password') : type}
                className={cn(
                    'bg-white/5 rounded-xl px-6 grow h-[3.5rem]',
                    'disabled:text-gray-600',
                    className
                )}
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
                value={getter?.values?.[name] ? (
                    type == 'date' ? formatValueInputDate(getter?.values?.[name]) : getter?.values?.[name]
                ) : ''}
                {...props}
            />
            {(type == 'password') && (
                <div className='flex -ml-8'>
                    {IsVisible ? (
                        <EyeSlash
                            className='my-auto w-4 mr-4 cursor-pointer'
                            onClick={() => (setIsVisible((prev) => (false)))}
                        />
                    ) : (
                        <Eye
                            className='my-auto w-4 mr-4 cursor-pointer'
                            onClick={() => (setIsVisible((prev) => (true)))}
                        />
                    )}
                </div>
            )}
        </div>
    )
}
