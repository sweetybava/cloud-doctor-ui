export default function FindingsTable({
  findings
}) {

  return (

    <div className="bg-[#111c44] rounded-2xl p-6 mt-10">

      <h2 className="text-2xl text-white mb-6">
        Findings
      </h2>

      <table className="w-full text-left">

        <thead>

          <tr className="text-gray-400 border-b border-gray-700">

            <th className="pb-4">Service</th>
            <th className="pb-4">Severity</th>
            <th className="pb-4">Title</th>
            <th className="pb-4">Resource</th>

          </tr>

        </thead>

        <tbody>

          {findings.map((finding, index) => (

            <tr
              key={index}
              className="border-b border-gray-800"
            >

              <td className="py-4 text-white">
                {finding.service}
              </td>

              <td className="py-4 text-red-400">
                {finding.severity}
              </td>

              <td className="py-4 text-white">
                {finding.title}
              </td>

              <td className="py-4 text-gray-400">
                {finding.resource}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}