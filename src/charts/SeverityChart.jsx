import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const COLORS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#3b82f6"
];

export default function SeverityChart({ data }) {
  return (
    <div className="bg-[#111c44] rounded-2xl p-6">
      <h2 className="text-white text-xl mb-6">
        Findings By Severity
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={120}
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}