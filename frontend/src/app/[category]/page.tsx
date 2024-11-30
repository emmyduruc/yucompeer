'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Table from '../../components/Table';
import { usePathname } from 'next/navigation';
import { createTechStack } from '@/services/techStack';

const CategoryPage = () => {
  const pathname = usePathname();
  const category = pathname?.split('/')[1]?.replace('-', ' '); 

  const { data: providers, isLoading, error } = useQuery({
    queryKey: ['providers', category],
    queryFn: () => createTechStack.fetchProvidersByCategory(category),
  });


  if (isLoading) return <div>Loading providers...</div>;
  if (error) return <div>Error loading providers</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{category}</h1>
      <Table providers={providers} /> 
    </div>
  );
};

export default CategoryPage;