'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import Drawer from '../components/Drawer';
import './globals.css';

const queryClient = new QueryClient();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <QueryClientProvider client={queryClient}>
          <Drawer />
          <main className="flex-1 overflow-auto bg-black-100">{children}</main>
        </QueryClientProvider>
      </body>
    </html>
  );
}