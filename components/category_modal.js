import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const CategoryModal = ({isOpen, onTap}) => {
  return isOpen ? (
    <div className='fixed inset-0 bg-black/25 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-white p-12 rounded-md flex flex-col justify-center items-center w-[500px]'>
            <div className='w-full flex justify-end'>
                <AiOutlineClose onClick={onTap} className='cursor-pointer' size={25}/>
            </div>
        <p className='text-[20px] font-bold mb-8 mt-5'>Add Category</p>
        <div className='text-left my-1 w-full'>
        <p className='font-bold mb-1'>Category Name</p>
        <input id="categoryname" type= 'text' name="categoryname" placeholder={'Enter category name'} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-full py-2 px-2 rounded-lg' required/>
    </div>
    <div className={'w-full mt-10 bg-secondaryColor text-onPrimary rounded-lg mx-auto cursor-pointer hover:bg-primaryColor hover:text-onPrimary'}>
            <div className='mx-5 py-2 text-center'>
                Add</div>
        </div>
        </div>
    </div>
  ) : (<></>)
}

export default CategoryModal