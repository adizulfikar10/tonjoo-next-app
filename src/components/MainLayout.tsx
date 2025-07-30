import React from "react";
import Sidebar from "./Sidebar";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex min-h-screen bg-gray-50">
    <Sidebar />
    <main className="flex-1 p-8 bg-white transition-all duration-300">
      {children}
    </main>
  </div>
);

export default MainLayout;
