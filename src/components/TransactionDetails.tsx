import React from "react";
import TransactionCategoryGroup from "./TransactionCategoryGroup";

type Item = { id?: string; name: string; amount: string };
type Group = { category: string; items: Item[] };

type Props = {
  groups: Group[];
  onGroupChange: (idx: number, group: Group) => void;
  onGroupRemove: (idx: number) => void;
  onAddGroup: () => void;
};

const TransactionDetails: React.FC<Props> = ({
  groups,
  onGroupChange,
  onGroupRemove,
  onAddGroup,
}) => (
  <section className="border p-6 mt-8 rounded bg-white">
    <h3 className="font-bold text-lg mb-4 text-gray-900">DATA TRANSAKSI</h3>
    {groups.map((group, idx) => (
      <TransactionCategoryGroup
        key={idx}
        category={group.category}
        items={group.items}
        onCategoryChange={(e) => {
          onGroupChange(idx, { ...group, category: e.target.value });
        }}
        onItemChange={(itemIdx, item) => {
          const newItems = [...group.items];
          newItems[itemIdx] = item;
          onGroupChange(idx, { ...group, items: newItems });
        }}
        onItemRemove={(itemIdx) => {
          const newItems = group.items.filter((_, i) => i !== itemIdx);
          onGroupChange(idx, { ...group, items: newItems });
        }}
        onAddItem={() => {
          onGroupChange(idx, {
            ...group,
            items: [...group.items, { name: "", amount: "" }],
          });
        }}
        onRemoveGroup={() => onGroupRemove(idx)}
      />
    ))}
    <div className="flex gap-2 mt-2">
      <button
        type="button"
        onClick={() => onAddGroup()}
        className="bg-blue-500 text-white px-4 py-1 rounded"
      >
        Tambah
      </button>
    </div>
  </section>
);

export default TransactionDetails;
