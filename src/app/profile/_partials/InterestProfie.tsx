'use client'

import Badge from '@/components/Badge';
import { useAppContext } from '@/contexts/AppContext';
import { PencilSimpleLine } from '@phosphor-icons/react';
import Link from 'next/link';

export default function InterestProfie() {
    const { UserAuthed } = useAppContext();



    /**
     * Render JSX
     */
    return (
        <div className='bg-gray-500/5 px-4 py-4 mt-4 rounded-xl'>
            <div className='flex items-center justify-between'>
                <div className='font-bold'>Interest</div>
                <div>
                    <Link href={'/profile/edit-interest'} className='cursor-pointer'>
                        <PencilSimpleLine />
                    </Link>
                </div>
            </div>
            <div className='text-sm my-4'>
                {UserAuthed?.interests?.length ? (
                    <div>
                        {UserAuthed.interests?.map((interest, indexInterest) => (
                            <div key={indexInterest} className='inline-block m-1 capitalize'>
                                <Badge>{interest}</Badge>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='py-2 text-gray-400'>
                        {`Add in your interest to find a better match`}
                    </div>
                )}
            </div>
        </div>
    )
}
