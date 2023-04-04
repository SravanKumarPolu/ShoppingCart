import Chart from "../charts/Chart";
import { useState } from "react";

export function Home() {
  return (
    <>
      <h1 className="text-warning">Home</h1>
      <div
        style={{ background: "linear-gradient( to right,palegreen, orange )" }}
      >
        <Chart />
      </div>
    </>
  );
}
