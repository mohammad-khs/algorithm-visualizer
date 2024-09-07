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
    <div className="inline-block relative w-48 text-black">
      <select
        defaultValue={defaultValue}
        disabled={isDisabled}
        onChange={onChange}
      >
        {options.map((option) => (
          <option  key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
