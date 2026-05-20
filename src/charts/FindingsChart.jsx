import {
  PieChart,
  Pie,
  Cell,
  Tooltip
} from "recharts";

const COLORS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#3b82f6"
];

export default function FindingsChart({ dashboard }) {

  if (!dashboard?.summary) {

    return null;
  }

  const data = [
    {
      name: "Critical",
      value: dashboard.summary.critical
    },
    {
      name: "High",
      value: dashboard.summary.high
    },
    {
      name: "Medium",
      value: dashboard.summary.medium
    },
    {
      name: "Low",
      value: dashboard.summary.low
    }
  ];

  return (

    <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">

      <h2 className="text-xl font-bold mb-4">
        Findings By Severity
      </h2>

      <PieChart width={350} height={300}>

        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={100}
          dataKey="value"
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