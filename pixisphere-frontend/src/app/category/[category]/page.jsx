"use client";
import { use, useState } from "react"; 
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotographers } from '@/store/photographerSlice';
import PhotographerCard from "@/components/Category/PhotographerCard";
import FilterByRating from "@/components/Category/FilterByRating";

const CategoryPage = ({ params }) => {
  const dispatch = useDispatch();
  const { category } = use(params); 

  const data = useSelector(state => state.photographer[category]);
  const loading = useSelector(state => state.photographer.loading);
  const error = useSelector(state => state.photographer.error);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    dispatch(fetchPhotographers(category));
  }, [dispatch, category]);

  return (
    <div className="text-white p-4">
      <h1 className="text-xl font-bold">{`${category.toUpperCase()} PHOTOGRAPHERS`}</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="mt-8">
        <FilterByRating setFilteredData = {setFilteredData} filteredData={filteredData}/>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.map((item) => (
          <PhotographerCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
