import {
  LayoutDashboard,
  Shield,
  DollarSign,
  Bot,
  FileText
} from "lucide-react";

export default function Sidebar() {

  return (
    <div className="w-64 bg-slate-950 min-h-screen p-6 border-r border-slate-800">

      <h1 className="text-3xl font-bold text-blue-400 mb-10">
        Cloud Doctor
      </h1>

      <div className="space-y-6">

        <div className="flex items-center gap-3 text-white">
          <LayoutDashboard size={22} />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-3 text-white">
          <Shield size={22} />
          <span>Security</span>
        </div>

        <div className="flex items-center gap-3 text-white">
          <DollarSign size={22} />
          <span>Cost Optimization</span>
        </div>

        <div className="flex items-center gap-3 text-white">
          <Bot size={22} />
          <span>AI Assistant</span>
        </div>

        <div className="flex items-center gap-3 text-white">
          <FileText size={22} />
          <span>Reports</span>
        </div>

      </div>

    </div>
  );
}