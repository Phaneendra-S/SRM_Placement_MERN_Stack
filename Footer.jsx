import { Grip, Cog, RotateCcw } from "lucide-react";

function Footer() {
  return (
    <div className="flex items-center justify-between px-16 py-5 bg-[#f6f6f4] border-t border-gray-200">
      {/* Left Side */}
      <div className="text-gray-800 font-semibold text-2xl leading-relaxed">
        More than 100+
        <br />
        companies partner
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-12 text-gray-500">
        <h2 className="text-4xl font-bold">HubSpot</h2>

        <h2 className="text-3xl font-semibold">Dropbox</h2>

        <div className="flex items-center gap-2">
          <Grip size={22} />
          <h2 className="text-3xl font-semibold">Square</h2>
        </div>

        <div className="flex items-center gap-2">
          <Cog size={22} />
          <h2 className="text-3xl font-semibold tracking-wide">INTERCOM</h2>
        </div>

        <div className="flex items-center gap-2">
          <RotateCcw size={22} />
          <h2 className="text-3xl font-semibold">Grammarly</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
