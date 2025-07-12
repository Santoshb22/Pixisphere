import React from 'react';

const FilterByRating = ({ filteredData, setFilteredData }) => {

  const handleRating = (e) => {
    const selectedRating = Number(e.target.value);
    
    const filtered = filteredData.filter(item => Math.floor(item.rating) === selectedRating);
    console.log(filtered);
    setFilteredData(filtered);
  };

  return (
    <div className="mb-4">
      <label htmlFor="filter" className="mr-2">Filter by rating</label>
      <select
        onChange={handleRating}
        className="bg-white text-black border rounded px-2 py-1"
        name="filter"
        id="filter"
      >
        <option value="">All</option>
        <option value="1">1 ★</option>
        <option value="2">2 ★</option>
        <option value="3">3 ★</option>
        <option value="4">4 ★</option>
        <option value="5">5 ★</option>
      </select>
    </div>
  );
};

export default FilterByRating;
