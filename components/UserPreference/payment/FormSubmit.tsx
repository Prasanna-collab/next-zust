
import React from 'react'


interface FormProps {
    title: string,
    type: string,
    name: string,
    placeholder: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const FormSubmit = ({ title, type, placeholder, value, name, onChange }: FormProps) => {

    return <div className="grid gap-2 w-full ">
        <label className='text-[#5a189a]'>{title}</label>
        <input
            className='border-[1px] border-[#ff6d00] rounded p-3 focus:outline-[1px] focus:outline-[#ff6d00]'
            value={value}
            type={type}
            name={name}
            required
            onChange={onChange}
            placeholder={placeholder}
        />
    </div>
}

export default FormSubmit