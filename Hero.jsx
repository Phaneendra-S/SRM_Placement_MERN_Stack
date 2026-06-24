import { Zap } from "lucide-react";

function Hero() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 py-20 px-50 bg-[#f6f6f4]">
        <div className="flex items-center gap-2 green-900">
          <Zap />
          <h1 className="text-green-900 font-bold">CREATE FOR FAST</h1>
        </div>
        <div className="font-bold text-6xl text-center text-black px-1">
          <h2>One tool to manage contracts and your team</h2>
        </div>
        <div className="text-center text-black-700 px-55 py-8">
          <p>
            Clause helps legal teams work faster and more efficiently.
            Delivering the visibility and data-driven insights to mitigate risk
            and ensure compliance.
          </p>
        </div>
        <div className="flex gap-4 px-10">
          <button className="bg-green-900 text-white px-5 py-2 rounded-lg hover:bg-green-800 shadow-md">
            Start for free
          </button>
          <button className="px-5 py-2 rounded-lg text-green-900 font-medium hover:bg-gray-100">
            Get a demo
          </button>
        </div>
      </div>
    </>
  );
}
export default Hero;
