import React, { useState } from 'react'
import AdminModal from './admin_modal'
import DeleteModal from './delete_modal'
import EditAdminModal from './edit_admin_modal'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'

const admins = [
  { name: 'Abeni W', email: 'abenezerwassihun@gmail.com'},
  { name: 'Abeni W', email: 'abenezerwassihun@gmail.com'},
  { name: 'Abeni W', email: 'abenezerwassihun@gmail.com'},
  { name: 'Abeni W', email: 'abenezerwassihun@gmail.com'},
  { name: 'Abeni W', email: 'abenezerwassihun@gmail.com'},
  { name: 'Abeni W', email: 'abenezerwassihun@gmail.com'},
  { name: 'Abeni W', email: 'abenezerwassihun@gmail.com'},
  { name: 'Abeni W', email: 'abenezerwassihun@gmail.com'},
]

const AdminsComponent = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

  function onDelete() {
    console.log("Delete");
  }

  return (
    <>
    <DeleteModal onClick={onDelete} isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="Delete link">
        <p>Are you sure you want to delete this admin ?</p>
      </DeleteModal>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-10 mx-10 mt-10'>
      {admins.map((admin) => (
        <div className='border-2 rounded-md px-8 py-8 bg-surface'>
        <div className='w-full flex justify-end'>
          <BiEdit onClick={() => setIsEditOpen(true)} size={21} className='text-primaryColor cursor-pointer'/>
          <AiOutlineDelete onClick={() => setIsDeleteOpen(true)} size={21} className='text-dangerColor cursor-pointer ml-2'/>
          </div>
        <p className='text-[24px]'>{admin.name}</p>
        <p className='text-[16px]'>{admin.email}</p>
      </div>
      ))}
    </div>
    <AdminModal isOpen={isOpen} onTap={() => setIsOpen(!isOpen)}/>
    <EditAdminModal isOpen={isEditOpen} onTap={() => setIsEditOpen(!isEditOpen)}/>
    </>
  )
}

export default AdminsComponent