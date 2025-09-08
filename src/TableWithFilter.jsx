import React, { useState } from "react";

export default function TableWithFilter({ data }) {
  const [search, setSearch] = useState("");

  if (!data || data.length === 0) {
    return <p>No data available</p>;
  }

  const headers = Object.keys(data[0]);

  // 🔍 filter rows by search input
  const filteredData = data.filter((row) =>
    headers.some((header) =>
      String(row[header]).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="p-4">
      {/* Search box */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 w-full max-w-sm px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
      />

      <div className="overflow-x-auto">
        <table className="border border-gray-300 w-full text-left rounded-lg shadow">
          <thead>
            <tr className="bg-gray-200">
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="border border-gray-300 p-2 capitalize"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  {headers.map((header, colIndex) => (
                    <td key={colIndex} className="border border-gray-300 p-2">
                      {row[header]}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={headers.length} className="text-center p-4">
                  No matching results
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
