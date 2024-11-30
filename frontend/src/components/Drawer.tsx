'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import { FiMenu, FiX } from 'react-icons/fi';
import { usePathname } from 'next/navigation'; // Import usePathname to get the active route
import { createTechStack } from '@/services/techStack';

const Drawer: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const { data: techStack, isLoading, error } = useQuery({
    queryKey: ['techStack'],
    queryFn: createTechStack.fetchTechStack,
  });

  if (isLoading) return <div>Loading categories...</div>;
  if (error) return <div>Error loading categories</div>;


  const categories = Array.from(
    new Set(
      techStack.map((tool: any) => tool.category).map((category: any) => JSON.stringify(category))
    )
  ).map((category: any) => JSON.parse(category));


  return (
    <div className={`flex flex-col ${isOpen ? 'w-64' : 'w-16'} h-full transition-all duration-300 bg-gray-800 text-white`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 focus:outline-none"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div className={`flex-1`}>
        <ul className="mt-4 space-y-2">
          {categories.map((category: { id: string; name: string }) => {
            const categoryPath = `/${category.name.toLowerCase().replace(/\s+/g, '-')}`;
            const isActive = pathname === categoryPath; // Check if the current path matches the category path

            return (
              <Link key={category.id}
                href={categoryPath}>

                <li
                  className={`${isActive ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'
                    } ${isOpen ? 'p-4' : 'p-2 text-center'
                    } transition-all duration-300`}
                >
                  {isOpen ? (
                    category?.name
                  ) : (
                    <span className="text-lg font-bold">
                      {category?.name?.[0].toUpperCase()}
                    </span>
                  )}
                </li>
              </Link>

            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Drawer;