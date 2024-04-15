import useList from "../hooks/useList";

export default function UseListContainer() {
  const [list, { set, push, removeAt, insertAt, updateAt, clear }] = useList([
    "First",
    "Second",
    "Third",
  ]);

  return (
    <section className="w-max m-auto text-center">
      <header>
        <h1>UseList</h1>
        <div className="flex gap-x-2 mb-4">
          <button
            disabled={list.length < 1}
            className="border rounded-sm p-4 bg-blue-700"
            onClick={() => insertAt(1, "woo")}
          >
            Insert After First
          </button>
          <button
            disabled={list.length < 2}
            className="border rounded-sm p-4 bg-blue-700"
            onClick={() => removeAt(1)}
          >
            Remove Second Item
          </button>
          <button
            className="border rounded-sm p-4 bg-blue-700"
            onClick={() => set(["1", "2", "3"])}
          >
            Reset
          </button>
          <button
            className="border rounded-sm p-4 bg-blue-700"
            onClick={() => clear()}
          >
            Clear
          </button>
        </div>
      </header>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
