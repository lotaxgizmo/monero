import React from 'react'
import secondpic from '../assets/secondpic.svg'
import btn2 from '../assets/btn2.svg'
import banner from '../assets/banner.gif'

function Secondpic() {
    return (
        <div className='flex flex-col items-center '>
            <img src={banner} alt="" className='mt-2' />
            <img src={secondpic} alt="" />
            <img src={btn2} alt="" className='m-2' />
            <img src={banner} alt="" className='mt-2' />
            <img src={banner} alt="" className='mt-2' />
            <img src={banner} alt="" className='mt-2' />
        </div>
    )
}

export default Secondpic