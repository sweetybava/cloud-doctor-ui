import { useEffect, useState } from "react";
import axios from "axios";

import Header from "../components/Header";

const API =
  "https://wetj9jofcg.execute-api.us-east-1.amazonaws.com/prod/inventory";

export default function Resources() {

  const [data, setData] = useState(null);

  useEffect(() => {
    loadInventory();
  }, []);

  const loadInventory = async () => {

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

      <Header title="Resources" />

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-[#111c44] p-8 rounded-2xl">

          <h2 className="text-gray-400 text-xl">
            EC2 Instances
          </h2>

          <p className="text-6xl text-white mt-4">
            {data.ec2}
          </p>

        </div>

        <div className="bg-[#111c44] p-8 rounded-2xl">

          <h2 className="text-gray-400 text-xl">
            S3 Buckets
          </h2>

          <p className="text-6xl text-white mt-4">
            {data.s3}
          </p>

        </div>

        <div className="bg-[#111c44] p-8 rounded-2xl">

          <h2 className="text-gray-400 text-xl">
            RDS Databases
          </h2>

          <p className="text-6xl text-white mt-4">
            {data.rds}
          </p>

        </div>

      </div>

    </div>
  );
}