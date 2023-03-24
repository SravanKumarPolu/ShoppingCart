import { useState } from "react";

export function Home() {
  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(count + 1);
    console.log(`count=${count}`);
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={onIncrement}>Increment {count}</button>
    </>
  );
}
