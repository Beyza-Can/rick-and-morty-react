import React, { useEffect, useState } from "react";
import CharacterTable from "./CharacterTable";
import Filters from "./Filters";
import Pagination from "./Pagination";
import "./App.css";

const API_URL = "https://rickandmortyapi.com/api/character";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortCriteria, setSortCriteria] = useState("id");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = [];
        let nextUrl = API_URL;
        while (nextUrl) {
          const response = await fetch(nextUrl);
          const result = await response.json();
          data = data.concat(result.results);
          nextUrl = result.info.next;
        }
        setCharacters(data);
        setFilteredCharacters(data);
      } catch (error) {
        console.error("API Fetch Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filters) => {
    const { nameFilter, statusFilter, speciesFilter } = filters;
    const filtered = characters.filter((char) => {
      return (
        (nameFilter ? char.name.toLowerCase().includes(nameFilter) : true) &&
        (statusFilter ? char.status.toLowerCase() === statusFilter.toLowerCase() : true) &&
        (speciesFilter ? char.species === speciesFilter : true)
      );
    });
    setFilteredCharacters(filtered);
    setCurrentPage(1);
  };

  const handleSort = () => {
    const sorted = [...filteredCharacters].sort((a, b) => {
      const aValue = a[sortCriteria] || "";
      const bValue = b[sortCriteria] || "";
      return sortOrder === "asc"
        ? aValue > bValue ? 1 : -1
        : aValue < bValue ? 1 : -1;
    });
    setFilteredCharacters(sorted);
  };

  const changePage = (direction) => {
    const totalPages = Math.ceil(filteredCharacters.length / pageSize);
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    } else if (direction === "next" && currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const currentCharacters = filteredCharacters.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="container">
      <h1>Rick and Morty Karakter Tablosu</h1>
      <Filters
        onFilterChange={handleFilterChange}
        sortCriteria={sortCriteria}
        setSortCriteria={setSortCriteria}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        handleSort={handleSort}
        setPageSize={setPageSize}
      />
      <CharacterTable characters={currentCharacters} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredCharacters.length / pageSize)}
        changePage={changePage}
      />
    </div>
  );
};

export default App;
