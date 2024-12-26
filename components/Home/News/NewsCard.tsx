import Image from 'next/image';
import React from 'react'

type Props ={
    image: string;
    data: string;
    title: string;
}

const NewsCard = ({data, image, title}:Props) => {
  return (
    <div className="max-w-sm bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          {/* Image */}
    <div className="relative h-[125px]">
    <Image 
    src={image} 
    alt={title} 
    width={300} 
    height={200} 
    className="rounded-lg"
    />
     </div>
    {/* Text Content */}
    <div className="p-4">
    <h1 className="mt-6 text-lg text-gray-950 font-semibold hover:text-blue-950 transition-all duration-200 cursor-pointer">
        {title}
        </h1>
    <p className="text-sm text-gray-600 mt-3">
        {data}
        </p>
    </div>
    </div>
  )
}

export default NewsCard