import { SelectOptionsType } from "@/lib/types";
import React from "react";

export default function Select({
  options,
  defaultValue,

  onChange,
  isDisabled = false,
}: {
  options: SelectOptionsType[];
  defaultValue: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  isDisabled: boolean;
}) {
  return (
    <div className="inline-block relative w-48 ">
      <select
        className="appearance-none border-none bg-yellow-300 outline-none text-black border-l-indigo-700 rounded-lg m-4 px-4"
        defaultValue={defaultValue}
        disabled={isDisabled}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
