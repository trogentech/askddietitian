import React from 'react'
import fruitImage from "../../../assets/images/onion.png"
import Image from 'next/image'
const OnionImageContainer = () => {
  return (
    <div  className='md:h-full'>
      <Image src={fruitImage} alt='askddietician fruit image' className='h-full w-full' />
    </div>
  )
}

export default OnionImageContainer
