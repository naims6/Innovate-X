import { Trophy } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center cursor-pointer">
      <div className={`p-2 rounded-lg`}>
        <Trophy className={`w-6 h-6`} />
      </div>
      <span className={`text-2xl font-bold tracking-wide`}>InnovateX</span>
    </Link>
  );
};

export default Logo;
