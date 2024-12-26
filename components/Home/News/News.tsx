import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className="pt-16 pb-16">
        {/* Section Heading */}
        <SectionHeading heading="Exciting Travel News for You" />
        <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
            <div
            data-aos="fade-left" 
            data-aos-anchor-placement="top-center" 
            >
                <NewsCard image="/images/n1.jpg" 
                title="Top 10 places to visit in Australia"
                data="10 October 2024"/>
            </div>
            <div
            data-aos="fade-left" 
            data-aos-anchor-placement="top-center" 
            data-aos-delay="100"
            >
                <NewsCard image="/images/n2.jpg" 
                title="Top 10 places to visit in Italy"
                data="15 November 2024"/>
            </div>
            <div
            data-aos="fade-left" 
            data-aos-anchor-placement="top-center" 
            data-aos-delay="200"
            >
                <NewsCard image="/images/n3.jpg" 
                title="Top 10 places to visit in NewYork"
                data="22 November 2024"/>
            </div>
            <div
            data-aos="fade-left" 
            data-aos-anchor-placement="top-center" 
            data-aos-delay="300"
            >
                <NewsCard image="/images/n4.jpg" 
                title="Top 10 places to visit in New Zeland"
                data="30 November 2024"/>
            </div>
            <div
            data-aos="fade-left" 
            data-aos-anchor-placement="top-center" 
            data-aos-delay="400"
            >
                <NewsCard image="/images/n5.jpg" 
                title="Top 10 places to visit in SwitzerLand"
                data="03 December 2024"/>
            </div>
            <div
            data-aos="fade-left" 
            data-aos-anchor-placement="top-center" 
            data-aos-delay="500"
            >
                <NewsCard image="/images/n6.jpg" 
                title="Top 10 places to visit in France"
                data="17 December 2024"/>
            </div>
            <div
            data-aos="fade-left" 
            data-aos-anchor-placement="top-center" 
            data-aos-delay="600"
            >
                <NewsCard image="/images/n7.jpg" 
                title="Top 10 places to visit in Germany"
                data="29 December 2024"/>
            </div>
            <div
            data-aos="fade-left" 
            data-aos-anchor-placement="top-center" 
            data-aos-delay="700"
            >
                <NewsCard image="/images/n8.jpg" 
                title="Top 10 places to visit in India"
                data="06 January 2025"/>
            </div>
        </div>
    </div>
  )
}

export default News