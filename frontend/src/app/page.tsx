import LogoIcon from '@/components/icon/logo';
import Image from 'next/image';
import React from 'react';
import { BiMenu } from 'react-icons/bi';

const HomePage = () => {
  return (
    <div className="h-full md:py-6 py-4 md:bg-desktop-background bg-mobile-background">
      <div className="flex  md:px-14 px-6  justify-between w-full items-center">
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
      <div className="md:mt-[108px] mt-12 md:px-14 px-6 max-w-[820px] mx-auto text-center">
        <p className="md:text-[50px] text-xl text-primary md:leading-[65px] font-roboto leading-8 font-bold">
          Find the Perfect Tools for Your Business – All in One Place
        </p>
        <p className="text-primary text-center text-xs md:text-xl md:mt-[30px] mt-4">
          Discover, compare, and choose the right services for your needs. From
          cloud solutions to databases, CMS, and project management tools, we
          simplify your search and help you save time and money.
        </p>
        <button className="md:mt-[45px] mt-10 md:px-10 px-6 py-2 bg-primary text-white rounded-full font-lora font-semibold text-sm md:text-xl">
          Explore For Free
        </button>
      </div>
      <Image
        src="/images/hero-image.png"
        width={1090}
        height={800}
        className="md:max-w-[1090px]  md:px-14 px-6  md:mt-[76px] mt-[33px] mx-auto aspect-video"
        alt="hero-image"
      />
      <div className="blur-[10px] -mt-12 bg-white p-12" />
      <div className="bg-white -mt-3 justify-center pt-5 flex flex-col items-center">
        <button className="md:px-10 px-6 py-1.5 text-base font-roboto rounded-md border border-[#202938BF]">
          Feature
        </button>
        <div className="md:h-[691px] w-full bg-black mt-4 h-[800px]"></div>
        <button className="md:mt-[45px] mt-10 md:px-10 px-6 py-2 bg-primary text-white rounded-full font-lora font-semibold text-sm md:text-xl">
          Explore All Features
        </button>
        <button className="md:px-10 md:mt-[93px] mt-[50px] px-6 py-1.5 text-base font-roboto rounded-md border border-[#202938BF]">
          How it Works
        </button>
        <h1 className="text-center md:text-[45px] md:leading-[60px] leading-7 my-[30px] text-[20px]">
          Easy Comparison <br /> <span>Less Stress</span>
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
