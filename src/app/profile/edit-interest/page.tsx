'use client'

import BgRadial from '@/components/BgRadial'
import HeaderBar from '@/components/HeaderBar'
import { useAppContext } from '@/contexts/AppContext'
import { api } from '@/utils/api'
import { cn } from '@/utils/styling'
import { X } from '@phosphor-icons/react'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'

export default function Page() {
    const router = useRouter();
    const refInterestItems = useRef<Array<HTMLSpanElement | null>>([]);
    const { UserAuthed, setUserAuthed } = useAppContext()
    let [Interests, setInterests] = useState(UserAuthed?.interests ?? [])



    /**
     * Function handler
     */
    function onSubmitInterest() {
        api({
            path: '/updateProfile',
            method: 'PUT',
            body: { ...UserAuthed, interests: Interests }
        }).then(async (res) => {
            if (res.status == 200) {
                // const newUserAuthed = (await res.json()).data;
                // setUserAuthed((prev) => ({ ...prev, ...newUserAuthed }));
                api({ path: '/getProfile' }).then(async (res) => {
                    const { data } = await res.json();
                    setUserAuthed((prev) => ({ ...prev, ...data }));
                    setTimeout(() => {
                        router.push('/profile')
                    }, 300);
                });
            }
        })
    }



    /**
     * Render JSX
     */
    return (
        <div>
            <BgRadial />
            <HeaderBar
                linkBack='/profile'
                rightElement={(
                    <div
                        onClick={onSubmitInterest}
                        className='text-sm ml-auto pr-4 text-[#62CDCB]'
                    >Save</div>
                )}
            />
            <div className='px-6'>
                <div className='pt-16'>
                    <div className='text-amber-200'>Tell everyone about yourself</div>
                    <div className='mt-2 text-xl font-semibold tracking-wider'>{`What interest you?`}</div>
                </div>
                <div className='pt-[2.5rem]'>
                    <div
                        className='bg-white/5 rounded-xl px-2 pt-2 pb-4 min-h-12'
                        onClick={(event) => {
                            if (!(event.target as HTMLElement).closest('.item-interest')) {
                                setInterests([...Interests, '']);
                                setTimeout(() => {
                                    refInterestItems.current[Interests.length]?.focus();
                                }, 100);
                            }
                        }}
                    >
                        {Interests.map((interest, indexInterest) => (
                            <div
                                key={indexInterest}
                                className={cn(
                                    'rounded-md bg-white/10 inline-flex items-center',
                                    'm-1 px-4 py-2 font-semibold text-sm',
                                    'item-interest'
                                )}
                            >
                                <span
                                    className='focus:outline-none'
                                    contentEditable={true}
                                    onInput={(event) => {
                                        Interests = Interests.map((p, indexP) => (
                                            (indexP == indexInterest) ? (event.target as any).innerText : p
                                        ))
                                    }}
                                    dangerouslySetInnerHTML={{ __html: interest }}
                                    suppressContentEditableWarning={true}
                                    ref={(el) => { refInterestItems.current[indexInterest] = el }}
                                />
                                <X
                                    className='ml-2 mt-[2px]'
                                    onClick={() => {
                                        setInterests(Interests.filter((p, indexP) => (indexP != indexInterest)))
                                    }}
                                />
                            </div>
                        ))}
                        <div className='w-8 inline-flex' />
                    </div>
                </div>
            </div>
        </div>
    )
}
