import { runScan } from "../api/dashboardApi";
import toast from "react-hot-toast";

export default function RunScanButton() {

  const handleScan = async () => {

    toast.loading("Running AWS Scan...");

    try {

      await runScan();

      toast.dismiss();

      toast.success("Scan Completed");

      window.location.reload();

    } catch {

      toast.dismiss();

      toast.error("Scan Failed");
    }
  };

  return (
    <button
      onClick={handleScan}
      className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-xl"
    >
      Run New Scan
    </button>
  );
}