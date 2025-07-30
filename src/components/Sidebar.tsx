"use client";
import { useState } from "react";
import Link from "next/link";

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside
      className={`transition-all duration-300 bg-gray-100 min-h-screen border-r flex flex-col ${
        expanded ? "w-72 p-4" : "w-16 p-2 items-center"
      }`}
    >
      <button
        className="mb-4 p-1 rounded hover:bg-gray-200 text-gray-900 self-end"
        onClick={() => setExpanded((e) => !e)}
        aria-label={expanded ? "Collapse sidebar" : "Expand sidebar"}
      >
        {expanded ? <span>&#x25C0;</span> : <span>&#x25B6;</span>}
      </button>
      <nav className={`flex flex-col gap-2 ${expanded ? "" : "items-center"}`}>
        <div
          className={`font-bold mt-2 mb-1 text-gray-900 ${
            !expanded ? "hidden" : ""
          }`}
        >
          Data Transaksi
        </div>
        <Link
          href="/transaction/create"
          className={`w-full py-2 px-3 rounded bg-gray-200 text-gray-900 text-left hover:bg-gray-300 transition ${
            !expanded ? "justify-center px-0 flex items-center" : ""
          }`}
        >
          {expanded ? (
            "Tambah Data Transaksi"
          ) : (
            <span className="text-xl font-bold">+</span>
          )}
        </Link>
        <Link
          href="/transaction"
          className={`w-full py-2 px-3 rounded bg-gray-200 text-gray-900 text-left hover:bg-gray-300 transition ${
            !expanded ? "justify-center px-0 flex items-center" : ""
          }`}
        >
          {expanded ? (
            "List Data Transaksi"
          ) : (
            <span className="text-lg">📄</span>
          )}
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
