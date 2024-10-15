import React from 'react'
import secondpic from '../assets/secondpic.gif'
import btn2 from '../assets/btn2.svg'
import banner from '../assets/banner.gif'

function Secondpic() {
    return (
        <div className='flex flex-col items-center '>
            <img src={banner} alt="" className='mt-2' />
            <img src={secondpic} alt="" />
            <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0x4600430d900c2d8a372bf48d7b42897db5f462d1" target="_blank" rel="noopener noreferrer">
                <img src={btn2} alt="" className='m-2' />
            </a>
            <img src={banner} alt="" className='mt-2' />
            <img src={banner} alt="" className='mt-2' />
            <img src={banner} alt="" className='mt-2' />
        </div>
    )
}

export default Secondpic