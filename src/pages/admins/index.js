import React, { useState } from 'react'
import Navbar from '../../../components/navbar'
import AdminsComponent from '../../../components/admins_component'
import AddIcon from '@mui/icons-material/Add';
import AdminModal from '../../../components/admin_modal';

const Admins = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
    <Navbar />
    <AdminsComponent />
    <div className='fixed bottom-16 right-16'>
      <div onClick={() => setIsOpen(true)} className='p-4 rounded-full cursor-pointer bg-primaryColor text-onPrimary hover:bg-secondaryColor'>
        <AddIcon />
      </div>
      </div>
     <AdminModal isOpen={isOpen} onTap={() => setIsOpen(!isOpen)}/>
  
    </>
  )
}

export default Admins