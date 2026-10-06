import React from 'react';
import { Check, Minus } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const columns = [
    "Saves teachers' time",
    'Simple to learn',
    'Affordable',
    'Everything in one app',
    'Parent app',
  ];

  const rows = [
    {
      name: 'EduMojo',
      highlight: true,
      values: [true, true, true, true, true],
    },
    {
      name: 'Typical school ERP',
      highlight: false,
      values: [false, false, false, true, true],
    },
    {
      name: 'Spreadsheets & registers',
      highlight: false,
      values: [false, true, true, false, false],
    },
  ];

  return (
    <div className="page-container overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b border-[rgba(11,31,20,0.08)]">
              <th className="py-4 px-4 text-xs font-bold uppercase tracking-wider text-[#6b7a72] w-1/4">
                Platform
              </th>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className="py-4 px-3 text-xs font-bold uppercase tracking-wider text-[#6b7a72] text-center"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rIdx) => (
              <tr
                key={rIdx}
                className={`border-b border-[rgba(11,31,20,0.06)] transition-colors ${
                  row.highlight
                    ? 'bg-[#16a34a]/8 font-bold'
                    : 'hover:bg-slate-50/60'
                }`}
              >
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-sm sm:text-base ${
                        row.highlight
                          ? 'font-black text-[#15803d]'
                          : 'font-medium text-[#0b1f14]'
                      }`}
                    >
                      {row.name}
                    </span>
                    {row.highlight && (
                      <span className="text-[10px] uppercase font-mono font-bold bg-[#16a34a] text-white px-2 py-0.5 rounded-full">
                        Recommended
                      </span>
                    )}
                  </div>
                </td>
                {row.values.map((val, vIdx) => (
                  <td key={vIdx} className="py-4 px-3 text-center">
                    {val ? (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#16a34a]/15 text-[#15803d]">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full text-slate-300">
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
