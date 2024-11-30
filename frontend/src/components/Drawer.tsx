'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const categories = ['Databases', 'Cloud Services', 'Payment Providers', 'CMS Tools', 'Project Management'];

const Drawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-gray-800 text-white ${
        isOpen ? 'w-64' : 'w-16'
      } h-full flex flex-col transition-all duration-300`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 focus:outline-none"
      >
        {isOpen ? 'Collapse' : 'Expand'}
      </button>
      <ul className="mt-4">
        {categories.map((category) => (
          <li key={category} className="p-4 hover:bg-gray-700">
            <Link href={`/${category.toLowerCase().replace(' ', '-')}`}>
              {isOpen ? category : category[0]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drawer;