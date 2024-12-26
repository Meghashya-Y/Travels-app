import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import DestinationSilder from './DestinationSilder';

const Destination = () => {
  return (
    <div className="pt-20 pb-20">
        {/* Section Heading */}
        <SectionHeading heading="Exploring Popular Destination"/>
        {/* Section Content */}
        <div className="mt-14 w-[80%] mx-auto">
            {/* Slider */}
            <DestinationSilder />
        </div>
    </div>
  );
};

export default Destination;