import useCounter from "../hooks/UseCounter";

export default function UseCounterContainer() {
  const [count, { increment, decrement, set, reset }] = useCounter(5, {
    min: 5,
    max: 10,
  });

  return (
    <section className="w-max p-4 border text-center m-auto mt-8 rounded">
      <h1>UseCounter</h1>
      <h6>with optional min / max</h6>
      <div className="flex gap-x-2 mt-4">
        <button
          disabled={count >= 10}
          className="primary-button"
          onClick={increment}
        >
          Increment
        </button>
        <button
          disabled={count <= 5}
          className="primary-button"
          onClick={decrement}
        >
          Decrement
        </button>
        <button className="primary-button" onClick={() => set(6)}>
          Set to 6
        </button>
        <button className="primary-button" onClick={reset}>
          Reset
        </button>
      </div>
      <p className="mt-4">Current counter: {count}</p>
    </section>
  );
}
