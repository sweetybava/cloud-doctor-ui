export default function FindingsTable({ findings }) {
  return (
    <div className="bg-[#111c44] rounded-2xl p-6">
      <h2 className="text-white text-2xl mb-6">
        Top Issues
      </h2>

      <div className="space-y-4">
        {findings.map((item, index) => (
          <div
            key={index}
            className="flex justify-between border-b border-gray-700 pb-4"
          >
            <div>
              <h3 className="text-white">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm">
                {item.service}
              </p>
            </div>

            <div
              className={`px-3 py-1 rounded-full text-sm
              ${
                item.severity === "Critical"
                  ? "bg-red-600"
                  : "bg-yellow-600"
              }`}
            >
              {item.severity}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}