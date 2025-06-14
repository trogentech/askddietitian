import React from 'react'
import fruitImage from "../../assets/images/fruitImage.png"
import Image from 'next/image'
const FruitsImageContainer = () => {
  return (
    <div  className='md:h-full'>
      <Image src={fruitImage} alt='askddietician fruit image' className='h-full w-full' />
    </div>
  )
}

export default FruitsImageContainer
