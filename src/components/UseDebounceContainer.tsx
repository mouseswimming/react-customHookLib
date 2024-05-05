import { useState } from "react";
import useDebounce from "../hooks/useDebounce";

export default function UseDebounceContainer() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTearm = useDebounce(searchTerm, 300);

  return (
    <section className="m-auto w-max">
      <header>
        <h1>useDebounce</h1>
        <form>
          <input
            className="p-2 border"
            name="search"
            placeholder="Search here"
            style={{ background: "var(--charcoal)" }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
      </header>
      <p className="mt-2">current search team: {debouncedSearchTearm}</p>
    </section>
  );
}
