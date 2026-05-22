import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaServer,
  FaSearch,
  FaChartBar
} from "react-icons/fa";

export default function Sidebar() {

  return (

    <div className="w-72 h-screen bg-[#081028] text-white p-6 fixed">

      <h1 className="text-3xl font-bold mb-10">
        Cloud Doctor
      </h1>

      <div className="space-y-6">

        <Link
          to="/"
          className="flex items-center gap-4 text-lg hover:text-cyan-400"
        >
          <FaChartBar />
          Dashboard
        </Link>

        <Link
          to="/resources"
          className="flex items-center gap-4 text-lg hover:text-cyan-400"
        >
          <FaServer />
          Resources
        </Link>

        <Link
          to="/findings"
          className="flex items-center gap-4 text-lg hover:text-cyan-400"
        >
          <FaSearch />
          Findings
        </Link>

        <Link
          to="/security"
          className="flex items-center gap-4 text-lg hover:text-cyan-400"
        >
          <FaShieldAlt />
          Security
        </Link>

      </div>

    </div>
  );
}