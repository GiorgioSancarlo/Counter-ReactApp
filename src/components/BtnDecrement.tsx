import { useContext } from "react";
import { CounterContext } from "../App";

export function BtnDecrement() {
  const context = useContext(CounterContext);
  return (
    <button onClick={context.onDecrement} disabled={context.counter === 0}>
      Diminuiscimi
    </button>
  );
}
export default BtnDecrement;
