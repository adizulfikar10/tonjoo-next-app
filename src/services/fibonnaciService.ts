import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type FibonnacoResponse = number;

export const getFibonnaci = async (params: { first: string; second: string; }) => {
  const res = await axios.get<FibonnacoResponse>(`${API_URL}/fibonnaci`, { params });
  return res.data;
};
