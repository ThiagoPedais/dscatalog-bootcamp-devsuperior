import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from './Form';
import List from './List';

const Products = () =>{
  return (

    <Routes>
        <Route path="/" element={<List />} />
        <Route path=":productsId" element={<Form />} />
    </Routes>

  )
}

export default Products;