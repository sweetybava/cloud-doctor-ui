import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import MetricCard from "../components/MetricCard";
import RunScanButton from "../components/RunScanButton";
import AIRecommendation from "../components/AIRecommendation";

import FindingsOverTime from "../charts/FindingsOverTime";

import { getDashboard } from "../api/dashboardApi";

export default function Dashboard() {

  const [data, setData] = useState(null);

  useEffect(() => {

    loadDashboard();

  }, []);

  const loadDashboard = async () => {

  try {

    const res = await getDashboard();

    console.log("Dashboard API Response:", res);

    setData(res);

  } catch (err) {

    console.error("Dashboard Error:", err);
  }
};

  if (!data) {

    return (
      <MainLayout>
        Loading...
      </MainLayout>
    );
  }

  return (
    <MainLayout>

      <div className="flex justify-between mb-10">

        <h1 className="text-5xl font-bold">
          Cloud Doctor Dashboard
        </h1>

        <RunScanButton />

      </div>

      <div className="grid grid-cols-4 gap-6 mb-10">

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

      <div className="mb-10">
        <FindingsOverTime data={data.history} />
      </div>

      <AIRecommendation text={data.ai_recommendation} />

    </MainLayout>
  );
}