import React from 'react'
import tv from '../assets/tv.svg'
import btn1 from '../assets/btn1.svg'
import btn2 from '../assets/btn2.svg'
import btn4 from '../assets/btn4.svg'
import Herotext from '../assets/Herotext.svg'
import beetlejuicehead from '../assets/beetlejuicehead.svg'
import karen from '../assets/karen.svg'
import Scrollcomponent from './Scrollcomponent'
import yellowherobox from '../assets/yellowherobox.gif'
import gif from '../assets/gif.gif'
import manson from '../assets/manson.gif'

function Hero() {
    return (
        <div className='overflow-clip flex    flex-col justify-center items-center relative mt-4 mb-20 border-black'>
            <img src={manson} alt="" className='z-[-10] fixed  top-0   w-[1000px]  ' />
            <img src={manson} alt="" className='z-[-10] fixed  top-0   w-[300px] animate-spin' />
            <img src={karen} alt="" className='z-[2] absolute  top-1 left-1 w-52' />
            <img src={beetlejuicehead} alt="" className='z-[2] absolute  top-1 right-1 w-32' />
            <img src={beetlejuicehead} alt="" className='z-[2] absolute  bottom-0 left-1 w-32' />
            <img src={yellowherobox} alt="" className='z-[1] absolute  top-1' />

            <div className="z-10 upper flex lg:flex-row flex-col mt-10  ">
                <img src={gif} alt="" className='
loop-autoplay dw-96 z-10 w-96' />

                <Scrollcomponent />
            </div>
            <div className="lower flex flex-col lg:flex-row justify-evenly items-center z-10">
                <img src={Herotext} alt="" className=' z-10' />
                <div className="btns">
                    <div className="btn1 flex flex-col lg:flex-row">
                        <img src={btn1} alt="" className='m-2 z-10' />
                        <img src={btn2} alt="" className='m-2 z-10' />
                    </div>
                    <div className="btn2 hidden lg:flex flex-row ">
                        <img src={btn2} alt="" className='m-2 z-10' />
                        <img src={btn4} alt="" className='m-2 z-10' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Hero