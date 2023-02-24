import React from "react";
import { TypeChildren } from "../../utils/TypeChildren";

export const Container = ({ children }: TypeChildren) => {
  return (
    <div className="flex items-center justify-center min-h-screen m-4 overflow-x-hidden bg-primary1">
      {children}
    </div>
  );
};
