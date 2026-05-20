export default function TopIssues({ dashboard }) {

  if (!dashboard?.findings) {
    return null;
  }

  return (

    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

      <h2 className="text-xl font-bold mb-4">
        Top Issues
      </h2>

      <ul className="space-y-4">

        {dashboard.findings.map((issue, index) => (

          <li
            key={index}
            className="bg-slate-800 p-4 rounded-xl"
          >

            <div className="font-bold">
              {issue.issue}
            </div>

            <div className="text-sm text-slate-400 mt-2">
              {issue.service}
            </div>

          </li>

        ))}

      </ul>

    </div>
  );
}