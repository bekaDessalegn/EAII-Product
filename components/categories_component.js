import React, { useEffect, useState } from 'react'
import {BiEdit} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'
import EditCategoryModal from './edit_category_modal'
import DeleteModal from './delete_modal'
import CategoryModal from './category_modal'
import AddIcon from '@mui/icons-material/Add';

const CategoriesComponent = () => {

  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [categories, setCategories] = useState([])
  const [isOpen, setIsOpen] = useState(false)

  function onDelete() {
    console.log("Delete");
  }

  const fetchData = () => {

    const token = localStorage.getItem('token');

    const query = `
        query {
          categories{
            name
            description
          }
          }
        `;

        const options = {
        method: 'POST',
        headers: {
          "Accept": "*/*",
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
      },
        body: JSON.stringify({ query })
        };

        fetch(process.env.baseUrl, options)
        .then(response => response.json())
        .then(data => {

          let cats = data.data;

          if((typeof cats === 'undefined')) {

          } else {
            setCategories(data.data.categories);
          }
        });
  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
    <DeleteModal onClick={onDelete} isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="Delete link">
        <p>Are you sure you want to delete this category ?</p>
      </DeleteModal>
    <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-10 mx-10 mt-10'>
      {categories.length == 0 ? <div> Loading </div> : categories.map((category) => (
        <div className='border-2 rounded-md px-8 py-8 bg-surface'>
        <div className='w-full flex justify-end'>
          <BiEdit onClick={() => setIsEditOpen(true)} size={21} className='text-primaryColor cursor-pointer'/>
          <AiOutlineDelete onClick={() => setIsDeleteOpen(true)} size={21} className='text-dangerColor cursor-pointer ml-2'/>
          </div>
        <p className='text-[24px]'>{category.name}</p>
        <p className='text-[16px]'>{category.description}</p>
      </div>
      ))}
    </div>
    <EditCategoryModal isOpen={isEditOpen} onTap={() => setIsEditOpen(!isEditOpen)}/>
    <div className='fixed bottom-16 right-16'>
      <div onClick={() => setIsOpen(true)} className='p-4 rounded-full cursor-pointer bg-primaryColor text-onPrimary hover:bg-secondaryColor'>
        <AddIcon />
      </div>
      </div>
      <CategoryModal addCategory={(category) => setCategories([...categories, category])} isOpen={isOpen} onTap={() => setIsOpen(!isOpen)}/>
    </>
  )
}

export default CategoriesComponent