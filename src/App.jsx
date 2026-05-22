import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Resources from "./pages/Resources";
import Findings from "./pages/Findings";

export default function App() {

  return (

    <BrowserRouter>

      <Sidebar />

      <Routes>

        <Route
          path="/"
          element={<Dashboard />}
        />

        <Route
          path="/resources"
          element={<Resources />}
        />

        <Route
          path="/findings"
          element={<Findings />}
        />

      </Routes>

    </BrowserRouter>
  );
}