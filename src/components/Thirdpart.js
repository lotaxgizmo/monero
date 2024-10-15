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
        <div id='memes' className='flex items-center justify-center py-20'>
            <div className='bg-black/70 w-11/12 p-4'>
                <img src={wen} alt="" className='my-4' />

                <div className="karen flex flex-col lg:flex-row justify-between my-4">
                    <img src={karenbaby} alt="" />
                    <img src={mascot} alt="" />
                </div>

                <div className="karen flex flex-col lg:flex-row  justify-between my-4">
                    <div>
                        <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0x4600430d900c2d8a372bf48d7b42897db5f462d1" target="_blank" rel="noopener noreferrer">
                            <img src={eatyellow} alt="" />
                        </a>
                        <img src={beetlepit} alt="" />
                        <div className='flex'>
                            <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0x4600430d900c2d8a372bf48d7b42897db5f462d1" target="_blank" rel="noopener noreferrer">
                                <img src={eargreen} alt="" />
                            </a>
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
                        <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0x4600430d900c2d8a372bf48d7b42897db5f462d1" target="_blank" rel="noopener noreferrer">
                            <img src={eatyellow} alt="" />
                        </a>
                        <img src={mon33} alt="" className='mt-20' />
                        <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0x4600430d900c2d8a372bf48d7b42897db5f462d1" target="_blank" rel="noopener noreferrer">
                            <img src={eargreen} alt="" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Thirdpart