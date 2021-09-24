import React from "react";
import { useGlobalContext } from "../utils/context";

const SearchForm = () => {
  const { query, handleSearch } = useGlobalContext();
  return (
    <section onSubmit={(e) => e.preventDefault()} className="searchFunction">
      <div>
        <input
          type="text"
          placeholder="search"
          className="search"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </section>
  );
};

export default SearchForm;
