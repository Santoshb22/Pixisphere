"use client";

import { fetchPhotographers } from '@/store/photographerSlice';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
  const [data, setData] = useState([]);
  const categoryType = params.category;

  console.log(data);

  useEffect(() => {
    const result = fetchPhotographers(categoryType);
    setData(result);
  }, [params])

  return (
    <div>
      {categoryType}
    </div>
  )
}

export default page