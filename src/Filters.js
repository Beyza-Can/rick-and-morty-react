import React, { useState } from "react";

const Filters = ({
  onFilterChange,
  sortCriteria,
  setSortCriteria,
  sortOrder,
  setSortOrder,
  handleSort,
  setPageSize,
}) => {
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");

  const applyFilters = () => {
    onFilterChange({ nameFilter, statusFilter, speciesFilter });
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="filters">
      <div className="filter-row">
        <label htmlFor="nameFilter">Name Filter:</label>
        <input
          type="text"
          id="nameFilter"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
      </div>
      <div className="filter-row">
        <label htmlFor="statusFilter">Status Filter:</label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">Tüm Durumlar</option>
          <option value="alive">Yaşıyor</option>
          <option value="dead">Ölü</option>
          <option value="unknown">Bilinmiyor</option>
        </select>

        <label htmlFor="speciesFilter">Species Filter:</label>
        <select
          id="speciesFilter"
          value={speciesFilter}
          onChange={(e) => setSpeciesFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Robot">Robot</option>
        </select>
        <button onClick={applyFilters}>Filtrele</button>
      </div>
      <div className="filter-row">
        <label htmlFor="sortCriteria">Sırala:</label>
        <select
          id="sortCriteria"
          value={sortCriteria}
          onChange={(e) => setSortCriteria(e.target.value)}
        >
          <option value="id">ID</option>
          <option value="name">name</option>
          <option value="status">status</option>
          <option value="species">species</option>
          <option value="type">type</option>
        </select>
        <button onClick={toggleSortOrder}>
          {sortOrder === "asc" ? "Artan" : "Azalan"}
        </button>
        <button onClick={handleSort}>Sırala</button>
      </div>
      <div className="filter-row">
        <label htmlFor="pageSize">Results per page:</label>
        <select
          id="pageSize"
          onChange={(e) => setPageSize(parseInt(e.target.value, 10))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
