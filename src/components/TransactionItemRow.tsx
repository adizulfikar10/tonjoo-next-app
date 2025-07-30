import React from "react";

type Props = {
  name: string;
  amount: string;
  onNameChange: (v: string) => void;
  onAmountChange: (v: string) => void;
  onRemove: () => void;
};

const TransactionItemRow: React.FC<Props> = ({
  name,
  amount,
  onNameChange,
  onAmountChange,
  onRemove,
}) => (
  <div className="flex gap-2 mb-2 items-center">
    <input
      type="text"
      placeholder="Nama Transaksi"
      value={name}
      onChange={(e) => onNameChange(e.target.value)}
      className="flex-1 border rounded px-2 py-1 text-gray-700"
    />
    <input
      type="text"
      placeholder="Nominal (IDR)"
      value={amount}
      onChange={(e) => onAmountChange(e.target.value)}
      className="w-32 border rounded px-2 py-1 text-gray-700"
    />
    <button
      type="button"
      onClick={onRemove}
      className="text-red-500 font-bold px-2"
    >
      ×
    </button>
  </div>
);

export default TransactionItemRow;
