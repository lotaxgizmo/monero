import React from 'react'
import dafuk from '../assets/dafuk.svg'
import dafukk from '../assets/dafukk.svg'
import line from '../assets/line.svg'
import rules from '../assets/rules.svg'
import safu from '../assets/safu.svg'
import hanging from '../assets/hanging.gif'
import vomit from '../assets/vomit.MP4'
import btn4 from '../assets/btn4.svg'


function Scrollcomponent() {
    return (
        <div className='flex items-center justify-center relative '>
            {/* <img src={dafuk} alt="" className='dw-96 m t-3' /> */}
            <div>
                <div className='z-30 mt-5 relative flex flex-col items-center justify-center  total h-96 w-96   lg:w-[530px] bg-black rounded-3xl pt-10  '>

                    <div className='absolute top-0 self-start total h-10 w-full bg-[#F9F301] flex items-center justify-center rounded-3xl rounded-b-none '>
                        <h2 className='Irish text-2xl lg:text-3xl mb '>wElcome to monERO on ETH</h2>
                    </div>

                    <div className='flex flex-col self-start nter scrollbar overflow-x-hidden overflow-y-scroll'>


                        <h2 className='Irish text-[12px] tecent lg:text-sm mb-4 text-[#3EE242]'>contrakt: 0x4600430d900c2d8a372bf48d7b42897db5f462d1</h2>

                        <img src={dafukk} alt="" className='w-96 lg:w-auto' />
                        <p className='text-[#EA000B] Alegreya px-4 w-96 lg:w-[450px] py-3'>$Monero isn't just a coin; it's a rebellion against the mundane. Picture this: Charles Manson orchestrating financial freedom, Alex Jones shouting truth bombs on the blockchain, Beetlejuice haunting the banks of Wall Street, 1776 fighting taxation with crypto, Pitbull guarding your investments like a loyal hound, and Karen demanding financial accountability from the managers of the world.</p>
                        <img src={hanging} alt="" className='py-2 w-52 lg:w-96' />
                        <img src={line} alt="" className='py-2' />

                        <img src={rules} alt="" className='w-60' />

                        <p className='text-[#EA000B] Alegreya px-4 w-[450px] py-3'>NONE</p>
                        <img src={line} alt="" className='py-2' />

                        <p className='text-[#EA000B] Alegreya px-4 w-96 lg:w-[450px] py-3'>
                            THE ULTIMATE TOOL OF OF FINANCIAL LIBERATION. CHARLESMANSONALEXJONESBEETLEJUICE1776PITBULLKAREN TICKR: MONERO IS NOT A MATTER OF BYE OR SELL GAIN OR LOSS ITS PACT OF FRENDSHIP A PLEDGE OF FAITH IN OUR SHARED VISION OF A WORLD FREE FROM THE IRON CHAINS OF THE NEW WORLD ORDER IT NURTURES ALLIANCES FOSTERS FREINDSHPOS10I AND BRINGS PRIVACY TO DIGITALLY EMBRACE AND BIND OUR MINDS IN SHARED
                        </p>
                        <img src={line} alt="" className='py-2' />
                        <img src={safu} alt="" className='w-60 lg:w-96' />
                        <div className="flex">
                            <video src={vomit} className='w-20  loop-autoplay '></video>
                            <video src={vomit} className='w-20  loop-autoplay '></video>
                            <video src={vomit} className='w-20  loop-autoplay '></video>
                            <video src={vomit} className='w-20  loop-autoplay '></video>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Scrollcomponent