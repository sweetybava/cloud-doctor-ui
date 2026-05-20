import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

export default function FindingsOverTime({ data }) {
  return (
    <div className="bg-[#071028] p-8 rounded-3xl border border-gray-800">

      <h2 className="text-3xl font-bold mb-8">
        Findings Over Time
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <XAxis dataKey="timestamp" />
          <YAxis />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="critical"
            stroke="#ef4444"
          />

          <Line
            type="monotone"
            dataKey="high"
            stroke="#f59e0b"
          />

          <Line
            type="monotone"
            dataKey="medium"
            stroke="#3b82f6"
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}