import React from 'react'
import home from '../assets/home.svg'
import about from '../assets/about.svg'
import buy from '../assets/buy.svg'
import twitter from '../assets/twitter.svg'
import memes from '../assets/memes.svg'
import telegram from '../assets/telegram.svg'

function Header() {
    return (
        <div className='flex items-center justify-center'>
            <div className='bg-black/60 w-96 items-center p-3'>
                <div className="upper flex flex-row items-center">
                    <a href="#" >
                        <img src={home} alt="" className='w-52' />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src={about} alt="" className='w-52' />
                    </a>
                    <a href="https://app.uniswap.org/swap?&chain=mainnet&use=v2&outputCurrency=0x4600430d900c2d8a372bf48d7b42897db5f462d1" target="_blank" rel="noopener noreferrer">
                        <img src={buy} alt="" className='w-52' />
                    </a>
                </div>
                <div className="lower flex flex-row items-center">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="" className='w-52' />
                    </a>
                    <a href="#memes"   >
                        <img src={memes} alt="" className='w-52' />
                    </a>
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                        <img src={telegram} alt="" className='w-52' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header