/* 
The useVisibilityChange hook is useful for tracking the visibility state of a document or web page. It allows you to easily detect when the document is visible or hidden, and perform certain actions based on that information. The hook returns a boolean value indicating whether the document is currently visible or not, allowing components to react accordingly and update their rendering or behavior based on the visibility state.
*/

import { useState, useEffect } from "react";
import useVisibilityChange from "../hooks/useVisibilityChange";

export default function UseVisiblityChangeContainer() {
  const documentVisible = useVisibilityChange();
  const [tabAwayCount, setTabAwayCount] = useState(0);

  useEffect(() => {
    if (documentVisible === false) {
      setTabAwayCount((c) => c + 1);
    }
  }, [documentVisible]);

  return (
    <section className="text-center">
      <h1 className="text-2xl mt-4">useVisibilityChange</h1>
      <div>Tab Away Count: {tabAwayCount}</div>
    </section>
  );
}
