import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="mx-auto">
        <Navbar />
        <Outlet />
      </main>
    </div>
  );
}