import { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {

    axios
      .get("https://wetj9jofcg.execute-api.us-east-1.amazonaws.com/prod/dashboard")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  if (!data) {
    return (
      <div
        style={{
          background: "#020817",
          color: "white",
          height: "100vh",
          padding: "40px",
          fontSize: "30px"
        }}
      >
        Loading ...
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#020817",
        minHeight: "100vh",
        color: "white",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1>Cloud Doctor Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
          marginTop: "30px"
        }}
      >

        <div
          style={{
            background: "#0f172a",
            padding: "30px",
            borderRadius: "10px"
          }}
        >
          <h2>Health Score</h2>
          <h1>{data.health}</h1>
        </div>

        <div
          style={{
            background: "#0f172a",
            padding: "30px",
            borderRadius: "10px"
          }}
        >
          <h2>Security Score</h2>
          <h1>{data.security}</h1>
        </div>

        <div
          style={{
            background: "#0f172a",
            padding: "30px",
            borderRadius: "10px"
          }}
        >
          <h2>Cost Score</h2>
          <h1>{data.cost}</h1>
        </div>

        <div
          style={{
            background: "#0f172a",
            padding: "30px",
            borderRadius: "10px"
          }}
        >
          <h2>Availability</h2>
          <h1>{data.availability}</h1>
        </div>

      </div>

      <div
        style={{
          background: "#0f172a",
          marginTop: "30px",
          padding: "30px",
          borderRadius: "10px"
        }}
      >
        <h2>AI Recommendation</h2>

        <p>
          {data.ai_recommendation}
        </p>
      </div>

    </div>
  );
}

export default App;