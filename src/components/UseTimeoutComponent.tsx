/* 
The useTimeout hook allows you to set up a timed callback in your components. The hook returns a function (handleClearInterval) that can be used to manually cancel or clear the timer if needed. This hook is beneficial for scenarios where delayed actions or timed events are required, such as implementing loading delays, animations, or auto-updating components.
*/

import { useCallback, useState } from "react";
import useTimeout from "../hooks/useTimeout";

const DELAY = 2;

type BombProps = {
  hasExploded: boolean;
  hasDefused: boolean;
  handleClick: () => void;
};
function Bomb({ hasExploded, hasDefused, handleClick }: BombProps) {
  if (hasExploded) {
    return (
      <figure>
        <span role="img" aria-label="Explosion Emoji" className="text-[120px]">
          💥
        </span>
        <figcaption className="text-2xl">You lose</figcaption>
      </figure>
    );
  }

  if (hasDefused) {
    return (
      <figure>
        <span role="img" aria-label="Explosion Emoji" className="text-[120px]">
          🎉
        </span>
        <figcaption className="text-2xl">You Win</figcaption>
      </figure>
    );
  }

  return (
    <button className="bomb" onClick={handleClick}>
      <span role="img" aria-label="Dynamite Emoji" className="text-[120px]">
        🧨
      </span>
    </button>
  );
}

export default function UseTimeoutComponent() {
  const [hasDefused, setHasDefused] = useState(false);
  const [hasExploded, setHasExplored] = useState(false);
  /* 
we need to memborize the callback so it won't trigger the constant rerender
*/
  const memoizedCallback = useCallback(() => {
    setHasExplored((prev) => !prev);
  }, []);

  const clear = useTimeout(memoizedCallback, DELAY * 1000);

  const handleClick = () => {
    clear();
    setHasDefused(true);
  };

  return (
    <div className="m-auto w-max pt-10 grid justify-center text-center">
      <h1 className="text-2xl">use Timeout</h1>
      <p>You have {DELAY}s to defuse (click) the bomb or it will explode </p>
      <button
        className="underline underline-offset-4 block text-center"
        onClick={() => {
          window.location.reload();
        }}
      >
        Reload
      </button>
      <Bomb
        hasDefused={hasDefused}
        hasExploded={hasExploded}
        handleClick={handleClick}
      />
    </div>
  );
}
