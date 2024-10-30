import React from 'react'
import '../Custom Styles/Stocksection.css'
import Carouselcomp from './Carouselcomp'

function Stocksection() {
    return (
        <>
            <div className="stocksection w-full flex flex-col items-center justify-center ">
            <img src="./public/assets/wave.png" id="wave" alt="" />

                <div className='flex items-center justify-center titlestock mt-12 relative top-6'>
                    <div id="gooey3" className="">
                        <span class="gooey-text">Mobile</span>
                    </div>
                    <h1 className='text-[#388FCB]'>Stock</h1>

                </div>
                <h5 className='text-lg mt-10 text-center leading-snug font-semibold opacity-[0.8] text-[#33333]'>We stay up to date with latest technology trends and offer innovative solutions that help<br /> you stay ahead in competetion </h5>
                <Carouselcomp />
            </div>
        </>
    )
}

export default Stocksection
