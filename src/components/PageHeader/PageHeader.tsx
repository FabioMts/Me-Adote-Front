import React from "react";

export default function PageHeader({ title }: { title: string }) {
  return (
    <div className="flex flex-row h-48 text-white bg-indigo-600 items-center p-20 w-full justify-center">
      <div className="text-white font-bold text-2xl">{title}</div>
    </div>
  );
}
