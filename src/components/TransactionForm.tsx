"use client";

import TransactionDetails from "./TransactionDetails";
import FormActions from "./FormActions";
import { useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import {
  createTransaction,
  getTransaction,
  Transaction,
  TransactionDetail,
  updateTransaction,
} from "@/services/transactionService";
import { useParams, useRouter } from "next/navigation";

interface Item {
  id?: string; // Ensure this is always a string
  name: string;
  amount: string;
}
interface Group {
  category: string;
  items: Item[];
}
const initialGroups: Group[] = [
  { category: "", items: [{ id: "", name: "", amount: "" }] },
  { category: "", items: [{ id: "", name: "", amount: "" }] },
];

const TransactionForm: React.FC = () => {
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");
  const [rate, setRate] = useState("");
  const [datePaid, setDatePaid] = useState("");
  const [groups, setGroups] = useState(initialGroups);

  const router = useRouter();

  const params = useParams();
  const currCode = Array.isArray(params.id) ? params.id[0] : params.id;

  const handleGroupChange = (idx: number, group: Group) => {
    setGroups((groups) => groups.map((g, i) => (i === idx ? group : g)));
  };
  const handleGroupRemove = (idx: number) => {
    setGroups((groups) => groups.filter((_, i) => i !== idx));
  };
  const handleAddGroup = () => {
    setGroups((groups) => [
      ...groups,
      { category: "", items: [{ id: "", name: "", amount: "" }] },
    ]);
  };

  const { data: detailTransaction } = useQuery<Transaction, Error>({
    queryKey: [`transaction-${currCode}`],
    queryFn: () =>
      currCode ? getTransaction(currCode) : Promise.reject("No ID provided"),
    staleTime: 1000 * 60,
    enabled: !!currCode, // Only run the query if currId is truthy
  });

  useEffect(() => {
    if (detailTransaction) {
      setDescription(detailTransaction.description);
      setCode(detailTransaction.code);
      setRate(detailTransaction.rate_euro.toString());
      setDatePaid(detailTransaction.date_paid.split(" ")[0]); // Extract date part
      setGroups(
        detailTransaction.details.map((detail: TransactionDetail) => ({
          category: detail.transaction_category_id,
          items: [
            {
              id: detail.id,
              name: detail.name,
              amount: detail.value_idr.toString(),
            },
          ],
        }))
      );
    }
  }, [detailTransaction]);

  const mutationCreate = useMutation({
    mutationFn: createTransaction,
    onSuccess: () => {
      alert("Saved!");
      router.push("/transaction");
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Failed to save");
      }
    },
  });

  const mutationEdit = useMutation({
    mutationFn: updateTransaction,
    onSuccess: () => {
      alert("Saved!");
      router.push("/transaction");
    },
    onError: (error: unknown) => {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Failed to save");
      }
    },
  });

  const handleSave = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    // Map form state to API structure
    const details: Omit<TransactionDetail, "category">[] = groups.flatMap(
      (group) =>
        group.items.map((item) => ({
          id: item.id,
          name: item.name,
          value_idr: Number(item.amount) || 0,
          transaction_category_id: group.category,
        }))
    );

    if (!currCode) {
      mutationCreate.mutate({
        code,
        date_paid: datePaid,
        description,
        rate_euro: Number(rate) || 0,
        details,
      });
    } else {
      mutationEdit.mutate({
        id: detailTransaction?.id,
        code,
        date_paid: datePaid,
        description,
        rate_euro: Number(rate) || 0,
        details,
      });
    }
  };
  const handleCancel = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    router.back();
  };

  return (
    <form className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-lg border border-gray-200 mt-8">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 tracking-tight">
        {!currCode ? "INPUT" : "EDIT"} DATA TRANSAKSI
      </h2>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-1">
          <label className="block mb-2 font-semibold text-gray-700">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full min-h-[60px] border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
            placeholder="Transaksi Bulan ..."
          />
        </div>
        <div className="flex flex-col gap-3 w-full md:w-64">
          <label className="font-semibold text-gray-700">Code</label>
          <input
            disabled={currCode ? true : false}
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
            placeholder="123456"
          />
          <label className="font-semibold text-gray-700">Rate Euro</label>
          <input
            type="text"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
            placeholder="16.000"
          />
          <label className="font-semibold text-gray-700">Date Paid</label>
          <input
            type="date"
            value={datePaid}
            onChange={(e) => setDatePaid(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white text-gray-900"
          />
        </div>
      </div>
      <TransactionDetails
        groups={groups}
        onGroupChange={handleGroupChange}
        onGroupRemove={handleGroupRemove}
        onAddGroup={handleAddGroup}
      />
      <FormActions onSave={handleSave} onCancel={handleCancel} />
      {mutationCreate.isPending ||
        (mutationEdit.isPending && (
          <div className="text-blue-600 mt-2">Saving...</div>
        ))}
      {mutationCreate.isError ||
        (mutationEdit.isError && (
          <div className="text-red-600 mt-2">Gagal menyimpan data.</div>
        ))}
      {mutationCreate.isSuccess ||
        (mutationEdit.isSuccess && (
          <div className="text-green-600 mt-2">Data berhasil disimpan.</div>
        ))}
    </form>
  );
};

export default TransactionForm;
