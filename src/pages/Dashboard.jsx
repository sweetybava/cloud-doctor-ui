import { useEffect, useState } from "react";

import api from "../services/api";

import Sidebar from "../components/Sidebar";
import MetricCard from "../components/MetricCard";
import FindingsTable from "../components/FindingsTable";

import SeverityChart from "../charts/SeverityChart";

export default function Dashboard() {

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchDashboard();

  }, []);

  const fetchDashboard = async () => {

    try {

      const response = await api.get("/dashboard");

      setData(response.data);

    } catch (err) {

      console.error(err);

    } finally {

      setLoading(false);

    }
  };

  if (loading) {

    return (

      <div className="bg-slate-950 text-white h-screen flex items-center justify-center">

        Loading Cloud Doctor...

      </div>
    );
  }

  return (

    <div className="flex bg-slate-950 min-h-screen text-white">

      <Sidebar />

      <div className="flex-1 p-10">

        <h1 className="text-5xl font-bold mb-10">
          Cloud Doctor Dashboard
        </h1>

        <div className="grid grid-cols-2 gap-6 mb-8">

          <MetricCard
            title="Health Score"
            value={data.health}
          />

          <MetricCard
            title="Security Score"
            value={data.security}
          />

          <MetricCard
            title="Cost Score"
            value={data.cost}
          />

          <MetricCard
            title="Availability"
            value={data.availability}
          />

        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">

          <SeverityChart
            summary={data.summary}
          />

          <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">

            <h2 className="text-2xl font-bold mb-6">
              AI Recommendation
            </h2>

            <p className="text-gray-300 leading-8">
              {data.ai_recommendation}
            </p>

          </div>

        </div>

        <FindingsTable
          findings={data.findings}
        />

      </div>

    </div>
  );
}