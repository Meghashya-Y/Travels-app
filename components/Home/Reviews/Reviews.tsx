import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewsSlider from './ReviewsSlider'

const Reviews = () => {
  return (
    <div className="pt-20 pb-20 flex item justify-center flex-col bg-[#13357b]">
        <div className="w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
           <div>
            <h1 className="text-2xl font-semibold text-white">
                What our customersvare saying us?
            </h1>
            <p className="mt-6 text-gray-200">
            Working with them was a game-changer. They understood our needs and crafted a solution that was both intuitive and powerful. Their commitment to innovation has helped us stay ahead of the competition."
            </p>
            {/* Ratings */}
            <div className="mt-6 flex items-center space-x-6">
                <div>
                    <p className="text-2xl font-bold text-white">4.85</p>
                    <p className="text-white mb-2">Overall Rating</p>
                    <div className="flex items-center">
                        <FaStar className="text-white"/>
                        <FaStar className="text-white"/>
                        <FaStar className="text-white"/>
                        <FaStar className="text-white"/>
                        <FaStar className="text-white"/>
                    </div>
                </div>
            </div>
           </div> 
           {/*  Slider */}
           <div className="overflow-hidden">
            <ReviewsSlider />
           </div>
        </div>
    </div>
  )
}

export default Reviews