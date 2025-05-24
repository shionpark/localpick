"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen ">
      <div className="flex justify-center items-center">
        <Link href={"/map"}>지도</Link>
      </div>
    </main>
  );
}
