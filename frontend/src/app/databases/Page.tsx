import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';

const fetchToolsByCategory = async (category: string) => {
  const response = await fetch(`http://localhost:3000/tech-stack?category=${category}`);
  if (!response.ok) throw new Error('Failed to fetch tools');
  return response.json();
};

const DatabasesPage = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchToolsByCategory('Databases');
        setTools(data);
      } catch (error) {
        console.error('Error fetching tools:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Databases</h1>
      <Table tools={tools} />
    </div>
  );
};

export default DatabasesPage;