import React from "react";

export default function CompanyCard({ company }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      {/* Company Name */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {company.name}
      </h2>

      {/* Industry Tag */}
      <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mb-3">
        {company.industry}
      </span>

      {/* Location */}
      <p className="text-gray-600 mb-4">📍 {company.location}</p>

      {/* Stats */}
      <div className="flex gap-6 mb-4 text-sm text-gray-600">
        <div>
          <span className="font-semibold text-gray-800">{company.employees}</span> Employees
        </div>
        <div>
          Founded <span className="font-semibold text-gray-800">{company.founded}</span>
        </div>
      </div>

      {/* Website Button */}
      <a 
        href={company.website} 
        target="_blank" 
        rel="noreferrer" 
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Visit Website →
      </a>
    </div>
  );
}