import React from 'react'
import Navbar from '../../../components/navbar'
import ProductsComponent from '../../../components/products_component'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';

const Products = () => {
  return (
    <>
    <div className='flex flex-col'>
    <div className='w-screen h-screen flex flex-row justify-end items-end p-16 fixed'>
      <Link href='products/add_products'>
    <Fab className='bg-primaryColor text-onPrimary hover:bg-secondaryColor' aria-label="add">
        <AddIcon />
      </Fab>
      </Link>
      </div>
    <Navbar />
    <ProductsComponent />
      </div>
    </>
  )
}

export default Products