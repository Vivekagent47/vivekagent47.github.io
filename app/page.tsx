"use client";

import Loader from "@/components/Loader";

export default function Home() {
  return (
    <div className="text-white">
      <Loader onLoadingComplete={() => {}} />
    </div>
  );
}
