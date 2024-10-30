import React from 'react'
import '../Custom Styles/Herosection.css'
import Blob from '../Components/Blob'
import Textanimate from './Textanimate'
import Logoslider from './Logoslider'
function Herosection() {
    return (
        <>
            <div className='Hero w-full'>
                <Blob />
                <div className="leftherosec w-[50%] h-[70dvh] flex items-center pl-10 ">
                    <div className='lefttext pl-10'>
                        <img src="./public/assets/newblob.png" id="heroblob1" alt="" />
                        <h1>Largest <span id="color">Wholesalers</span></h1>
                        <div className='flex'>
                            <h1>of</h1>
                            <Textanimate />
                        </div>
                        <p className='Mfont'>Supply that meets Demand. Get the best wholesale prices of <br />used and refurbished Mobile stocks.</p>

                        <h3 className='flex items-center gap-1 mt-3 cursor-pointer'>Learn More <img src="./public/assets/arrow.png" id="arrow" alt="" /></h3>


                        <div
                            class=" flex gap-2 items-center mt-4 btnsection"
                        >
                            <svg
                                width="1.2em"
                                height="1.2em"
                                fill="none"
                                stroke="currentColor"
                                className=""
                                id="emailsvg"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <path d="M22 6l-10 7L2 6"></path>
                            </svg>
                            <input
                                id='emailinput'
                                type="email"
                                name="text"
                                placeholder="Email"
                            />
                            <button className=' flex items-center gap-2 px-6 py-2 bg-[#7CC140] rounded-full text-white hover:text-[#7CC140] hover:bg-white hover:border-[#7CC140] border-[1px] transition ease-in-out duration-200'>Subscribe <i id="arrow2" class="ri-arrow-right-line text-lg"></i> </button>
                            <button className=' flex items-center gap-2 px-6 py-2 bg-[#388FCB] rounded-full text-white hover:text-[#388FCB] hover:bg-white hover:border-[#388FCB] border-[1px] transition ease-in-out duration-200'><i id="arrow2" class="ri-arrow-down-line text-lg"></i>  Stock List</button>
                        </div>

                        <div className="row flex items-center mt-6 gap-7 pl-1">
                            <div className='flex items-center  gap-1'>
                                <span id="socials"><i class="ri-instagram-fill"></i></span>
                                <span id="socials"><i class="ri-facebook-circle-fill"></i></span>
                                <span id="socials"><i class="ri-linkedin-box-fill"></i></span>
                                <span id="socials"><i class="ri-twitter-x-line"></i></span>
                            </div>
                            <div className='flex items-end gap-1 '>
                                <img className='mb-1' src="./public/assets/Vector.png" alt="" />
                                <p id="userstext">400k people registered</p>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="belowrows  w-[50%] ">
                    <div className="row1 h-[9px] w-[65%]"></div>
                    <div className="row2 h-[9px] w-[81%] mt-2"></div>
                </div>
                <Logoslider />

            </div>
        </>

    )
}

export default Herosection
