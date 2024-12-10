'use client';
import AccordionItem from '@/components/Accordion';
import FacebookIcon from '@/components/icon/facebook-icon';
import InstagramIcon from '@/components/icon/instagram-icon';
import TwitterIcon from '@/components/icon/twitter-icon';
import ImageBackground from '@/components/ImageBackground';
import LandingPageHeader from '@/components/LandingPageHeader';
import Image from 'next/image';
import { GoDotFill } from 'react-icons/go';

const faqs = [
  {
    title: 'What is Youcompare ?',
    content:
      'Youcompare is a platform that helps you find the best tools for your business. We provide comprehensive comparisons of cloud services, databases, CMS platforms, and project management tools, so you can make informed decisions.',
  },
  {
    title: 'How does the platform assist small business ?',
    content:
      'Our platform is designed to help small businesses find the right tools for their needs. We provide detailed comparisons of various services, so you can easily find the best fit for your business.',
  },
  {
    title: 'Is the platform free for users ?',
    content:
      'Yes, our platform is completely free for users. You can explore and compare different tools without any cost or commitment.',
  },
  {
    title: 'Is the platform up to date with prices ?',
    content:
      'Yes, we regularly update our platform with the latest prices and features of various tools.',
  },
];

const HomePage = () => {
  return (
    <ImageBackground>
      <LandingPageHeader />
      <HeroSection />
      <div className="blur-[10px] -mt-12 bg-white p-12" />
      <FeaturesIntroSection id="features" />
      <div className="bg-white py-5 font-roboto px-4">
        <AllFeaturesSection />
        <FaQSection id="faqs" />
      </div>
      <Footer />
    </ImageBackground>
  );
};

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
      <div className="blur-[10px] -mt-12 bg-white p-12" />
    </div>
  );
};

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
      <div className="md:h-[691px] w-full bg-black mt-4 h-[800px]"></div>
      <button className="md:mt-[45px] mt-10 md:px-10 px-6 py-2 bg-primary text-white rounded-full font-lora font-semibold text-sm md:text-xl">
        Explore All Features
      </button>
    </div>
  );
};

const AllFeaturesSection = () => {
  return (
    <div className="bg-[#D9D9D933] py-12 max-w-[1286px] grid md:grid-cols-3 rounded-[20px] mx-auto">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className={`md:border-l ${index < 5 ? 'border-b md:border-b-0' : ''} ${
            index < 3 ? 'md:border-b' : ''
          } border-[#2029381F] md:px-10 py-4 px-8`}
        >
          <div className="flex items-center gap-2">
            <GoDotFill />
            <p className="md:text-xl text-sm font-medium">
              Comprehensive Comparisons
            </p>
          </div>
          <p className="md:leading-[25px] leading-5 text-xs mt-[15px]">
            Easily compare cloud services, databases, CMS platforms, and project
            management tools side by side. Get all the key details you need in
            one place.
          </p>
        </div>
      ))}
    </div>
  );
};

const FaQSection = ({ id }: { id?: string }) => {
  return (
    <div id={id}>
      <div className="flex flex-col items-center">
        <button className="md:px-10 md:mt-[93px] mt-[50px] px-6 py-1.5 text-base font-roboto rounded-md border border-[#202938BF]">
          FAQS
        </button>
        <h1 className="text-center font-bold text-primary md:text-[45px] md:leading-[60px] leading-7 my-[20px] text-[20px]">
          Everything you <br />{' '}
          <span className="text-[#8D9CB3]">Need to Know</span>
        </h1>
        <p className="mt-4 text-center max-w-[645px] text-primary">
          Innovative and impactful, our features are designed to set new
          standards and drive exceptional results. Experience the difference
          that cutting-edge technology and unique solutions can make.
        </p>
      </div>
      <div>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} title={faq.title} content={faq.content} />
        ))}
      </div>
    </div>
  );
};

const navigationLinks = [
  { label: 'Home', id: 'home' },
  { label: 'Features', id: 'features' },
  { label: 'FAQs', id: 'faqs' },
  { label: 'Contact Us', id: 'contact' },
];

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-primary px-12 pt-11 pb-[61px] md:pt-[70px] mb-[97px]">
      <div className="flex justify-center items-center gap-4 text-white">
        {navigationLinks.map((link, index) => (
          <div key={link.id}>
            <button
              onClick={() => scrollToSection(link.id)}
              className="hover:text-gray-300"
            >
              {link.label}
            </button>
            {index !== navigationLinks.length - 1 && (
              <span className="text-white"> /</span>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 md:mt-14 mt-7">
        <TwitterIcon />

        <FacebookIcon />
        <InstagramIcon />
      </div>
      <h5 className="md:text-[100px] text-center text-[45px] text-white font-lora">
        Youcompare
      </h5>
    </div>
  );
};

export default HomePage;
