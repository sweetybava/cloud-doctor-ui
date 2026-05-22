export default function ScoreCard({
  title,
  score
}) {

  return (

    <div className="bg-[#111c44] rounded-2xl p-6">

      <h2 className="text-gray-400 text-lg">
        {title}
      </h2>

      <p className="text-5xl text-white font-bold mt-4">
        {score}
      </p>

    </div>
  );
}