import React, { useEffect, useState } from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const EditCategoryModal = ({category, editCategory, isOpen, onTap}) => {

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const [inputValues, setInputValues] = useState({
        id: category.id,
        categoryname: category.name,
        categorydescription: category.description
      })

    useEffect(() => {
        setInputValues({
            id: category.id,
            categoryname: category.name,
            categorydescription: category.description
          })
      }, [category]);

      const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValues((prevState) => ({ ...prevState, [name]: value }));
      };

    function updateCategory(name, description) {

        const token = localStorage.getItem('token');
        setIsSubmitting(true)
    
        const query = `
                mutation {
                    update_categories_by_pk(pk_columns: {id: "${inputValues.id}"}
                    _set: {
                    name: "${name}",
                    description: "${description}"
                    }
                    ){
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
    
              let category = data.data;
    
              if((typeof category === 'undefined')) {
                console.log(data);
                setIsSubmitting(false)
                setIsValid(false)
              } else {
                editCategory({id: inputValues.id, name: `${name}`, description: `${description}`});
                setIsSubmitting(false)
                setIsValid(true)
                onTap();
              }
            });
      }

      function onSubmit(event) {
        event.preventDefault()
        updateCategory(event.target.categoryname.value, event.target.categorydescription.value);
      }

  return isOpen ? (
    <div className='fixed inset-0 bg-black/25 backdrop-blur-sm flex justify-center items-center'>
        <div className='bg-white p-12 rounded-md flex flex-col justify-center items-center w-[500px]'>
            <div className='w-full flex justify-end'>
                <AiOutlineClose onClick={onTap} className='cursor-pointer' size={25}/>
            </div>
        <p className='text-[20px] font-bold mb-8 mt-5'>Edit Category</p>
        <form onSubmit={onSubmit} className='w-full'> 
        <div className='text-left my-1 w-full'>
        <p className='font-bold mb-1'>Category Name</p>
        <input value={inputValues.categoryname} id="categoryname" type= 'text' name="categoryname" placeholder={'Enter category name'} onChange={handleChange} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-full py-2 px-2 rounded-lg' required/>
    </div>
    <div className='text-left my-1 w-full'>
        <p className='font-bold mb-1'>Description</p>
        <textarea value={inputValues.categorydescription} name="categorydescription" rows="5" id="categorydescription" placeholder={'Enter the category description'} onChange={handleChange} className='bg-textFormbg border-textFormBorderbg border-2 outline-none w-full py-1 px-2 rounded-lg' required/>
    </div>
    <div className='text-red-400 mt-10 w-full text-center mb-2 font-medium'>{isValid ? "" : "Something went wrong"}</div>
    <button type='submit' disabled={isSubmitting} className='w-full bg-secondaryColor disabled:bg-gray-300 disabled:text-gray-600 text-onPrimary rounded-lg cursor-pointer  py-2 text-center hover:bg-primaryColor'>
                                {isSubmitting ? "Please Wait..." : "Edit"}
                            </button>
        </form>
        </div>
    </div>
  ) : (<></>)
}

export default EditCategoryModal