"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getTransactions,
  deleteTransaction,
  Transaction,
  TransactionListResponse,
} from "@/services/transactionService";
import { useRouter } from "next/navigation";

const PAGE_SIZE = 8;

const TransactionListTable: React.FC = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  // const [category, setCategory] = useState("");
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data, isLoading, isError } = useQuery<TransactionListResponse, Error>(
    {
      queryKey: ["transactions", page, search],
      queryFn: () =>
        getTransactions({ page, per_page: PAGE_SIZE, code: search }),
      staleTime: 1000 * 60,
    }
  );

  const mutationDelete = useMutation({
    mutationFn: (code: string) => deleteTransaction(code),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["transactions"] });
    },
  });

  const transactions: Transaction[] = data?.transactions ?? [];
  const total: number = data?.total ?? 0;
  const pageCount: number = Math.ceil(total / PAGE_SIZE);

  const editList = (code: string) => {
    // Redirect to edit page with transaction code
    router.push(`/transaction/edit/${code}`);
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-4 justify-between">
        <Link
          href={"/transaction/create"}
          className="bg-blue-600 text-white px-4 py-2 rounded font-semibold"
        >
          Tambah Transaksi
        </Link>
        <div className="flex items-center gap-2">
          {/* <button className="text-red-600 font-bold flex items-center gap-1">
            <span className="text-xl">×</span>Reset Filters
          </button> */}
          {/* <select
            className="border rounded px-2 py-1 text-gray-900"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select> */}
          <input
            className="border rounded px-2 py-1 text-gray-900 w-64"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="overflow-x-auto rounded border">
        <table className="min-w-full text-sm text-gray-900">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-2 border">No</th>
              <th className="px-2 py-2 border">Deskripsi</th>
              <th className="px-2 py-2 border">Code</th>
              <th className="px-2 py-2 border">Rate Euro</th>
              <th className="px-2 py-2 border">Date Paid</th>
              <th className="px-2 py-2 border">Kategori</th>
              <th className="px-2 py-2 border">Nama Transaksi</th>
              <th className="px-2 py-2 border">Nominal (IDR)</th>
              <th className="px-2 py-2 border">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={9} className="text-center py-4 text-gray-400">
                  Loading...
                </td>
              </tr>
            ) : isError ? (
              <tr>
                <td colSpan={9} className="text-center py-4 text-red-400">
                  Failed to load data
                </td>
              </tr>
            ) : transactions.length === 0 ? (
              <tr>
                <td colSpan={9} className="text-center py-4 text-gray-400">
                  No data
                </td>
              </tr>
            ) : (
              transactions.map((trx: Transaction, i: number) =>
                trx.details && trx.details.length > 0 ? (
                  trx.details.map((detail, j) => (
                    <tr
                      key={detail.id}
                      className={(i + j) % 2 ? "bg-gray-50" : ""}
                    >
                      {j === 0 && (
                        <>
                          <td
                            className="px-2 py-1 border text-center"
                            rowSpan={trx.details.length}
                          >
                            {(page - 1) * PAGE_SIZE + i + 1}
                          </td>
                          <td
                            className="px-2 py-1 border"
                            rowSpan={trx.details.length}
                          >
                            {trx.description}
                          </td>
                          <td
                            className="px-2 py-1 border"
                            rowSpan={trx.details.length}
                          >
                            {trx.code}
                          </td>
                          <td
                            className="px-2 py-1 border"
                            rowSpan={trx.details.length}
                          >
                            {trx.rate_euro}
                          </td>
                          <td
                            className="px-2 py-1 border"
                            rowSpan={trx.details.length}
                          >
                            {trx.date_paid}
                          </td>
                        </>
                      )}
                      <td className="px-2 py-1 border">
                        {detail.category?.name || "-"}
                      </td>
                      <td className="px-2 py-1 border">{detail.name}</td>
                      <td className="px-2 py-1 border text-right">
                        {detail.value_idr.toLocaleString()}
                      </td>
                      {j === 0 && (
                        <td
                          className="px-2 py-1 border text-center"
                          rowSpan={trx.details.length}
                        >
                          <button
                            className="text-red-600 hover:bg-red-100 rounded p-1 mr-1"
                            title="Delete"
                            onClick={() =>
                              trx.id && mutationDelete.mutate(trx.code)
                            }
                            disabled={mutationDelete.isPending}
                          >
                            🗑️
                          </button>
                          <button
                            className="text-blue-600 hover:bg-blue-100 rounded p-1"
                            title="Edit"
                            onClick={() => editList(trx.code)}
                          >
                            ✏️
                          </button>
                        </td>
                      )}
                    </tr>
                  ))
                ) : (
                  <tr key={trx.id} className={i % 2 ? "bg-gray-50" : ""}>
                    <td className="px-2 py-1 border text-center">
                      {(page - 1) * PAGE_SIZE + i + 1}
                    </td>
                    <td className="px-2 py-1 border">{trx.description}</td>
                    <td className="px-2 py-1 border">{trx.code}</td>
                    <td className="px-2 py-1 border">{trx.rate_euro}</td>
                    <td className="px-2 py-1 border">{trx.date_paid}</td>
                    <td className="px-2 py-1 border">-</td>
                    <td className="px-2 py-1 border">-</td>
                    <td className="px-2 py-1 border text-right">-</td>
                    <td className="px-2 py-1 border text-center">
                      <button
                        className="text-red-600 hover:bg-red-100 rounded p-1 mr-1"
                        title="Delete"
                        onClick={() =>
                          trx.id && mutationDelete.mutate(trx.code)
                        }
                        disabled={mutationDelete.isPending}
                      >
                        🗑️
                      </button>
                      <button
                        className="text-blue-600 hover:bg-blue-100 rounded p-1"
                        title="Edit"
                        onClick={() => editList(trx.code)}
                      >
                        ✏️
                      </button>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-gray-700">
          Menampilkan {transactions.length} dari {total} data
        </div>
        <div className="flex gap-1">
          <button
            className="px-2 py-1 border rounded disabled:opacity-50 text-gray-900"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
          >
            &lt;
          </button>
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              className={`px-3 py-1 border rounded ${
                page === i + 1 ? "bg-blue-500 text-white" : "bg-white"
              }`}
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-2 py-1 border rounded disabled:opacity-50 text-gray-900"
            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
            disabled={page === pageCount}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionListTable;
