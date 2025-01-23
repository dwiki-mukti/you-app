import React from 'react'

export default function BgRadial() {
    return (
        <div
            className='absolute inset-0 z-[-1]'
            style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #1F4247, #0D1D23, #09141A)' }}
        />
    )
}
