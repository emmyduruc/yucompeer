import LogoIcon from '@/components/icon/logo';
import React from 'react';
import { BiMenu } from 'react-icons/bi';

const HomePage = () => {
  return (
    <div className="flex h-full md:px-14 px-6 md:py-6 py-4">
      <div className="flex justify-between w-full items-center">
        <LogoIcon className="md:h-auto h-5 md:w-auto w-fit" />
        <div className="flex items-center md:bg-[#e4EEFF] md:py-2 md:px-3 rounded-full gap-4">
          <BiMenu className="ml-1" size={24} />
          <div className="md:bg-primary md:py-3 md:px-6 rounded-full">
            <p className="text-white font-lora text-xl font-semibold leading-6 hidden md:block">
              Get Started
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
