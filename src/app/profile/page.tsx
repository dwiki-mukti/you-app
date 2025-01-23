'use client'

import HeaderBar from '@/components/HeaderBar';
import BannerProfile from './_partials/BannerProfile';
import AboutProfile from './_partials/AboutProfile';
import InterestProfie from './_partials/InterestProfie';
import { useAppContext } from '@/contexts/AppContext';
import { DotsThreeOutline, SignOut } from '@phosphor-icons/react';
import { useState } from 'react';
import { onLogout } from '@/utils/api';

export default function Page() {
    const { UserAuthed } = useAppContext();
    const [ShowAction, setShowAction] = useState(false);


    return (
        <div className='px-4'>
            <HeaderBar
                centerElement={`@${UserAuthed?.username ?? ''}`}
                rightElement={(
                    <div className='ml-auto relative'>
                        <div className='px-4 cursor-pointer' onClick={() => setShowAction(true)}>
                            <DotsThreeOutline weight='fill' />
                        </div>
                        {ShowAction && (
                            <div className='absolute bg-gray-900 right-0 px-4 py-2 rounded-lg'>
                                <div
                                    onClick={() => onLogout()}
                                    className='flex gap-2 items-center hover:text-red-500 cursor-pointer'
                                >
                                    <SignOut className='text-lg' />
                                    <div className='text-xs'>Logout</div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            />
            <BannerProfile />
            <AboutProfile />
            <InterestProfie />
        </div>
    )
}
