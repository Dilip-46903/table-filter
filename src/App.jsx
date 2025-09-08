import React from "react";
import TableWithFilter from "./TableWithFilter";

export default function App() {
  const sampleData = [
    { id: 1, name: "Dilip", role: "Developer", city: "Ahmedabad" },
    { id: 2, name: "Dev", role: "Designer", city: "Modasa" },
    { id: 3, name: "Smit", role: "Manager", city: "Mumbai" },
    { id: 4, name: "Payal", role: "Developer", city: "Gandhinagar" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4">Dynamic Table with Filter</h1>
        <TableWithFilter data={sampleData} />
      </div>
    </div>
  );
}
