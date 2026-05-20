import {
  LayoutDashboard,
  Shield,
  DollarSign,
  Bot,
  FileText
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-72 bg-[#071028] border-r border-gray-800 p-6">
      <h1 className="text-4xl font-bold text-blue-400 mb-10">
        Cloud Doctor
      </h1>

      <div className="space-y-6 text-xl">

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <LayoutDashboard />
          Dashboard
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <Shield />
          Security
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <DollarSign />
          Cost Optimization
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <Bot />
          AI Assistant
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FileText />
          Reports
        </div>

      </div>
    </div>
  );
}