export default function AIRecommendation({ text }) {

  return (
    <div className="bg-[#071028] p-8 rounded-3xl border border-gray-800">

      <h2 className="text-3xl font-bold mb-6">
        AI Recommendation
      </h2>

      <div className="text-gray-300 whitespace-pre-wrap leading-8">
        {text}
      </div>

    </div>
  );
}