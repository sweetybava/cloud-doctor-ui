import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import ScoreCard from "../components/ScoreCard";
import FindingsTable from "../components/FindingsTable";

const API =
  "https://wetj9jofcg.execute-api.us-east-1.amazonaws.com/prod/dashboard";

export default function Dashboard() {

  const [data, setData] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {

    try {

      const response = await axios.get(API);

      const result =
        typeof response.data.body === "string"
          ? JSON.parse(response.data.body)
          : response.data;

      setData(result);

    } catch (err) {

      console.error(err);

    }
  };

  if (!data) {

    return (
      <div className="text-white p-10">
        Loading...
      </div>
    );
  }

  return (

    <div className="ml-72 p-10 bg-[#020817] min-h-screen">

      <Header title="Dashboard" />

      <div className="grid grid-cols-5 gap-6">

        <ScoreCard
          title="Health Score"
          score={data.health_score}
        />

        <ScoreCard
          title="Security Score"
          score={data.security_score}
        />

        <ScoreCard
          title="Cost Score"
          score={data.cost_score}
        />

        <ScoreCard
          title="Availability"
          score={data.availability}
        />

        <ScoreCard
          title="Findings"
          score={data.total_findings}
        />

      </div>

      <div className="bg-[#111c44] p-8 rounded-2xl mt-10">

        <h2 className="text-2xl text-white mb-4">
          AI Recommendation
        </h2>

        <p className="text-gray-300 leading-8">
          {data.ai_recommendation}
        </p>

      </div>

      <FindingsTable
        findings={data.findings || []}
      />

    </div>
  );
}