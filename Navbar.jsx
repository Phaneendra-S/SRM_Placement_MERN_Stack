import { Crown } from "lucide-react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center px-3 py-4 bg-[#f6f6f4]">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        <div className="flex items-center">
          <Crown />
        </div>
        <div className="text-xl font-bold text-black">Clause</div>

        <div className="flex gap-8 text-gray-700 font-medium">
          <div className="cursor-pointer hover:text-green-900">Solutions</div>

          <div className="cursor-pointer hover:text-green-900">Customers</div>

          <div className="cursor-pointer hover:text-green-900">Pricing</div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <button className="px-5 py-2 rounded-lg text-green-900 font-medium hover:bg-gray-100">
          Log In
        </button>

        <button className="bg-green-900 text-white px-5 py-2 rounded-lg hover:bg-green-800 shadow-md">
          Start Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
