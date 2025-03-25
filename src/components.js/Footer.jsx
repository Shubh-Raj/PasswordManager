import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white'>
            <div className='flex justify-between items-center px-4 py-5 h-10 '>

                <div className="logo font-bold text-white text-2xl">
                    <span className='text-green-700'> &lt;</span>
                    <span>Pass</span><span className='text-green-700'>OP/&gt;</span>
                </div>
                <div className='hover:font-bold text-lg'>Created by Shubh</div>
            </div>

        </div>
    )
}

export default Footer
