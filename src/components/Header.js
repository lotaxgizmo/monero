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
                    <img src={home} alt="" className='w-52' />
                    <img src={about} alt="" className='w-52' />
                    <img src={buy} alt="" className='w-52' />
                </div>
                <div className="lower flex flex-row items-center">
                    <img src={twitter} alt="" className='w-52' />
                    <img src={memes} alt="" className='w-52' />
                    <img src={telegram} alt="" className='w-52' />
                </div>
            </div>
        </div>
    )
}

export default Header