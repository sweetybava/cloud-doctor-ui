import { Bell, RefreshCw } from "lucide-react";

export default function Topbar({ runScan }) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-gray-400 mt-2">
          Overview of your AWS infrastructure health
        </p>
      </div>

      <div className="flex gap-4 items-center">
        <button
          onClick={runScan}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl flex items-center gap-2"
        >
          <RefreshCw size={18} />
          Run New Scan
        </button>

        <Bell className="text-white" />
      </div>
    </div>
  );
}