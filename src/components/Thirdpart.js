import React from 'react'
import wen from '../assets/wen.svg'
import karenbaby from '../assets/karenbaby.svg'
import mascot from '../assets/mascot.svg'
import beetlepit from '../assets/beetlepit.svg'
import pitbeetle from '../assets/pitbeetle.svg'
import eatyellow from '../assets/eatyellow.svg'
import eargreen from '../assets/eargreen.svg'
import mon3 from '../assets/mon3.svg'
import mon33 from '../assets/mon33.svg'
import pitkaren from '../assets/pitkaren.svg'

function Thirdpart() {
    return (
        <div className='flex items-center justify-center py-20'>
            <div className='bg-black/70 w-11/12 p-4'>
                <img src={wen} alt="" className='my-4' />

                <div className="karen flex flex-col lg:flex-row justify-between my-4">
                    <img src={karenbaby} alt="" />
                    <img src={mascot} alt="" />
                </div>

                <div className="karen flex flex-col lg:flex-row  justify-between my-4">
                    <div>
                        <img src={eatyellow} alt="" />
                        <img src={beetlepit} alt="" />
                        <div className='flex'>
                            <img src={eargreen} alt="" />
                            <img src={mon3} alt="" className='mt-20' />
                        </div>
                    </div>
                    <img src={pitbeetle} alt="" />
                </div>

                <div className="karen flex flex-row justify-between my-4">
                    <div>
                        <img src={pitkaren} alt="" />

                    </div>
                    <div className='flex flex-col'>
                        <img src={eatyellow} alt="" />
                        <img src={mon33} alt="" className='mt-20' />
                        <img src={eargreen} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Thirdpart