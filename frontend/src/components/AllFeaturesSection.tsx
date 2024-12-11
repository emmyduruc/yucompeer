'use client';
import { GoDotFill } from 'react-icons/go';
import { allFeatures } from '../../utils/constants';

const AllFeaturesSection = () => {
  return (
    <div className="bg-[#D9D9D933] py-12 max-w-[1286px] grid md:grid-cols-3 rounded-[20px] mx-auto">
      {allFeatures.map((feature, index) => (
        <div
          key={index}
          className={`md:border-l ${index < 5 ? 'border-b md:border-b-0' : ''} ${
            index < 3 ? 'md:border-b' : ''
          } border-[#2029381F] md:px-10 py-4 px-8`}
        >
          <div className="flex items-center gap-2">
            <GoDotFill />
            <p className="md:text-xl text-sm font-medium">{feature.title}</p>
          </div>
          <p className="md:leading-[25px] leading-5 text-xs mt-[15px]">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default AllFeaturesSection;
