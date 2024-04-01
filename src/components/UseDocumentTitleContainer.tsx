import { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

export default function UseDocumentTitleContainer() {
  const [count, setCount] = useState(0);

  useDocumentTitle(`new page count: ${count}`);

  return (
    <div className="container">
      <h1>Use Document Title Container</h1>
      <button className="primary-button" onClick={() => setCount(count + 1)}>
        Increment Count: {count}
      </button>
    </div>
  );
}
