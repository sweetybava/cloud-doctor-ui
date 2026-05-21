import { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ScoreCard from "./components/ScoreCard";
import SeverityChart from "./charts/SeverityChart";
import FindingsTable from "./components/FindingsTable";

const API =
  "https://wetj9jofcg.execute-api.us-east-1.amazonaws.com/prod/dashboard";

export default function App() {
  const [data, setData] = useState(null);

  const loadDashboard = async () => {
    try {
      const response = await axios.get(API);
      setData(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadDashboard();
  }, []);

  if (!data) {
    return (
      <div className="bg-black min-h-screen text-white p-10">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex bg-[#020817] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-10">
        <Topbar runScan={loadDashboard} />

        <div className="grid grid-cols-4 gap-6">
          <ScoreCard
            title="Health Score"
            score={data.health_score}
            color="text-green-400"
          />

          <ScoreCard
            title="Security Score"
            score={data.security_score}
            color="text-blue-400"
          />

          <ScoreCard
            title="Cost Score"
            score={data.cost_score}
            color="text-yellow-400"
          />

          <ScoreCard
            title="Availability"
            score={data.availability}
            color="text-purple-400"
          />
        </div>

        <div className="grid grid-cols-2 gap-6 mt-8">
          <SeverityChart
            data={[
              { name: "Critical", value: 10 },
              { name: "High", value: 20 },
              { name: "Medium", value: 40 },
              { name: "Low", value: 30 }
            ]}
          />

          <FindingsTable
            findings={[
              {
                title: "Open Security Group",
                service: "EC2",
                severity: "Critical"
              },
              {
                title: "S3 Public Bucket",
                service: "S3",
                severity: "Critical"
              }
            ]}
          />
        </div>

        <div className="bg-[#111c44] p-8 rounded-2xl mt-8">
          <h2 className="text-2xl text-white mb-4">
            AI Recommendation
          </h2>

          <p className="text-gray-300">
            {data.ai_recommendation}
          </p>
        </div>
      </div>
    </div>
  );
}