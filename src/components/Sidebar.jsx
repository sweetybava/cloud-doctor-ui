import {
  LayoutDashboard,
  Shield,
  DollarSign,
  Bot,
  FileText,
  Settings,
  Server,
  AlertTriangle
} from "lucide-react";

const menu = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Findings", icon: AlertTriangle },
  { name: "Resources", icon: Server },
  { name: "Security", icon: Shield },
  { name: "Cost Optimization", icon: DollarSign },
  { name: "AI Assistant", icon: Bot },
  { name: "Reports", icon: FileText },
  { name: "Settings", icon: Settings },
];

export default function Sidebar() {
  return (
    <div className="w-72 bg-[#081028] min-h-screen border-r border-gray-800">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-blue-400">
          Cloud Doctor
        </h1>

        <p className="text-gray-400 text-sm mt-2">
          AWS Infrastructure Health
        </p>
      </div>

      <div className="mt-8">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="flex items-center gap-4 px-6 py-4 text-gray-300 hover:bg-blue-600/20 hover:text-white cursor-pointer transition"
            >
              <Icon size={22} />
              <span>{item.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}