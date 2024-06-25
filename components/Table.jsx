import React from 'react';

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Nom</th>
            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Prix</th>
            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Description</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr>
            <td className="w-1/3 py-3 px-4">John Doe</td>
            <td className="w-1/3 py-3 px-4">john@example.com</td>
            <td className="w-1/3 py-3 px-4">Admin</td>
          </tr>
          <tr className="bg-gray-100">
            <td className="w-1/3 py-3 px-4">Jane Smith</td>
            <td className="w-1/3 py-3 px-4">jane@example.com</td>
            <td className="w-1/3 py-3 px-4">Editor</td>
          </tr>
          <tr>
            <td className="w-1/3 py-3 px-4">Tom Johnson</td>
            <td className="w-1/3 py-3 px-4">tom@example.com</td>
            <td className="w-1/3 py-3 px-4">Subscriber</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;