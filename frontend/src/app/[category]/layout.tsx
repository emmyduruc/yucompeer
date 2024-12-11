import Drawer from '@/components/Drawer';
import React from 'react';

function CategoryLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Drawer />
      <div className="flex-1 overflow-auto bg-black-100">{children}</div>
    </div>
  );
}

export default CategoryLayout;
