import React from 'react'
import Navbar from '../../../components/navbar'
import {IoMdAdd} from 'react-icons/io'

const AddProducts = () => {
  return (
    <>
    <Navbar />
    <div className='w-screen flex justify-center'>
        <div className='w-3/5 items-center border-2 rounded-lg border-textFormBorderbg px-10 pb-10 mt-10'>
        <div className='grid text-center gap-2 mb-5 mt-10'>
        <div className='uppercase text-3xl'>Add Product</div>
                </div>
                <div className='text-left my-1'>
        <p className='font-bold mb-1'>Title</p>
        <input id="title" type= 'text' name="title" placeholder={'Enter the product title'} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-full py-2 px-2 rounded-lg' required/>
    </div>
    <div className='text-left my-4'>
        <p className='font-bold mb-1'>URL</p>
        <input id="url" type= 'text' name="url" placeholder={'Enter the product url'} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-full py-2 px-2 rounded-lg' required/>
    </div>
    <div className='text-left my-1'>
        <p className='font-bold mb-1'>Description</p>
        <textarea name="description" rows="5" id="description" placeholder={'Enter the product description'} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-full py-1 px-2 rounded-lg' required/>
    </div>
    <div className='text-left my-1'>
        <p className='font-bold mb-1'>Image</p>
        <div className='w-full h-[153px] border-2 border-dashed border-textFormBorderbg flex flex-col justify-center items-center'>
            <IoMdAdd size={40} className='text-primaryColor cursor-pointer'/>
        </div>
    </div>
    <div className='bg-primaryColor text-onPrimary rounded-lg w-full py-2 flex justify-center my-1 cursor-pointer text-center hover:bg-secondaryColor mt-20'>
                <p className='font-bold'>Add Product</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddProducts