import React from "react";

export function CurrencyTable() {
  return (
    <table className="mt-16 table-auto w-full">
      <thead className="bg-accent text-white">
        <tr>
          <th className="px-4 py-2">Exchange</th>
          <th className="px-4 py-2">Value(USD)</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-gray-200">
          <td className="border px-4 py-2">Intro to CSS</td>
          <td className="border px-4 py-2">Adam</td>
        </tr>
        <tr className="bg-secondary">
          <td className="border px-4 py-2">Adam</td>
          <td className="border px-4 py-2">112</td>
        </tr>
      </tbody>
    </table>
  );
}
