import { useContext } from "react";
import { CounterContext } from "../App";

function Counter() {
  const context = useContext(CounterContext);
  return (
    <span style={{ color: context.counter === 0 ? "red" : "black" }}>
      {context.counter}
    </span>
  );
}
export default Counter;
