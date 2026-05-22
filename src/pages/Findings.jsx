import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import FindingsTable from "../components/FindingsTable";

const API =
  "https://wetj9jofcg.execute-api.us-east-1.amazonaws.com/prod/findings";

export default function Findings() {

  const [findings, setFindings] = useState([]);

  useEffect(() => {
    loadFindings();
  }, []);

  const loadFindings = async () => {

    try {

      const response = await axios.get(API);

      const result =
        typeof response.data.body === "string"
          ? JSON.parse(response.data.body)
          : response.data;

      setFindings(result.findings || []);

    } catch (err) {

      console.error(err);

    }
  };

  return (

    <div className="ml-72 p-10 bg-[#020817] min-h-screen">

      <Header title="Findings" />

      <FindingsTable findings={findings} />

    </div>
  );
}