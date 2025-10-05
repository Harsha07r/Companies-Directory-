import React from "react";
import CompanyCard from "./CompanyCard";

export default function CompanyList({ companies }) {
  if (!companies.length) return <p>No companies found.</p>;

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {companies.map((c) => <CompanyCard key={c.id} company={c} />)}
    </div>
  );
}
