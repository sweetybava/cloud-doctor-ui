export default function Header({ title }) {

  return (

    <div className="flex justify-between items-center mb-10">

      <div>

        <h1 className="text-4xl text-white font-bold">
          {title}
        </h1>

        <p className="text-gray-400 mt-2">
          AWS Infrastructure Health Monitoring
        </p>

      </div>

      <button
        className="bg-cyan-500 px-6 py-3 rounded-xl text-black font-bold hover:bg-cyan-400"
      >
        Run Scan
      </button>

    </div>
  );
}