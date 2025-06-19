const applications = [
  { id: "0001", date: "28 December 2022", status: "Approved" },
  { id: "0002", date: "28 December 2022", status: "Rejected" },
  { id: "0003", date: "28 December 2022", status: "Approved" },
  { id: "0004", date: "28 December 2022", status: "Approved" },
  { id: "0005", date: "28 December 2022", status: "Approved" },
  { id: "0006", date: "28 December 2022", status: "Rejected" },
  { id: "0007", date: "28 December 2022", status: "Approved" },
  { id: "0008", date: "28 December 2022", status: "Rejected" },
];

export default function Table({ activeTab }) {
  const filtered = activeTab === "All" ? applications : applications.filter(app => app.status === activeTab);

  return (
    <div className="mt-4 px-2 sm:px-4 md:px-6">
      <div className="overflow-x-auto w-full border p-6 border-gray-300 rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="text-left text-base sm:text-lg border-b border-gray-300">
              <th className="py-2 sm:py-3 font-light min-w-[120px]">Application ID</th>
              <th className="py-2 sm:py-3 font-light min-w-[160px]">Date</th>
              <th className="py-2 sm:py-3 font-light min-w-[120px]">Status</th>
              <th className="py-2 sm:py-3 font-light min-w-[40px] text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((app, idx) => (
              <tr
                key={idx}
                className={`transition hover:bg-gray-50 ${
                  idx !== filtered.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <td className="text-blue-600 py-3 sm:py-4">{app.id}</td>
                <td className="py-3 sm:py-4 text-gray-600">{app.date}</td>
                <td className="py-3 sm:py-4">
                  <span
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      app.status === "Approved"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {app.status}
                  </span>
                </td>
                <td className="py-3 sm:py-4 text-center">⋮</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
