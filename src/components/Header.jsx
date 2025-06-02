import { ChevronDown } from "lucide-react";
import { Link } from "react-router";

export default function Header({ title, link }) {
  return (
    <header className="bg-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          <button className="text-blue-500 hover:text-blue-600 font-medium">
            <Link to={link}>{title}</Link>
          </button>
          <div className="flex items-center gap-1 cursor-pointer hover:text-gray-600">
            <span className="text-gray-700 font-medium">ENG</span>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>

        {/* Right side - Logo placeholder */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Company Logo" className="h-8 w-auto" />
        </div>
      </div>
    </header>
  );
}
