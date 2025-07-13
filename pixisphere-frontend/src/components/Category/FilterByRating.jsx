import React from 'react';

const FilterByRating = ({ data, setFilteredData }) => {

  const handleRating = (e) => {
    const selectedRating = Number(e.target.value);
    if(selectedRating === 0) {
      setFilteredData(data);
      return
    }
    const filtered = data.filter(item => Math.floor(item.rating) === selectedRating);
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
        <option value="0">All</option>
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
