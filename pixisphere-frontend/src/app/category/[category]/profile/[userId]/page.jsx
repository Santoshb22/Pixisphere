"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotographers } from '@/store/photographerSlice';

const Page = () => {
  const { userId, category } = useParams(); 
  const dispatch = useDispatch();

  const data = useSelector(state => state.photographer[category]);
  const loading = useSelector(state => state.photographer.loading);
  const error = useSelector(state => state.photographer.error);

  const [usersData, setUsersData] = useState(null);

  useEffect(() => {
    if (!data || data.length === 0) {
      dispatch(fetchPhotographers(category));
    }
  }, [category, dispatch]);

  useEffect(() => {
    if (data?.length) {
      const user = data.find(item => item.id === parseInt(userId));
      setUsersData(user);
    }
  }, [userId, data]);

  if (loading) return <div className="text-white p-4">Loading user...</div>;
  if (error) return <div className="text-red-500 p-4">{error}</div>;
  if (!usersData) return <div className="text-white p-4">User not found</div>;

  return (
     <div className="text-white p-6 py-22 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
        <img
          src={usersData.profilePic}
          alt={usersData.name}
          className="w-40 h-40 object-cover rounded-full border-4 border-gray-700 shadow-md"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">{usersData.name}</h1>
          <p className="text-gray-400 mt-2">{usersData.bio}</p>
          <div className="mt-4 text-sm text-gray-300 space-y-1">
            <p><span className="font-semibold text-gray-200">📍 Location:</span> {usersData.location}</p>
            <p><span className="font-semibold text-gray-200">💰 Price:</span> ₹{usersData.price}</p>
            <p><span className="font-semibold text-gray-200">⭐ Rating:</span> {usersData.rating}</p>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Tags & Styles</h2>
        <div className="flex flex-wrap gap-2">
          {usersData.tags.map((tag, index) => (
            <span key={index} className="bg-gray-700 text-sm px-3 py-1 rounded-full">{tag}</span>
          ))}
          {usersData.styles.map((style, index) => (
            <span key={index} className="bg-gray-800 text-sm px-3 py-1 rounded-full border border-gray-600">{style}</span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {usersData.portfolio.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Portfolio ${idx + 1}`}
              className="w-full border bg-white h-48 object-contain overflow-hidden rounded-lg shadow"
            />
          ))}
        </div>
      </div>
    </div>

  );
};

export default Page;
