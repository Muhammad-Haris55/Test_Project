import React from 'react'
import Topbar from '../Components/Topbar'
import '../Custom Styles/Mainpage.css'
import Navbar from '../Components/Navbar'
import Herosection from '../Components/Herosection'
import Stocksection from '../Components/Stocksection'
function Mainpage() {
    return (
        <>
            <Topbar />
            <section className='maincontiner'>
                <div className="curvedbar"></div>
                <div className="mainbody">
                    <Navbar />
                    <Herosection />
                    <Stocksection />
                </div>
            </section>
        </>

    )
}

export default Mainpage
