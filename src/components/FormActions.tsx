import React from "react";

type Props = {
  onSave: () => void;
  onCancel: () => void;
};

const FormActions: React.FC<Props> = ({ onSave, onCancel }) => (
  <div className="flex gap-4 mt-8 justify-end">
    <button className="bg-green-600  px-6 py-2 rounded" onClick={onSave}>
      Simpan
    </button>
    <button className="bg-red-600  px-6 py-2 rounded" onClick={onCancel}>
      Batal
    </button>
  </div>
);

export default FormActions;
