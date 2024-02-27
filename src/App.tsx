/*import { useContext, createContext, useState } from "react";

const CounterContext = createContext({
  count:0,
  increment:()=>{},
  decrement:()=>{},
});




const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };
  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };
  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

const IncrementButton = () => {
  const { increment } = useContext(CounterContext);
  return <button onClick={increment}>Incrementami</button>;
};

const DecrementButton = () => {
  const { decrement } = useContext(CounterContext);
  return <button onClick={decrement}>Decrementami</button>;
};

const Counter = () => {
  const { count } = useContext(CounterContext);
  return <p>Contatore:{count}</p>;
};

function App() {
  return (
    <CounterProvider>
      <div>
        <IncrementButton />
        <Counter />
        <DecrementButton />
      </div>
    </CounterProvider>
  );
}*/

import { createContext, useState } from "react";
import BtnDecrement from "./components/BtnDecrement";
import BtnIncrement from "./components/BtnIncrement";
import Counter from "./components/Counter";

export const CounterContext = createContext({
  counter: 0,
  onIncrement: () => {},
  onDecrement: () => {},
});
function App() {
  const [counter, setCounter] = useState(0);

  function onIncrement() {
    setCounter(counter + 1);
  }
  function onDecrement() {
    setCounter(counter - 1);
  }

  return (
    <CounterContext.Provider
      value={{
        counter,
        onIncrement,
        onDecrement,
      }}
    >
      <BtnDecrement />
      <Counter />
      <BtnIncrement />
    </CounterContext.Provider>
  );
}

export default App;
