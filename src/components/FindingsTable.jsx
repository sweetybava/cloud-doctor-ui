export default function FindingsTable({ findings }) {

  return (

    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

      <h2 className="text-2xl font-bold mb-6">
        Findings
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left text-gray-400 border-b border-slate-700">

            <th className="pb-3">Service</th>
            <th className="pb-3">Severity</th>
            <th className="pb-3">Issue</th>

          </tr>

        </thead>

        <tbody>

          {findings?.map((item, index) => (

            <tr
              key={index}
              className="border-b border-slate-800"
            >

              <td className="py-4">
                {item.service}
              </td>

              <td className="py-4">

                <span className="bg-red-500 px-3 py-1 rounded-lg text-sm">
                  {item.severity}
                </span>

              </td>

              <td className="py-4">
                {item.issue}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}