"use client";

import { TextareaHTMLAttributes } from "react";

interface CustomTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function CustomTextarea({
  id,
  name,
  placeholder,
  value,
  onChange,
  ...props
}: CustomTextareaProps) {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={props.rows || 10}
      className="w-full p-2.5 text-base placeholder:text-gray-400 bg-light dark:bg-dark rounded-lg my-2.5 mx-auto border border-dark dark:border-light focus-visible:outline-none"
      required
      {...props}
    />
  );
}
