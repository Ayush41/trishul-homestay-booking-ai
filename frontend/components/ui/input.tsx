import React from "react";

interface InputProps {
  type?: string;
  placeholder: string;
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type = "text",
  placeholder,
  label,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="
          border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-700
          text-black dark:text-white
          rounded-lg px-4 py-2
          focus:outline-none focus:ring-2 focus:ring-green-500
        "
      />
    </div>
  );
}