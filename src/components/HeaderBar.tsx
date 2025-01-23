'use client'

import { CaretLeft } from '@phosphor-icons/react';
import Link from 'next/link';
import React, { ReactNode } from 'react'

export default function HeaderBar({
    linkBack, leftElement, centerElement, rightElement
}: {
    linkBack?: string;
    leftElement?: ReactNode;
    centerElement?: ReactNode;
    rightElement?: ReactNode;
}) {
    return (
        <div className='pt-2'>
            <div className='flex items-center h-[4rem]'>
                <div className='w-[4rem] flex'>
                    {Boolean(linkBack) && (
                        <Link href={String(linkBack)} className='flex items-center pl-4'>
                            <CaretLeft className='text-2xl' />
                            <span className='text-sm font-medium'>Back</span>
                        </Link>
                    )}
                    {leftElement}
                </div>
                <div className='grow text-center'>{centerElement}</div>
                <div className='w-[4rem] flex'>{rightElement}</div>
            </div>
        </div>
    )
}
