import useToggle from "../hooks/useToggle";

export default function UseToggleContainer() {
  const [toggle, setToggle] = useToggle(true);

  return (
    <div className="container">
      <h1>Use Toggle</h1>
      <div className="flex gap-x-4 mb-4">
        <button className="primary-button" onClick={() => setToggle(true)}>
          Turn on
        </button>
        <button className="primary-button" onClick={() => setToggle(false)}>
          Turn off
        </button>
        <button className="primary-button" onClick={setToggle}>
          Toggle
        </button>
        <button
          className="primary-button"
          onClick={() => setToggle("any value")}
        >
          (Also toggles)
        </button>
      </div>
      <p>Current Status: {`${toggle}`}</p>
    </div>
  );
}
