import React from 'react';
import LogoIcon from './icon/logo';
import { BiMenu } from 'react-icons/bi';

function LandingPageHeader() {
  return (
    <div className="flex md:px-14 px-6  justify-between w-full items-center">
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
  );
}

export default LandingPageHeader;
