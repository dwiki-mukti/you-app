import React from 'react'

export default function ItemAboutDisplay({
    label, value
}: { label?: string; value?: string }) {
    return (
        <div className='flex gap-1 pt-3'>
            <div className='text-gray-500'>{label ?? ''}:</div>
            <div>{value ?? '-'}</div>
        </div>
    )
}
