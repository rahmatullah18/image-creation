import React from "react";
import { TypeButtonSubmitProps } from "./typeButtonSubmitProps";

export const ButtonSubmit = ({ children }: TypeButtonSubmitProps) => {
  return (
    <button
      type="submit"
      className="bg-button p-2 text-button-text rounded-full font-bold"
    >
      {children}
    </button>
  );
};
