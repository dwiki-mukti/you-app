'use client'

import React, { FormEvent, useEffect, useState } from 'react'
import EditAboutSection from './_partials/EditAboutSection'
import { PencilSimpleLine } from '@phosphor-icons/react'
import ItemAboutDisplay from './_partials/ItemAboutDisplay';
import { useAppContext } from '@/contexts/AppContext';
import { api } from '@/utils/api';


interface typeAbout {
    name?: string;
    gender?: string;
    birthday?: string;
    horoscope?: string;
    zodiac?: string;
    height?: number;
    weight?: number;
    inputAvatar?: string;
}


export default function AboutProfile() {
    const { UserAuthed, setUserAuthed } = useAppContext();
    const [IsEditing, setIsEditing] = useState(false);
    const [About, setAbout] = useState<typeAbout>({
        gender: 'Male', inputAvatar: ''
    });


    useEffect(() => {
        if (Object.values(About).filter((a) => a != undefined).length <= 2) {
            setAbout((prev) => ({
                ...prev,
                name: UserAuthed?.name,
                birthday: UserAuthed?.birthday,
                horoscope: UserAuthed?.horoscope,
                zodiac: UserAuthed?.zodiac,
                height: UserAuthed?.height,
                weight: UserAuthed?.weight,
            }));
        }
    }, [UserAuthed])



    /**
     * Function handler
     */
    function onSubmitAboutProfile(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        api({
            path: '/updateProfile',
            method: 'PUT',
            body: { ...UserAuthed, ...About }
        }).then(async (res) => {
            if (res.status == 200) {
                // const newUserAuthed = (await res.json()).data;
                // setUserAuthed((prev) => ({ ...prev, ...newUserAuthed }));
                api({ path: '/getProfile' }).then(async (res) => {
                    const { data } = await res.json();
                    setUserAuthed({
                        ...data,
                        gender: About.gender,
                        inputAvatar: About.inputAvatar
                    });
                    setTimeout(() => {
                        setIsEditing(false);
                    }, 300);
                });
            }
        })
    }



    /**
     * Render JSX
     */
    return (
        <div className='bg-gray-500/5 px-4 py-4 mt-4 rounded-xl'>
            <form onSubmit={onSubmitAboutProfile}>
                <div className='flex items-center justify-between'>
                    <div className='font-bold'>About</div>
                    <div>
                        {IsEditing ? (
                            <button className='text-amber-200 text-xs'>
                                {`Save & Update`}
                            </button>
                        ) : (
                            <div className='cursor-pointer' onClick={() => setIsEditing(true)}>
                                <PencilSimpleLine />
                            </div>
                        )}
                    </div>
                </div>
                <div className='text-sm my-4'>
                    {IsEditing ? (
                        <EditAboutSection About={About} setAbout={setAbout} />
                    ) : (
                        Object.keys(About).length ? (
                            <>
                                <ItemAboutDisplay label='Birthday' value={UserAuthed?.birthday} />
                                <ItemAboutDisplay label='Horoscope' value={UserAuthed?.horoscope} />
                                <ItemAboutDisplay label='Zodiac' value={UserAuthed?.zodiac} />
                                <ItemAboutDisplay label='Height' value={UserAuthed?.height ? `${UserAuthed?.height} cm` : ''} />
                                <ItemAboutDisplay label='Weight' value={UserAuthed?.weight ? `${UserAuthed?.weight} Kg` : ''} />
                            </>
                        ) : (
                            <div className='py-2 text-gray-400'>
                                {`Add in your to help others know you better`}
                            </div>
                        )
                    )}
                </div>
            </form>
        </div>
    )
}
