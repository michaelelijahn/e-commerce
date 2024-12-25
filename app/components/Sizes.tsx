"use client"
import React, { Dispatch, SetStateAction } from 'react'

interface SizesProps {
    sizes: string[];
    size: string;
    setSize: Dispatch<SetStateAction<string>>;
}

const Sizes = ({ sizes, size, setSize }: SizesProps) => {
  return (
    <div className='flex gap-2 mb-6'>
        {sizes.map((sizeOption: string, idx: number) => (
            <div 
                key={idx} 
                onClick={() => setSize(sizeOption)}
                className={`px-6 py-3 cursor-pointer rounded-lg transition-all
                    ${sizeOption === size 
                        ? 'border-2 border-blue-600 font-semibold' 
                        : 'border border-solid hover:border-blue-600'
                    }`}
            >
                {sizeOption}
            </div>
        ))}
    </div>
  )
}

export default Sizes