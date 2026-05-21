export default function ScoreCard({
  title,
  score,
  color
}) {
  return (
    <div className="bg-[#111c44] rounded-2xl p-6 border border-gray-800">
      <h2 className="text-gray-400 text-lg">
        {title}
      </h2>

      <div className={`text-5xl font-bold mt-4 ${color}`}>
        {score}
      </div>
    </div>
  );
}