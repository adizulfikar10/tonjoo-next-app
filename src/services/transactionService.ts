import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type TransactionDetail = {
  id?: string;
  name: string;
  transaction_category_id: string;
  value_idr: number;
  category: {
    id: string;
    name: string;
  };
};

export type Transaction = {
  id: string;
  code: string;
  date_paid: string;
  description: string;
  rate_euro: number;
  details: TransactionDetail[];
};

export type TransactionListResponse = {
  page: number;
  per_page: number;
  total: number;
  transactions: Transaction[];
};

export type TransactionCreate = Omit<Transaction, "id" | "details"> & { details: Omit<TransactionDetail, "id" | "category">[] };

export type TransactionUpdate = Omit<Transaction, "details"> & { details: Omit<TransactionDetail, "id" | "category">[] };

export const getTransactions = async (params?: { page?: number; per_page?: number; code?: string; category?: string }) => {
  const res = await axios.get<TransactionListResponse>(`${API_URL}/transactions`, { params });
  return res.data;
};

export const getTransaction = async (id?: string) => {
  const res = await axios.get<Transaction>(`${API_URL}/transactions/${id}`);
  return res.data;
};

export const createTransaction = async (data: TransactionCreate) => {
  const res = await axios.post<Transaction>(`${API_URL}/transactions`, data);
  return res.data;
};

export const updateTransaction = async (data: Partial<TransactionUpdate>) => {
  const res = await axios.put<Transaction>(`${API_URL}/transactions/${data.code}`, data);
  return res.data;
};

export const deleteTransaction = async (code: string) => {
  const res = await axios.delete(`${API_URL}/transactions/${code}`);
  return res.data;
};
