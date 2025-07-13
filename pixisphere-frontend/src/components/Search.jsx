import { addSearchData, removeSearchedData } from '@/store/SearchSlice';
import { useParams, usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';

let debounceTimerId;

const Search = () => {
  const params = useParams();
  const category = params?.category;    
  const data = useSelector(state => state.photographer[category])
  const [searchText, setSearchText] = useState("");
  const [searchedData, setSearchedData] = useState([]);

  const dispatch = useDispatch();
  const pathname = usePathname();

  const hideSearchOn = ['/', '/category/maternity/profile/userId'];

  if (hideSearchOn.includes(pathname)) return null;


  useEffect(() => {
    if(searchText.trim() === "") {
      dispatch(removeSearchedData());
      return 
    }

    clearTimeout(debounceTimerId);

    debounceTimerId = setTimeout(() => {
      const query = searchText.toLowerCase();

      const filter = data.filter(item => {
      const nameMatch = item.name.toLowerCase().includes(query);
      const locationMatch = item.location.toLowerCase().includes(query);
      const tagsMatch = item.tags?.some(tag =>
        tag.toLowerCase().includes(query)
      )
      const stylesMatch = item.styles?.some(style =>
        style.toLowerCase().includes(query)
      )
      return nameMatch || locationMatch || tagsMatch || stylesMatch;
      })

      dispatch(addSearchData(filter));

      return () => clearTimeout(debounceTimerId);
    }, 500)
  }, [searchText, data, dispatch])

  return (
    <div className="flex items-center my-4 md:my-0 gap-2 border border-gray-600 rounded-md px-3 py-1 bg-gray-800">
        <label htmlFor="search">
        <CiSearch size={22} />
        </label>
        <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="bg-gray-800 outline-none w-full text-gray-200 placeholder-gray-400"
        type="text"
        name="search"
        id="search"
        placeholder="Search by name, tags & location"
        />
    </div>
  )
}

export default Search