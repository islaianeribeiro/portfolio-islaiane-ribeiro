"use client";

import { InputHTMLAttributes } from "react";

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomInput({
  id,
  name,
  placeholder,
  value,
  onChange,
  ...props
}: CustomInputProps) {
  return (
    <input
      type={props.type || "text"}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-2.5 text-base placeholder:text-gray-400 bg-light dark:bg-dark rounded-lg my-2.5 mx-auto border border-dark dark:border-light focus-visible:outline-none"
      required
      {...props}
    />
  );
}
