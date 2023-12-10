import React,{ useState } from "react";
import "./search.sass";

interface TypeSearch {
  handleSearch:(searchValue:string) => void
}

const Search:React.FC<TypeSearch> = ({ handleSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    if (!value.length) {
      handleSearch("");
    }
  };

  return (
    <div className="search">
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="text"
          placeholder="Поиск ..."
          value={search}
          onChange={handleSearchChange}
        />
        <button
          onClick={() => handleSearch(search)}
          className="btn btn-outline-success"
          type="button"
        >
          Поиск
        </button>
      </form>
    </div>
  );
};

export default Search;
