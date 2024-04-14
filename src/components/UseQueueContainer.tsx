import useQueue from "../hooks/useQueue";

type QueueType<T> = {
  first: T;
  last: T;
  size: number;
  queue: T[];
};

function QueueDemo<T extends React.ReactNode>({
  first,
  last,
  size,
  queue,
}: QueueType<T>) {
  return (
    <figure className="w-[80vw] mt-6 text-center">
      <article className="grid grid-cols-[auto_1fr_auto] gap-x-2 items-center">
        <p>Front</p>
        <ul className="bg-black/70 p-2 rounded-md flex gap-x-2 h-20">
          {queue.map((item, i) => {
            const isFirst = first === item;
            const isLast = last === item;
            if (isFirst) {
              return (
                <li
                  className="h-full border border-blue-400 rounded p-2 flex items-center bg-white"
                  key={i}
                >
                  First: {item}
                </li>
              );
            }
            if (isLast) {
              return (
                <li
                  className="h-full border border-blue-400 rounded p-2 flex items-center bg-white"
                  key={i}
                >
                  Last: {item}
                </li>
              );
            }
            return (
              <li
                className="h-full border border-blue-400 rounded p-2 flex items-center bg-white"
                key={i}
              >
                Item: {item}
              </li>
            );
          })}
        </ul>
        <p>Back</p>
      </article>
      <figcaption className="mt-8">{size} items in the queue</figcaption>
    </figure>
  );
}

export default function UseQueueContainer() {
  const { add, remove, clear, first, last, size, queue } = useQueue([1, 2, 3]);

  return (
    <div className="w-max p-8 border m-auto mt-4 rounded-lg">
      <header className="text-center">
        <h1>UseQueue</h1>
        <div className="flex gap-x-2 justify-center">
          <button
            className="primary-button"
            onClick={() => add((last || 0) + 1)}
          >
            Add
          </button>
          <button
            disabled={size === 0}
            className="primary-button"
            onClick={() => remove()}
          >
            Remove
          </button>
          <button
            disabled={size === 0}
            className="primary-button"
            onClick={() => clear()}
          >
            Clear
          </button>
        </div>
      </header>
      <QueueDemo queue={queue} size={size} first={first} last={last} />
    </div>
  );
}
