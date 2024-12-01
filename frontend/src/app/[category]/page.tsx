'use client';

import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import Table from '../../components/Table';
import { usePathname } from 'next/navigation';
import { createTechStack } from '@/services/techStack';
import { Loading } from '@/components/Loading';
import { ErrorLoader } from '@/components/ErrorLoader';
import { Category, Provider } from '@/schema/tools.schema';

const CategoryPage = () => {
  const { data: selectedCategory } = useQuery({
    queryKey: ['selectedCategory'],
    initialData: null as null | Category,
  });

  const pathname = usePathname();
  const category = pathname?.split('/')[1]?.replace('-', ' ');
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [dropdown1, setDropdown1] = useState('');
  const [dropdown2, setDropdown2] = useState('');

  const {
    data: providers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['providers', category],
    queryFn: () => createTechStack.fetchProvidersByCategory(category),
  });
  const handleCompare = () => {
    if (dropdown1 && dropdown2) {
      setSelectedProviders([dropdown1, dropdown2]);
    }
  };

  const handleReset = () => {
    setSelectedProviders([]);
    setDropdown1('');
    setDropdown2('');
  };

  if (isLoading)
    return (
      <div className="justify-center flex-1 items-center">
        <Loading />
      </div>
    );
  if (error) return <div>Error loading providers</div>;

  return (
    <div className="p-4">
      <div className="items-center gap-4 mb-4 pl-4">
        <h1 className="text-2xl font-bold mb-4 font-mono">
          {category?.charAt(0).toUpperCase() + category?.slice(1)}:
        </h1>
        <p className="text-gray-600 mb-4 font-mono">
          {selectedCategory?.description ?? ''}
        </p>
      </div>
      <div className="flex items-center font-mono gap-4 mb-4 pl-4">
        <select
          value={dropdown1}
          onChange={(e) => setDropdown1(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded"
        >
          <option value="" disabled>
            Select first provider to compare
          </option>
          {providers.map((provider: Provider) => (
            <option key={provider.name} value={provider.name}>
              {provider.name}
            </option>
          ))}
        </select>

        <select
          value={dropdown2}
          onChange={(e) => setDropdown2(e.target.value)}
          className="border-2 border-gray-300 p-2 rounded"
        >
          <option value="" disabled>
            Select second provider to compare
          </option>
          {providers.map((provider: Provider) => (
            <option key={provider.name} value={provider.name}>
              {provider.name}
            </option>
          ))}
        </select>

        <button
          onClick={handleCompare}
          className="bg-green-500 text-white px-4 py-2 rounded font-mono"
        >
          Compare
        </button>

        <button
          onClick={handleReset}
          className="bg-gray-500 text-white px-4 py-2 rounded font-mono"
        >
          Reset
        </button>
      </div>

      <Table
        providers={
          selectedProviders.length > 0
            ? providers.filter((provider: Provider) =>
                selectedProviders.includes(provider.name),
              )
            : providers
        }
      />
    </div>
  );
};

export default CategoryPage;
