import React from "react";

export default function Filters({
  search, setSearch,
  locationOptions, industryOptions,
  location, setLocation,
  industry, setIndustry,
  sort, setSort,
  resetFilters
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-4">
      <input
        className="border p-2 rounded"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select className="border p-2 rounded" value={location} onChange={(e) => setLocation(e.target.value)}>
        <option value="">All Locations</option>
        {locationOptions.map((l) => <option key={l}>{l}</option>)}
      </select>
      <select className="border p-2 rounded" value={industry} onChange={(e) => setIndustry(e.target.value)}>
        <option value="">All Industries</option>
        {industryOptions.map((i) => <option key={i}>{i}</option>)}
      </select>
      <select className="border p-2 rounded" value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="">Sort</option>
        <option value="name_asc">Name ↑</option>
        <option value="name_desc">Name ↓</option>
        <option value="employees_desc">Employees ↓</option>
      </select>
      <button onClick={resetFilters} className="bg-gray-200 px-3 py-2 rounded">Reset</button>
    </div>
  );
}
