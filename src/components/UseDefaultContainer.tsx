import useDefault from "../hooks/useDefault";

export default function UseDefaultContainer() {
  const [name, setName] = useDefault(undefined, "Random");

  return (
    <div className="container">
      <h1>Use Default</h1>
      <div className="flex gap-x-2 mb-4">
        <button
          className="primary-button min-w-20"
          onClick={() => setName("Lynon")}
        >
          Lynon
        </button>
        <button
          className="primary-button min-w-20"
          onClick={() => setName("Tyler")}
        >
          Tyler
        </button>
        <button
          className="primary-button min-w-20"
          onClick={() => setName(undefined)}
        >
          null
        </button>
      </div>
      {name && <div className="bg-black/20 p-4 w-max">Hello {name}</div>}
    </div>
  );
}
