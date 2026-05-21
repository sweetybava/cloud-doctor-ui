import {
  PieChart,
  Pie,
  Tooltip,
  Cell
} from "recharts";

const COLORS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e"
];

export default function SeverityChart({
  summary
}) {

  const data = [
    {
      name: "Critical",
      value: summary?.critical || 0
    },
    {
      name: "High",
      value: summary?.high || 0
    },
    {
      name: "Medium",
      value: summary?.medium || 0
    },
    {
      name: "Low",
      value: summary?.low || 0
    }
  ];

  return (

    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

      <h2 className="text-2xl font-bold mb-6">
        Findings by Severity
      </h2>

      <PieChart width={350} height={300}>

        <Pie
          data={data}
          dataKey="value"
          outerRadius={100}
        >

          {data.map((entry, index) => (

            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />

          ))}

        </Pie>

        <Tooltip />

      </PieChart>

    </div>
  );
}