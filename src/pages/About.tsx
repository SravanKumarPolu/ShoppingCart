import { useState } from "react";

export function About() {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(count + 1);
    console.log(`count=${count}`);
  };
  const onDecrement = () => {
    setCount(count - 1);
    console.log(`count=${count}`);
  };
  return (
    <>
      <div className="d-flex flex-row  ">
        <button onClick={onIncrement} className="  btn btn-primary  p-2 m-4 ">
          Increment
        </button>
        <h2> count:{count}</h2>
        <button onClick={onDecrement} className="btn  btn-danger p-1 m-4">
          Dcrement{" "}
        </button>
      </div>
    </>
  );
}
