export default function MetricCard({
  title,
  value
}) {

  return (

    <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">

      <h2 className="text-gray-400 text-xl mb-4">
        {title}
      </h2>

      <div className="text-5xl font-bold text-blue-400">
        {value}
      </div>

    </div>
  );
}