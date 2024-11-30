'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Table from '../../components/Table';
import { usePathname } from 'next/navigation';
import { createTechStack } from '@/services/techStack';
import { Loading } from '@/components/Loading';
import { ErrorLoader } from '@/components/ErrorLoader';

const CategoryPage = () => {
  const pathname = usePathname();
  const category = pathname?.split('/')[1]?.replace('-', ' ');

  const {
    data: providers,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['providers', category],
    queryFn: () => createTechStack.fetchProvidersByCategory(category),
  });

  if (isLoading)
    return (
      <div className="justiy-center flex-1">
        <Loading />
      </div>
    );
  if (error) return <div>Error loading providers</div>;

  return error ? (
    <div className="text-red-500 justify-center items-center">
      <ErrorLoader />
    </div>
  ) : (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{category}</h1>
      <Table providers={providers} />
    </div>
  );
};

export default CategoryPage;
