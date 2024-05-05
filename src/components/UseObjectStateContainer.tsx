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

  const addChampion = () => {
    setStats((s) => ({
      championships: s.championships + 1,
    }));
  };

  const reset = () => {
    setStats(initialState);
  };
  return (
    <section className="m-auto w-max grid justify-center">
      <h1>useObjectState</h1>

      <div className="flex gap-x-2">
        <button className="border bg-green-700 rounded-md p-2" onClick={addWin}>
          Add Win
        </button>
        <button
          className="border bg-green-700 rounded-md p-2"
          onClick={addLoss}
        >
          Add Loss
        </button>

        <button
          className="border bg-green-700 rounded-md p-2"
          onClick={addChampion}
        >
          Add Championship
        </button>
        <button className="border bg-green-700 rounded-md p-2" onClick={reset}>
          Reset
        </button>
      </div>

      <table className="mt-6 text-center">
        <thead>
          <tr>
            {Object.keys(stats).map((key) => {
              return (
                <th className="border py-2 px-4" key={key}>
                  {key}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.keys(stats).map((key) => {
              const value = stats[key as keyof typeof stats];
              return (
                <td className="border py-2 px-4" key={value}>{`${value}`}</td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </section>
  );
}
