'use client';
import FacebookIcon from '@/components/icon/facebook-icon';
import InstagramIcon from '@/components/icon/instagram-icon';
import TwitterIcon from '@/components/icon/twitter-icon';
import { navigationLinks } from '../../utils/constants';

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

export default Footer;
