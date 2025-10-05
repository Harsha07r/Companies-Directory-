import React from "react";

export default function Pagination({ page, setPage, totalPages }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="mt-4 flex gap-2">
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`px-3 py-1 rounded ${p === page ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
