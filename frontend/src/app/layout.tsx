import Drawer from '../components/Drawer';
import './globals.css';
import React from 'react';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <Drawer />
        <main className="flex-1 overflow-auto bg-gray-100">{children}</main>
      </body>
    </html>
  );
}