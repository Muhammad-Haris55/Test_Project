import React from 'react'

import '../Custom Styles/Navbar.css'
const signals = document.querySelectorAll('.wifi-signal');
let currentIndex = 0;

function showNextSignal() {
    signals[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % signals.length;
    signals[currentIndex].classList.add('active');
}

setInterval(showNextSignal, 1000);
function Navbar() {
    return (
        <div className="navbar w-full h-24 flex items-center justify-center gap-12 ">
            <div className='flex items-center justify-center gap-8 navsections'>
                <p id="home">Home</p>
                <p>About Us</p>
                <p>Wholesale</p>
            </div>
            <div id="navspan">
                <span className='wifi-container'>
                    <img src="./public/assets/s1.png" alt="" />
                    <img src="./public/assets/s2.png" alt="" />
                    <img src="./public/assets/s3.png" alt="" />
                </span>
                <img src="./public/assets/logo.png" alt="" id="logo" />
            </div>
            <div className='flex items-center justify-center gap-8 navsections'>
                <p>Service</p>
                <p>News</p>
                <p>How it Works</p>
            </div>
        </div>
    )
}

export default Navbar
