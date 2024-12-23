'use client';

import { Category, Tool } from '@/schema/tools.schema';
import { createTechStack } from '@/services/techStack';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { ErrorLoader } from './ErrorLoader';

const Drawer: React.FC = () => {
  const queryClient = useQueryClient();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const {
    data: techStack,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['techStack'],
    queryFn: createTechStack.fetchTechStack,
  });

  if (isLoading) return null;

  const categories = Array.from(
    new Set(
      techStack
        .map((tool: Tool) => tool.category)
        .map((category: Category) => JSON.stringify(category)),
    ),
  ).map((category: any) => JSON.parse(category));

  return error ? (
    <div className="text-red-500 justify-center">
      <ErrorLoader />
    </div>
  ) : (
    <div
      className={`flex flex-col ${isOpen ? 'w-64' : 'w-16'} h-full transition-all duration-300 bg-gray-800 text-white`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 focus:outline-none"
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div className={`flex-1`}>
        <ul className="mt-4 space-y-2 font-mono">
          {categories.map((category: { id: string; name: string }) => {
            const categoryPath = `/${category.name.toLowerCase().replace(/\s+/g, '-')}`;
            const isActive = pathname === categoryPath;

            return (
              <Link
                key={category.id}
                href={categoryPath}
                onClick={() => {
                  queryClient.setQueryData(['selectedCategory'], category);
                }}
              >
                <li
                  className={`${
                    isActive ? 'bg-green-600 text-white' : 'hover:bg-gray-700'
                  } ${
                    isOpen ? 'p-4' : 'p-2 text-center'
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
