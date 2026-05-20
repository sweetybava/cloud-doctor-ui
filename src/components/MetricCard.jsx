import CountUp from "react-countup";

export default function MetricCard({
  title,
  value
}) {
  return (
    <div className="bg-[#071028] rounded-3xl p-8 border border-gray-800">

      <h2 className="text-gray-400 text-2xl mb-6">
        {title}
      </h2>

      <div className="text-6xl font-bold text-blue-400">
        <CountUp end={value || 0} duration={2} />
      </div>

    </div>
  );
}