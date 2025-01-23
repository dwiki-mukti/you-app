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
    function onSubmitRegister(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStateFormLogin((prev) => ({ ...prev, statusCode: 202 }));
        api({
            path: '/register', method: 'POST',
            body: StateFormLogin.values
        }).then(async (res) => {
            const { message } = await res.json();
            if (message == "User has been created successfully") {
                api({
                    path: '/login', method: 'POST',
                    body: StateFormLogin.values
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
            <div className='mt-[8rem] mb-[3rem] ml-[1.5rem] font-semibold text-4xl'>Register</div>
            <form onSubmit={onSubmitRegister}>
                <div>
                    <Input
                        name='email'
                        placeholder='Enter Email'
                        type='email'
                        stateHandler={[StateFormLogin, setStateFormLogin]}
                        validation={{ required: true }}
                    />
                </div>
                <div className='mt-6'>
                    <Input
                        name='username'
                        placeholder='Create Username'
                        stateHandler={[StateFormLogin, setStateFormLogin]}
                        validation={{ required: true }}
                    />
                </div>
                <div className='mt-6'>
                    <Input
                        name='password'
                        placeholder='Create Password'
                        type='password'
                        stateHandler={[StateFormLogin, setStateFormLogin]}
                        validation={{ required: true }}
                    />
                </div>
                <div className='mt-6'>
                    <Input
                        name='password_confirm'
                        placeholder='Confirm Password'
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
                    >Register</Button>
                </div>
            </form>
            <div className='mt-[3rem] text-center'>
                <span>{`Have an account? `}</span>
                <Link href={'/login'} className='text-amber-200 underline'>Login here account</Link>
            </div>
        </div>
    )
}
