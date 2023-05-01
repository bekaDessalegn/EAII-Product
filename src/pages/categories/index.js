import React, { useState } from 'react'
import Navbar from '../../../components/navbar'
import CategoriesComponent from '../../../components/categories_component'
import AddIcon from '@mui/icons-material/Add';
import CategoryModal from '../../../components/category_modal';

const Categories = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <Navbar />
    <CategoriesComponent />
    <div className='fixed bottom-16 right-16'>
      <div onClick={() => setIsOpen(true)} className='p-4 rounded-full cursor-pointer bg-primaryColor text-onPrimary hover:bg-secondaryColor'>
        <AddIcon />
      </div>
      </div>
      <CategoryModal isOpen={isOpen} onTap={() => setIsOpen(!isOpen)}/>
    </>
  )
}

export default Categories