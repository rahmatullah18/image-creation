import React from "react";
import { TypeInputProps } from "./typeInputProps";

export const Input = ({ value, handleOnChange }: TypeInputProps) => {
  return (
    <input
      type="text"
      className="w-full h-12 px-4 text-xl font-semibold rounded-full shadow-lg outline-none text-button-text"
      placeholder="Type here..."
      value={value}
      onChange={handleOnChange}
      required
    />
  );
};
