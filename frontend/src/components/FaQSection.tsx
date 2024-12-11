'use client';
import AccordionItem from '@/components/Accordion';
import { faqs } from '../../utils/constants';

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

export default FaQSection;
