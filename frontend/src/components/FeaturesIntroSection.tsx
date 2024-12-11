'use client';
import Image from 'next/image';

const FeaturesIntroSection = ({ id }: { id?: string }) => {
  return (
    <div
      id={id}
      className="bg-white -mt-3 justify-center pt-5 flex flex-col items-center"
    >
      <button className="md:px-10 px-6 py-1.5 text-base font-roboto rounded-md border border-[#202938BF]">
        Feature
      </button>
      <h1 className="text-center font-bold text-primary md:text-[45px] md:leading-[60px] leading-7 my-[20px] text-[20px]">
        Features That Make
        <br /> <span className="text-[#8D9CB3]">Choosing Easier</span>
      </h1>
      <p className="mt-4 text-center max-w-[645px] text-primary">
        Innovative and impactful, our features are designed to set new standards
        and drive exceptional results. Experience the difference that
        cutting-edge technology and unique solutions can make.
      </p>
      <div className="max-w-[1192px] gap-4 mx-auto px-4 w-full mt-4 grid md:grid-cols-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className={`bg-[#F0F6FFCC] w-fit rounded-b-2xl ${index === 0 ? 'row-span-2' : ''}`}
          >
            <div className="flex justify-center">
              <Image
                src="/images/feature-hero-image.png"
                width={253}
                height={302}
                alt=""
                className="md:hidden px-4 md:px-8 w-full mb-[14px]"
              />
              {index !== 0 && (
                <Image
                  src="/images/feature-hero-image@2x.png"
                  width={387}
                  height={215}
                  alt=""
                  className="hidden md:block aspect-video w-[80%] max-h-[215px] mb-[20px]"
                />
              )}
              {index === 0 && (
                <Image
                  src="/images/feature-hero-image@3x.png"
                  width={387}
                  height={215}
                  alt=""
                  className="hidden md:block mb-8"
                />
              )}
            </div>
            <div className="px-4 md:px-0 md:w-[80%] mx-auto">
              <p className="font-medium text-base md:text-[20px] md:ont-semibold">
                Compare Payment Services
              </p>
              <p className="leading-5 md:text-base mt-2 mb-1 text-xs">
                Databases are foundational components of software applications,
                used to store, manage, and retrieve data. They come in two
                primary types: relational (SQL) and non-relational (NoSQL)
                databases.
              </p>
            </div>
          </div>
        ))}
      </div>
      <button className="md:mt-[45px] mt-10 md:px-10 px-6 py-2 bg-primary text-white rounded-full font-lora font-semibold text-sm md:text-xl">
        Explore All Features
      </button>
    </div>
  );
};

export default FeaturesIntroSection;
