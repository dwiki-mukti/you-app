'use client'

import BgRadial from '@/components/BgRadial'
import Button from '@/components/Button'
import Cookies from "js-cookie"
import Input from '@/components/Input'
import { api } from '@/utils/api'
import { isInvalidForm } from '@/utils/form'
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'

export default function Page() {
    const [StateFormLogin, setStateFormLogin] = useState<typeStateInput>({});



    /**
     * Function handler
     */
    function onSubmitLogin(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStateFormLogin((prev) => ({ ...prev, statusCode: 202 }));
        api({
            path: '/login',
            method: 'POST',
            body: { ...(StateFormLogin.values ?? {}), email: StateFormLogin.values?.username ?? '' }
        }).then(async (res) => {
            const { message, access_token } = await res.json();
            if (message == "User has been logged in successfully") {
                Cookies.set("userToken", access_token);
                setTimeout(() => {
                    window.location.href = '/profile';
                }, 300);
            } else {
                setStateFormLogin((prev) => ({
                    ...prev,
                    invalidMessage: String(message),
                    statusCode: res.status
                }));
            }
        })
    }



    /**
     * Render JSX
     */
    return (
        <div className='px-8'>
            <BgRadial />
            <div className='mt-[8rem] mb-[3rem] ml-[1.5rem] font-semibold text-4xl'>Login</div>
            <form onSubmit={onSubmitLogin}>
                <div>
                    <Input
                        name='username'
                        placeholder='Enter Username/Email'
                        stateHandler={[StateFormLogin, setStateFormLogin]}
                        validation={{ required: true }}
                    />
                </div>
                <div className='mt-6'>
                    <Input
                        name='password'
                        placeholder='Enter Password'
                        type='password'
                        stateHandler={[StateFormLogin, setStateFormLogin]}
                        validation={{ required: true }}
                    />
                </div>
                <div>
                    <div className='text-red-500 text-center h-6 my-2'>{StateFormLogin.invalidMessage}</div>
                    <Button
                        variant='primary'
                        disabled={isInvalidForm(StateFormLogin) || (StateFormLogin.statusCode == 202)}
                    >Login</Button>
                </div>
            </form>
            <div className='mt-[3rem] text-center'>
                <span>{`No account? `}</span>
                <Link href={'/register'} className='text-amber-200 underline'>Register here</Link>
            </div>
        </div>
    )
}
