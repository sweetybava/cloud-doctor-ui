import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from "recharts";

export default function FindingsOverTime({
  history
}) {

  return (

    <div className="bg-slate-900 p-6 rounded-2xl">

      <h2 className="text-2xl font-bold mb-4">
        Findings Over Time
      </h2>

      <LineChart
        width={600}
        height={300}
        data={history}
      >

        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="timestamp" />

        <YAxis />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="health"
          stroke="#3b82f6"
        />

      </LineChart>

    </div>
  );
}