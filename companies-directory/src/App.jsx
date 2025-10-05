import React, { useState, useMemo } from "react";
import useFetch from "./hooks/useFetch";
import { COMPANIES_ENDPOINT } from "./api";
import Filters from "./components/Filters";
import CompanyList from "./components/CompanyList";
import Pagination from "./components/Pagination";

export default function App() {
  const { data, loading, error } = useFetch(COMPANIES_ENDPOINT, []);
  const companies = data || [];

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 6;

  const locationOptions = useMemo(
    () => Array.from(new Set(companies.map((c) => c.location))).sort(),
    [companies]
  );

  const industryOptions = useMemo(
    () => Array.from(new Set(companies.map((c) => c.industry))).sort(),
    [companies]
  );

  const filtered = useMemo(() => {
    let arr = companies.slice();
    if (search) arr = arr.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));
    if (location) arr = arr.filter((c) => c.location === location);
    if (industry) arr = arr.filter((c) => c.industry === industry);

    if (sort === "name_asc") arr.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "name_desc") arr.sort((a, b) => b.name.localeCompare(a.name));
    if (sort === "employees_desc") arr.sort((a, b) => b.employees - a.employees);

    return arr;
  }, [companies, search, location, industry, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  function resetFilters() {
    setSearch("");
    setLocation("");
    setIndustry("");
    setSort("");
    setPage(1);
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Companies Directory</h1>
      <Filters
        search={search}
        setSearch={setSearch}
        locationOptions={locationOptions}
        industryOptions={industryOptions}
        location={location}
        setLocation={setLocation}
        industry={industry}
        setIndustry={setIndustry}
        sort={sort}
        setSort={setSort}
        resetFilters={resetFilters}
      />

      {loading && <div>Loading companies...</div>}
      {error && <div className="text-red-500">Error loading data</div>}

      {!loading && !error && (
        <>
          <CompanyList companies={paged} />
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          <p className="mt-2 text-sm text-gray-600">
            Showing {paged.length} of {filtered.length} companies
          </p>
        </>
      )}
    </div>
  );
}
