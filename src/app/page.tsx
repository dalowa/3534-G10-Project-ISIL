import Image from "next/image";
import ProblemaSec from "./components/sections/ProblemaSec";
import PropuestasSec from "./components/sections/PropuestasSec";

export default function Home() {
  return (
    <main className="w-full">
      <h1 className="text-blue-600 font-semibold text-center text-title my-4">
        Vecinos de Villa el Salvador
      </h1>
      <ProblemaSec />
      <PropuestasSec />
    </main>
  );
}
