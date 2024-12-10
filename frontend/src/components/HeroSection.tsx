'use client';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div>
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
        className="md:max-w-[1090px] md:px-14 px-6 md:mt-[76px] mt-[33px] mx-auto aspect-video"
        alt="hero-image"
      />
      <div className="blur-[10px] -mt-12 bg-white md:p-12 p-6" />
    </div>
  );
};

export default HeroSection;
