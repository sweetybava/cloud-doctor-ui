export default function StatCards({ dashboard }) {

  const cards = [
    {
      title: "Health Score",
      value: dashboard.health
    },
    {
      title: "Security Score",
      value: dashboard.security
    },
    {
      title: "Cost Score",
      value: dashboard.cost
    },
    {
      title: "Availability",
      value: dashboard.availability
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {cards.map((card, index) => (

        <div
          key={index}
          className="bg-slate-900 p-6 rounded-2xl border border-slate-800"
        >
          <h2 className="text-slate-400">
            {card.title}
          </h2>

          <p className="text-4xl font-bold mt-4 text-blue-400">
            {card.value}
          </p>

        </div>

      ))}

    </div>
  );
}