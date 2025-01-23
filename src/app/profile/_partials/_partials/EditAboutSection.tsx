import Input from '@/components/Input'
import React, { Dispatch } from 'react'
import InputAvatar from './_partials/InputAvatar'
import Select from '@/components/Select';
import { getHoroscope, getZodiac } from '@/utils/mutator';

export default function EditAboutSection({
    About, setAbout
}: {
    About: Record<string, any>;
    setAbout: Dispatch<React.SetStateAction<Record<string, any>>>;
}) {
    return (
        <div>
            <InputAvatar About={About} setAbout={setAbout} />
            <div>
                {[
                    {
                        label: 'Display name',
                        placeholder: 'Enter name',
                        name: 'name'
                    },
                    {
                        label: 'Gender',
                        placeholder: 'Select Gender',
                        name: 'gender',
                        type: 'select',
                        options: ['Male', 'Female']
                    },
                    {
                        label: 'Birthday',
                        name: 'birthday',
                        type: 'date'
                    },
                    {
                        label: 'Horoscope',
                        placeholder: '--',
                        name: 'horoscope',
                        disabled: true
                    },
                    {
                        label: 'Zodiac',
                        placeholder: '--',
                        name: 'zodiac',
                        disabled: true
                    },
                    {
                        label: 'Height',
                        placeholder: 'Add height',
                        name: 'height'
                    },
                    {
                        label: 'Weight',
                        placeholder: 'Add weight',
                        name: 'weight'
                    },
                ].map(({ options, ...contentField }, indexContentField) => (
                    <div key={indexContentField} className='flex items-center pt-3'>
                        <label htmlFor={contentField.name} className='text-gray-500 w-[7rem]'>
                            {contentField?.label ?? ''}:
                        </label>
                        <div className='grow'>
                            {contentField.type == 'select' ? (
                                <Select
                                    {...contentField}
                                    options={options}
                                    className='h-[2.75rem] px-4 border border-gray-600 rounded-lg text-right'
                                    value={About[contentField.name]}
                                    onChange={(event) => {
                                        setAbout((prev) => ({
                                            ...prev,
                                            [contentField.name]: event.target.value ?? ''
                                        }))
                                    }}
                                />
                            ) : (
                                <Input
                                    {...contentField}
                                    id={contentField.name}
                                    className='h-[2.75rem] px-4 border border-gray-600 rounded-lg text-right hide-calendar'
                                    value={About[contentField.name]}
                                    onChange={(event) => {
                                        setAbout((prev) => {
                                            const date = contentField.name == 'birthday' ? event.target.value : prev.birthday;
                                            return {
                                                ...prev,
                                                'horoscope': date ? getHoroscope(date) : '',
                                                'zodiac': date ? getZodiac(date) : '',
                                                [contentField.name]: event.target.value ?? ''
                                            }
                                        })
                                    }}
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
