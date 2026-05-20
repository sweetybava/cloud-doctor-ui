import api from "../services/api";

export default function Header() {

  async function runScan() {

    await api.post("/scan");

    window.location.reload();
  }

  return (

    <div className="flex justify-end mb-6">

      <button
        onClick={runScan}
        className="bg-blue-600 px-6 py-3 rounded-xl"
      >
        Run New Scan
      </button>

    </div>
  );
}