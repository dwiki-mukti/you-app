'use client'

import { AppContext } from '@/contexts/AppContext'
import { api } from '@/utils/api'
import { usePathname } from 'next/navigation'
import React, { ReactNode, useEffect, useState } from 'react'

export default function Template({ children }: { children: ReactNode }) {
    const pathname = usePathname()
    const prefix = pathname.split('/')[1]
    const [UserAuthed, setUserAuthed] = useState<typeUserAuthed>({})



    /**
     * load user
     */
    useEffect(() => {
        if (!['login', '/_error'].includes(prefix) && !Object.keys(UserAuthed).length) {
            api({ path: '/getProfile' }).then(async (res) => {
                const { data } = await res.json();
                setUserAuthed(data);
            });
        }
    }, [prefix])



    /**
     * Render JSX
     */
    return (
        <AppContext.Provider value={{ UserAuthed, setUserAuthed }}>
            <div className='max-w-md mx-auto'>
                {children}
            </div>
        </AppContext.Provider>
    )
}
