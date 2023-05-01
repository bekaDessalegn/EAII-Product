import React, { useState } from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import EditCategoryModal from './edit_category_modal'
import DeleteModal from './delete_modal'

const categories = [
   { name: "Health", description: "Products for Health Sector."},
   { name: "Health", description: "Products for Health Sector."},
   { name: "Health", description: "Products for Health Sector."},
   { name: "Health", description: "Products for Health Sector."},
   { name: "Health", description: "Products for Health Sector."},
]

const CategoriesComponent = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  function onDelete() {
    console.log("Delete");
  }

  return (
    <>
    <DeleteModal onClick={onDelete} isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="Delete link">
        <p>Are you sure you want to delete this category ?</p>
      </DeleteModal>
    <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-10 mx-10 mt-10'>
      {categories.map((category) => (
        <div className='border-2 rounded-md px-8 py-8 bg-surface'>
        <div className='w-full flex justify-end'>
          <BiEdit onClick={() => setIsOpen(true)} size={21} className='text-primaryColor cursor-pointer'/>
          <AiOutlineDelete onClick={() => setIsDeleteOpen(true)} size={21} className='text-dangerColor cursor-pointer ml-2'/>
          </div>
        <p className='text-[24px]'>Health</p>
        <p className='text-[16px]'>Products for Health Sector.</p>
      </div>
      ))}
    </div>
    <EditCategoryModal isOpen={isOpen} onTap={() => setIsOpen(!isOpen)}/>
    </>
  )
}

export default CategoriesComponent