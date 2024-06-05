"use client";
import React from 'react';
import {
    HiCheckCircle,
    HiChevronDown,
    HiChevronUp,
    HiXMark,
} from 'react-icons/hi2';
import { AnimatePresence, motion } from 'framer-motion';


type ItemProps = {
    id: number,
    item: string
}
interface CardProps {
    items: ItemProps[],
    title: string,
    updateFunction: (item: any) => void,
    value: string[],
    clear: () => void,
    isOpen: boolean,
    setOpen: (a: string) => void
}

const Card = ({ items, title, updateFunction, value, clear, isOpen, setOpen }: CardProps) => {
    const isInArray = (value: string[], item: any) => value.includes(item);
    return <div className='flex flex-col border-2 mx-4 border-black-100 rounded overflow-hidden 
    relative  bg-[#fcf9ff] h-fit shadow-lg'>
        <div className='flex 
        cursor-pointer gap-4
          text-[#5a189a] 
         text-lg font-[500] p-4'
            onClick={() => setOpen(title)}>
            <span className='w-full'>{title}</span>
            {isOpen ? (
                <HiChevronUp size={20} color="#ff6d00" />
            ) : (
                <HiChevronDown size={20} color="#ff6d00" />
            )}
        </div>

        {value.length > 0 && (
            <div className="flex flex-col p-4 gap-4 border-t-2 border-black-50">
                <div className='flex gap-4 justify-between'>
                    <span className='font-bold text-[16px]'>You choosen</span>
                    <button onClick={clear} className='cursor-pointer text-[16px]'>Clear All</button>
                </div>
                <div className='grid grid-cols-3 gap-2'>
                    {value && value.map((item, number) => {
                        return (
                            <div className='py-2 px-4 bg-[#5a189a]
                             text-white rounded-[1rem] w-fit
                             text-sm gap-1 flex items-center' key={number}>
                                {item}
                                <button className="cursor-pointer mr-[-0.45rem]" onClick={() => updateFunction(item)}>
                                    <HiXMark size={16} />
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        )}
        <AnimatePresence>
            <motion.div
                initial={{ height: "0" }}
                animate={{ height: isOpen ? "auto" : "0", opacity: isOpen ? 1 : 0 }} transition={{ duration: 1 }}
                exit={{ height: isOpen ? "0" : "auto", opacity: isOpen ? 0 : 1 }}>
                <div className='flex flex-col p-4 gap-4 border-t-2 border-black-50 '>
                    {items.map((item) => (
                        <div key={item.id}
                            className='flex w-fit gap-2 items-center cursor-pointer'
                            onClick={() => updateFunction(item.item)}>
                            {isInArray(value, item.item) ? (
                                <HiCheckCircle size={20} color="#ff6d00" />
                            ) : (
                                <div className='border-[1px] rounded-[50%] border-[#ff6d00] p-[5px] h-4 w-4 ml-1'></div>
                            )}
                            {item.item}
                        </div>
                    ))}
                </div>
            </motion.div>
        </AnimatePresence>

    </div>
}

export default Card