import React, { ChangeEvent } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategories, Category } from "@/services/categoryService";
import TransactionItemRow from "./TransactionItemRow";

type Item = { name: string; amount: string };
type Props = {
  category: string;
  items: Item[];
  onItemChange: (idx: number, item: Item) => void;
  onItemRemove: (idx: number) => void;
  onCategoryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  onAddItem: () => void;
  onRemoveGroup: () => void;
};

const TransactionCategoryGroup: React.FC<Props> = ({
  category,
  items,
  onItemChange,
  onCategoryChange,
  onItemRemove,
  onAddItem,
  onRemoveGroup,
}) => {
  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return (
    <div className="border p-4 mb-6 rounded bg-gray-50">
      <div className="flex items-center mb-2">
        <label className="mr-2 text-gray-900">Category</label>
        <select
          defaultValue={category}
          className="mr-auto border rounded px-2 py-1 text-gray-900"
          onChange={onCategoryChange}
        >
          <option value={""} disabled>
            {isLoading ? "Loading..." : "Select"}
          </option>
          {categories?.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={onRemoveGroup}
          className="text-red-500 font-bold px-2"
        >
          ×
        </button>
      </div>
      {items.map((item, idx) => (
        <TransactionItemRow
          key={idx}
          name={item.name}
          amount={item.amount}
          onNameChange={(v) => onItemChange(idx, { ...item, name: v })}
          onAmountChange={(v) => onItemChange(idx, { ...item, amount: v })}
          onRemove={() => onItemRemove(idx)}
        />
      ))}
      <button
        type="button"
        onClick={onAddItem}
        className="mt-2 text-blue-500 font-bold px-2"
      >
        ＋
      </button>
    </div>
  );
};

export default TransactionCategoryGroup;
