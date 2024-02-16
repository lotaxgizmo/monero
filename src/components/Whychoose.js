import React from 'react'
import tickermon from '../assets/tickermon.svg'
import beforemon from '../assets/beforemon.svg'

function Whychoose() {
    return (
        <div className='px-4 lg:px-20 flex flex-col lg:flex-row lg:w-[1430px]'>
            <div>
                <div className="redbox bg-[#E9000B] lg:w-[650px] lg:p-10 h-auto">
                    <h2 className='Irish text-7xl mb-4 text-[#F9F301]'>Why Choose $Monero?</h2>
                    <p className='Irish text-2xl'>
                        - It's not just a coin; it's a movement against the financial elite.
                        <br />
                        - No board of directors, no central banks, just the power of the people.
                        <br />
                        - $Monero fights the New World Order with every transaction.
                        <br />
                        - It's the ultimate symbol of rebellion against financial tyranny.

                    </p>
                </div>
            </div>

            <div className='relative flex flex-col'>
                <img src={beforemon} alt="" className='relative w-96  lg:w-[1400px] left-[-45px] top-[45px]' />
                <img src={tickermon} alt="" className='relative w-96  lg:w-[545px]  lg:left-[-105px] lg:top-[45px] max-w-none' />
            </div>

        </div>
    )
}

export default Whychoose