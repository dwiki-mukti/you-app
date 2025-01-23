import { cn } from '@/utils/styling';
import { Plus } from '@phosphor-icons/react'
import React, { Dispatch } from 'react'

export default function InputAvatar({
    About, setAbout
}: {
    About: Record<string, any>;
    setAbout: Dispatch<React.SetStateAction<Record<string, any>>>;
}) {
    return (
        <div className='flex py-4'>
            <label
                htmlFor="inputAvatar" className='flex items-center gap-4 cursor-pointer'>
                <div
                    className={cn(
                        'aspect-square h-[4rem] flex rounded-2xl bg-amber-50/10 text-amber-200',
                        'bg-center bg-no-repeat bg-cover'
                    )}
                    style={{
                        backgroundImage: About.inputAvatar ? `URL('${About.inputAvatar}')` : ''
                    }}
                >
                    {(!About.inputAvatar) && (
                        <Plus className='m-auto text-2xl' weight='bold' />
                    )}
                </div>
                <div>Add Image</div>
            </label>
            <input
                type="file"
                id='inputAvatar'
                className='hidden'
                onChange={(event) => {
                    const blobFile = event.target.files?.[0]
                    setAbout(({ inputAvatar, ...prev }) => {
                        if (blobFile) prev.inputAvatar = URL.createObjectURL(blobFile);
                        return prev;
                    })
                }}
            />
        </div>
    )
}
