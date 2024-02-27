import { useContext } from "react";
import { CounterContext } from "../App";

export function BtnIncrement() {
  const context = useContext(CounterContext);
  return <button onClick={context.onIncrement}>Aumentami</button>;
}
export default BtnIncrement;
