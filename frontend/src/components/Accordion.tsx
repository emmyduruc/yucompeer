'use client';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

interface AccordionItemProps {
  title: string;
  content: string;
}

const AccordionItem = ({ title, content }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#2029381F] max-w-[1047px] mx-auto">
      <button
        className="w-full py-5 px-6 flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-left font-medium text-primary">{title}</span>
        <AiOutlinePlus
          size={24}
          className={`transition-transform duration-200 ${
            isOpen ? 'rotate-45' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-40' : 'max-h-0'
        }`}
      >
        <p className="px-6 pb-5 text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
