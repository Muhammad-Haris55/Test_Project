import React from 'react'
import '../Custom Styles/Topbar.css'

function Topbar() {
    return (
        <>
            <div className="bar w-ful h-16 bg-[#388FCB] flex items-middle justify-between px-16 relative">
                <div className='flex items-middle justify-center gap-3 mb-2'>
                    <span className='flex items-center justify-center gap-1'>
                        <img src="./public/assets/mail.png" alt="" className='w-[16px] h-[16px]' />
                        <p className='text-[12px] text-white'>info@abc.com</p>
                    </span>
                    <span className='flex items-center justify-center gap-1'>
                        <img src="./public/assets/phone.png" alt="" className='w-[16px] h-[16px]' />
                        <p className='text-[11px] text-white'>+123 456 789</p>
                    </span>
                </div>

                <div className='flex items-middle justify-between gap-3 mb-2'>
                    <span className='flex items-center justify-center gap-1'>
                        <p className='text-[12px] text-white'>Privacy Policy</p>
                    </span>
                    <div className="barline w-[1px] h-[28px] bg-white relative top-[15px] opacity-[0.5]"></div>
                    <span className='flex items-center justify-center gap-1'>
                        <p className='text-[12px] text-white'>Terms and Condition</p>
                    </span>

                </div>

            </div>

        </>
    )
}

export default Topbar
