import React from 'react'
import Navbar from '../../../components/navbar'
import ProductsComponent from '../../../components/products_component'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Link from 'next/link';

const Products = () => {
  return (
    <>
    <Navbar />
    <ProductsComponent />
    <div className='fixed bottom-16 right-16'>
      <Link href='products/add_products'>
    <Fab className='bg-primaryColor text-onPrimary hover:bg-secondaryColor' aria-label="add">
        <AddIcon />
      </Fab>
      </Link>
      </div>
    </>
  )
}

export default Products