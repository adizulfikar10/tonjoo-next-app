// components/FibonacciCalculator.tsx
"use client";

import { FibonnacoResponse, getFibonnaci } from "@/services/fibonnaciService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function FibonacciCalculator() {
  const [firstSequence, setFirstSequence] = useState<string>("");
  const [secondSequence, setSecondSequence] = useState<string>("");
  const [error, setError] = useState<string>("");

  const { data, refetch } = useQuery<FibonnacoResponse, Error>({
    queryKey: ["fibonnaci", firstSequence, secondSequence],
    queryFn: () =>
      getFibonnaci({ first: firstSequence, second: secondSequence }),
    staleTime: 1000 * 60,
    enabled: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate inputs
    if (!firstSequence || !secondSequence) {
      setError("Both sequences are required");
      return;
    }

    refetch();
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Fibonacci Sequence Sum Calculator
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="firstSequence"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First Fibonacci Sequence
          </label>
          <input
            id="firstSequence"
            type="text"
            value={firstSequence}
            onChange={(e) => setFirstSequence(e.target.value)}
            placeholder="e.g., 0,1,1,2,3,5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
          />
        </div>

        <div>
          <label
            htmlFor="secondSequence"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Second Fibonacci Sequence
          </label>
          <input
            id="secondSequence"
            type="text"
            value={secondSequence}
            onChange={(e) => setSecondSequence(e.target.value)}
            placeholder="e.g., 0,1,1,2,3,5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-700"
          />
        </div>

        {error && <div className="text-red-500 text-sm">{error}</div>}

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Calculate Sum
        </button>
      </form>

      {data && (
        <div className="mt-6 p-4 bg-indigo-50 rounded-md border border-indigo-100">
          <h3 className="font-medium text-gray-800">Result:</h3>
          <p className="text-2xl font-bold text-indigo-700 mt-1">{data}</p>
        </div>
      )}

      <div className="mt-6 text-sm text-gray-500">
        <p className="font-medium">Note:</p>
        <ul className="list-disc pl-5 space-y-1 mt-1">
          <li>Enter valid Fibonacci sequences</li>
          <li>(e.g., 0,1,1,2,3,5)</li>
        </ul>
      </div>
    </div>
  );
}
