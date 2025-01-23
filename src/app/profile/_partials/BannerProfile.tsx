import Badge from '@/components/Badge';
import { useAppContext } from '@/contexts/AppContext';
import { getDetailHoroscope } from '@/utils/mutator';
import { cn } from '@/utils/styling';
import { DateTime } from 'luxon';
import Image from 'next/image';
import React from 'react'

export default function BannerProfile() {
    const { UserAuthed } = useAppContext();
    return (
        <div
            className={cn(
                'px-4 py-4 h-[220px] rounded-2xl flex flex-col',
                'bg-gray-800 bg-center bg-no-repeat bg-cover',
            )}
            style={{
                backgroundImage: `URL('${UserAuthed?.inputAvatar ?? ''}')`,
            }}
        >
            <div className='mt-auto'>
                <div>
                    {`@${UserAuthed?.username}, `}
                    {Math.floor(DateTime.now().diff(DateTime.fromJSDate(new Date(UserAuthed?.birthday ?? '')), ['year']).years)}
                </div>
                <div className='text-xs leading-5'>{UserAuthed?.gender}</div>
            </div>
            <div className='flex gap-2 mt-3'>
                <Badge>
                    <span className='text-base'>{getDetailHoroscope(UserAuthed?.horoscope ?? '')?.emote}</span>
                    <span className='ml-1'>{UserAuthed?.horoscope}</span>
                </Badge>
                <Badge>
                    <Image
                        src={'/assets/icons/Zodiac.png'}
                        alt='Zodiac Icon' width={20} height={20}
                    />
                    <span className='ml-1'>{UserAuthed?.zodiac}</span>
                </Badge>
            </div>
        </div>
    )
}
