import Chart from "../charts/Chart";

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
