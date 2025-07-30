import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export type Category = {
  id: string;
  name: string;
};

export const getCategories = async (): Promise<Category[]> => {
  const res = await axios.get(`${API_URL}/categories`);
  return res.data;
};
