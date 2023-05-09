import React, { useEffect, useState } from 'react'
import DeleteModal from './delete_modal'
import EditAdminModal from './edit_admin_modal'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import AddIcon from '@mui/icons-material/Add';
import AdminModal from './admin_modal';

const AdminsComponent = () => {

  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [admins, setAdmins] = useState([]);
  const [selectedAdmin, setSelectedAdmin] = useState();
  const [isOpen, setIsOpen] = useState(false)

  function onDelete() {
    console.log("Delete");
  }

  const fetchData = () => {

    const token = localStorage.getItem('token');

    const query = `
            query {
              admin{
                username
                email
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

          let prods = data.data;

          if((typeof prods === 'undefined')) {
            console.log(data)
          } else {
            setAdmins(data.data.admin);
          }
        });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <DeleteModal onClick={onDelete} isOpen={isDeleteOpen} onClose={() => setIsDeleteOpen(false)} title="Delete link">
        <p>Are you sure you want to delete this admin ?</p>
      </DeleteModal>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-10 mx-10 mt-10'>
      {admins.map((admin) => (
        <div key={admin.id} className='border-2 rounded-md px-8 py-8 bg-surface'>
        <div className='w-full flex justify-end'>
          <BiEdit onClick={() => {
            setSelectedAdmin(admin);
            setIsEditOpen(true)}} size={21} className='text-primaryColor cursor-pointer'/>
          <AiOutlineDelete onClick={() => setIsDeleteOpen(true)} size={21} className='text-dangerColor cursor-pointer ml-2'/>
          </div>
        <p className='text-[24px]'>{admin.username}</p>
        <p className='text-[16px]'>{admin.email}</p>
      </div>
      ))}
    </div>
    {selectedAdmin && <EditAdminModal admin={selectedAdmin} editAdmin={(editedAdmin) => setAdmins(admins.find(function(admin) {
                                                  if (admin.id === editedAdmin.id) {
                                                    admin = editedAdmin;
                                                  }
                                                }))} isOpen={isEditOpen} onTap={() => setIsEditOpen(!isEditOpen)}/>}
    <div className='fixed bottom-16 right-16'>
      <div onClick={() => setIsOpen(true)} className='p-4 rounded-full cursor-pointer bg-primaryColor text-onPrimary hover:bg-secondaryColor'>
        <AddIcon />
      </div>
      </div>
     <AdminModal addAdmin={(admin) => setAdmins([...admins, admin])} isOpen={isOpen} onTap={() => setIsOpen(!isOpen)}/>
    </>
  )
}

export default AdminsComponent