import { useState } from "react";
import usePrevious from "../hooks/usePrevious";

function getRandomColor() {
  const colors = ["green", "blue", "purple", "red", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function UsePreviousContainer() {
  const [color, setColor] = useState(getRandomColor());
  const previousColor = usePrevious(color);

  const handleClick = () => {
    function getNewColor() {
      const newColor = getRandomColor();
      while (newColor === color) {
        getNewColor();
      }
      setColor(newColor);
    }
    getNewColor();
  };

  return (
    <div className="max-w-[1140px] m-auto p-6 text-center">
      <h1>Use Previous</h1>
      <button className="primary-button" onClick={handleClick}>
        Next
      </button>
      <article className="flex justify-between gap-x-4 max-w-[600px] max-h-[400px] m-auto mt-6">
        <figure className="w-full">
          <p
            style={{ background: `${previousColor}` }}
            className="w-full aspect-square rounded-2xl"
          />
          <figcaption>Previous: {previousColor}</figcaption>
        </figure>
        <figure className="w-full">
          <p
            style={{ background: `${color}` }}
            className="w-full aspect-square rounded-2xl"
          />
          <figcaption>Current: {color}</figcaption>
        </figure>
      </article>
    </div>
  );
}
