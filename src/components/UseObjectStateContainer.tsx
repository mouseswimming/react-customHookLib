import useObjectState from "../hooks/useObjectState";

const initialState = {
  team: "Utah Jazz",
  wins: 2138,
  losses: 1789,
  championships: 0,
};

export default function UseObjectStateContainer() {
  const [stats, setStats] = useObjectState(initialState);

  const addWin = () => {
    setStats((s) => ({
      wins: s.wins + 1,
    }));
  };

  const addLoss = () => {
    setStats((s) => ({
      losses: s.losses + 1,
    }));
  };

  const reset = () => {
    setStats(initialState);
  };
  return (
    <section>
      <h1>useObjectState</h1>

      <div className="flex gap-x-2">
        <button className="border bg-green-700 rounded-md" onClick={addWin}>
          Add Win
        </button>
        <button className="border bg-green-700 rounded-md" onClick={addLoss}>
          Add Loss
        </button>

        <button
          className="border bg-green-700 rounded-md"
          onClick={() => alert("lol")}
        >
          Add Championship
        </button>
        <button className="border bg-green-700 rounded-md" onClick={reset}>
          Reset
        </button>
      </div>

      <table>
        <thead>
          <tr>
            {Object.keys(stats).map((key) => {
              return <th>{key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(stats).map((key) => {
              const value = stats[key as keyof typeof stats];
              return <td>{`${value}`}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </section>
  );
}
